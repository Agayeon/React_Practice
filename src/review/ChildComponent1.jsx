// Component는 반드시 대문자 시작 이름, 확장자는 js, jsx, tag로 사용 가능, 반복 사용 가능
import React from "react";
import { useState } from "react";

function f1() {
  alert("f1 함수입니당");
}

function ChildComponent1(money = 3000, house = "50평", children) {
  // 1. 속성 전달
  // 2. 상태 관리 ... 값이 변경되면 React가 UI를 Rending 한다.
  const [score, setScore] = useState(0); // 초기값을 score에 setting score = 0

  //자식이 상태값이 변경되면 자식을 rendering
  // 부모의 상태값이 변경되면 자식도 rendering ... 관련이 없다면 Component를 memo 한다.
  console.log("자식 rendering");
  const scoreChangeHandler = (e) => {
    setScore(e.target.value);
  };
  return (
    <div>
      <h2>자식 Component : {score} </h2>
      <input onChange={scoreChangeHandler} />
      <p>부모에게 받은 속성 : {children}</p>
      <p>부모에게 받은 속성 : {house}</p>
      <p>부모에게 받은 속성 : {house}</p>
    </div>
  );
}
export default React.memo(ChildComponent1);
