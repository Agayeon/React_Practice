import React, { useEffect, useRef, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

// useRef
// DOM 접근 시 사용
// 최초값이 ReRendering 되었을 때 다시 초기화되지 않은 값이 필요할때
function RefTest(props) {
  const nameRef = useRef();
  const ageRef = useRef();

  const [count, setCount] = useState(0);
  const countRef = useRef(0); // 값이 변겨오디어도 ReRendering 하지 않음
  let countLet = 0; // 일반 변수는 ReRendering 되었을 때 초기화

  const nameHandelr = () => {
    nameRef.current.focus();
  };
  const ageHandelr = () => {
    ageRef.current.focus();
  };
  const countHandelr = () => {
    setCount(count + 1);
    //countLet++;
    countRef.current++;
  };
  useEffect(() => {
    console.log("setCount로 count 변경:" + count);
  }, [count]);

  return (
    <>
      <p>상태관리 : {count}</p>
      <input ref={nameRef} placeholder="이름입력" />
      <input ref={ageRef} placeholder="나이입력" />

      <Button onClick={nameHandelr}>Focus이동1(name)</Button>
      <Button onClick={ageHandelr}>Focus이동2(age)</Button>

      <Button onClick={countHandelr}>값 증가</Button>
    </>
  );
}

export default RefTest;
