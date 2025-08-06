import React from "react";
import { Link, Outlet } from "react-router-dom";

function EmpLayout(props) {
  return (
    <div>
      <h1>직원작업들</h1>
      <ul>
        <li>
          <Link to="/emp/list">조회</Link>
        </li>
        <li>
          <Link to="/emp/insert">입력</Link>
        </li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default EmpLayout;
