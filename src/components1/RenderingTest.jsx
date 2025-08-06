import React from "react";

function RenderingTest(props) {
  const userName = "짱구";
  const score = 100;
  const score2 = 0;
  const student = { name: "짱구2", age: 5 };

  // rendering 되지 암ㅎ음
  const data1 = false;
  const data2 = null;
  const data3 = undefined;

  return (
    <div>
      <h1>{props.message}</h1>
      <h2>이름은 {userName}</h2>
      <h2>점수는 {score}</h2>
      <h2>
        student 이름은 {student.name}이고, 나이는 {student.age}입니다.
      </h2>
      <h2>false인 경우 보이지 않음: {data1}</h2>
      <h2>null인 경우 보이지 않음: {data2}</h2>
      <h2>undefined인 경우 보이지 않음: {data3}</h2>
      <h2>undefined인 경우 보이지 않음: {data3 || "data가 없음"}</h2>
      <h2>값이 있는 경우 수행 없으면 다음 뒷부분: {score || 200}</h2>
      <h2>값이 있으면 다음 뒷부분: {score && 200}</h2>
      <h2>값이 있으면 다음 뒷부분: {score2 && 200}</h2>
    </div>
  );
}

export default RenderingTest;
