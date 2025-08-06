import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { springpath } from "./common";

function EmpDetailPage() {
  const navigate = useNavigate();
  const { empid } = useParams(); // URL에서 사원 ID 추출
  const [emp, setEmp] = useState({});
  const [deptList, setDeptList] = useState([]);
  const [jobList, setJobList] = useState([]);

  // ✅ 부서 및 직책 데이터 로딩
  useEffect(() => {
    axios(`${springpath}/emp/api/selectDeptJob.do`).then((response) => {
      setDeptList(response.data.deptlist);
      setJobList(response.data.joblist);
    });
  }, []);

  // ✅ 상세조회 데이터 로딩
  useEffect(() => {
    axios(`${springpath}/emp/api/empdetail.do?empid2=${empid}`)
      .then((response) => {
        console.log("상세조회 응답:", response.data);
        setEmp(response.data);
      })
      .catch((error) => {
        console.error("상세조회 오류:", error.message);
      });
  }, [empid]);

  // ✅ 변경 핸들러 (수정 가능하게 유지)
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setEmp({ ...emp, [name]: value });
  };

  // ✅ 수정 버튼 핸들러
  const updateButtonHandler = () => {
    axios
      .post(`${springpath}/emp/api/empupdate.do`, emp, {
        headers: { "Content-Type": "application/json" },
      })
      .then(() => {
        alert("사원 정보가 수정되었습니다.");
        navigate("/emp/list");
      })
      .catch((error) => {
        console.error("수정 오류:", error.message);
      });
  };

  // ✅ 삭제 버튼 핸들러
  const deleteButtonHandler = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      axios
        .delete(`${springpath}/emp/api/empdelete.do?empid=${empid}`)
        .then(() => {
          alert("사원이 삭제되었습니다.");
          navigate("/emp/list");
        })
        .catch((error) => {
          console.error("삭제 오류:", error.message);
        });
    }
  };

  const homeButtonHandler = () => navigate("/");

  return (
    <div>
      <h1>사원 상세 정보</h1>

      <label>직원번호:</label>
      <input
        type="number"
        name="employee_id"
        value={emp.employee_id || ""}
        readOnly
      />

      <br />
      <label>이름:</label>
      <input
        name="first_name"
        value={emp.first_name || ""}
        onChange={changeHandler}
      />
      <br />
      <label>성:</label>
      <input
        name="last_name"
        value={emp.last_name || ""}
        onChange={changeHandler}
      />
      <br />
      <label>이메일:</label>
      <input name="email" value={emp.email || ""} onChange={changeHandler} />
      <br />
      <label>전화번호:</label>
      <input
        name="phone_number"
        value={emp.phone_number || ""}
        onChange={changeHandler}
      />
      <br />

      <hr />
      <label>직책선택:</label>
      <select name="job_id" value={emp.job_id || ""} onChange={changeHandler}>
        <option>직책선택</option>
        {jobList.map((job, index) => (
          <option key={index} value={job.jobId}>
            {job.jobTitle}
          </option>
        ))}
      </select>

      <label>부서선택:</label>
      <select
        name="department_id"
        value={emp.department_id || ""}
        onChange={changeHandler}
      >
        <option>부서선택</option>
        {deptList.map((dept, index) => (
          <option key={index} value={dept.department_id}>
            {dept.department_name}
          </option>
        ))}
      </select>

      <hr />
      <label>manager_id:</label>
      <input
        type="number"
        name="manager_id"
        value={emp.manager_id || ""}
        onChange={changeHandler}
      />
      <br />

      <label>Salary:</label>
      <input
        type="number"
        name="salary"
        value={emp.salary || ""}
        onChange={changeHandler}
      />
      <br />
      <label>commission_pct:</label>
      <input
        type="text"
        name="commission_pct"
        value={emp.commission_pct || ""}
        onChange={changeHandler}
      />
      <br />
      <label>입사일:</label>
      <input
        type="date"
        name="hire_date"
        value={emp.hire_date || ""}
        onChange={changeHandler}
      />
      <br />

      <button onClick={updateButtonHandler}>수정하기</button>
      <button onClick={deleteButtonHandler}>삭제하기</button>
      <button onClick={homeButtonHandler}>Home이동</button>
    </div>
  );
}

export default EmpDetailPage;
