import React from "react";

function EmpListHeader() {
  return (
    <>
      <caption>모든직원List</caption>
      <thead>
        <tr>
          <th>순서</th>
          <th>로그인여부</th>
          <th>직원번호</th>
          <th>이름</th>
          <th>성</th>
          <th>급여</th>
          <th>이메일</th>
          <th>부서</th>
          <th>커미션</th>
          <th>매니저</th>
          <th>전화번호</th>
          <th>직책</th>
          <th>입사일</th>
          <th>삭제</th>
        </tr>
      </thead>
    </>
  );
}

export default EmpListHeader;
