import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import EmpListHeader from "./EmpListHeader";
import EmpListData from "./EmpListData";
import { Table } from "react-bootstrap";

function EmpListPage(props) {
  const [searchParams] = useSearchParams();

  const sortOrder = searchParams.get("sort") || "latest";

  const [empList, setEmpList] = useState([]);

  const springPath = process.env.REACT_APP_SPRING_FRAMEWORK_URL;

  useEffect(() => {
    const body = {};
    const headers = { headers: {} };
    axios(`${springPath}/emp/api/emplist.do`, body, headers)
      .then((response) => {
        console.log("응답data:", response.data);
        setEmpList(response.data);
      })
      .catch((error) => {
        console.log("에러코드:" + error.status);
        console.log("에러메세지:" + error.message);
      })
      .finally(() => {
        console.log("emplist...axios 완료");
      });
  }, []);

  return (
    <div>
      <h1>직원목록 : {sortOrder}</h1>
      <Table className="striped bordered hover">
        <EmpListHeader />
        <tbody>
          {empList.map((emp, index) => (
            <tr key={emp.employee_id}>
              <EmpListData emp={emp} cpath={springPath} />
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default EmpListPage;
