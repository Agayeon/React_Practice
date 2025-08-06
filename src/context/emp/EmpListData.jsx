import React from "react";
import { Link } from "react-router-dom";

function EmpListData({ emp, cpath }) {
  //클라이언트 라우트에 설정된 주소 연결
  const detailPath = `/emp/empdetail.do/${emp.employee_id}`; //URL에 포함, 동적 세그먼트 이용
  //   const detailPath = `${cpath}/emp/empdetail.do?empid2=${emp.employee_id}`;
  // 서버 주소
  const springPath = `${cpath}/emp/api/empdetail.do`;
  return (
    <>
      <td>
        <Link to={detailPath}>{emp.employee_id}</Link>
      </td>
      <td>{emp.first_name}</td>
      <td>{emp.last_name}</td>
      <td>{emp.salary}</td>
      <td>{emp.email}</td>
      <td>{emp.department_id}</td>
      <td>{emp.commission_pct}</td>
      <td>{emp.manager_id}</td>
      <td>{emp.phone_number}</td>
      <td>{emp.job_id}</td>
      <td>{emp.hire_date}</td>
      <td>
        <button>삭제</button>
      </td>
    </>
  );
}

export default EmpListData;
