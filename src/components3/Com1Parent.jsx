import Comp2Child from "components3/Comp2Child";
import React, { useEffect, useState, useCallback } from "react";

function Com1Parent(props) {
  const [message, setMessage] = useState("초기값");
  useEffect(() => {
    console.log("comp1Parent..부모Rendering");
  });
  const changeHandler = (e) => {
    setMessage(e.target.value);
  };
  // 부모가 이벤트 만들어 자식에게 전달
  // 부모가 리렌더링 될떄 함수 정의를 다시한다.
  // 변경된 함수가 자식에게 전달
  // 자식 Re-rendering 된다.
  // 이를 해결하려면 함수를 Memoization한다.
  // useCallback(함수, [의존배열])
  const clickHander2 = useCallback((msg) => {
    setMessage(msg);
  }, []);
  return (
    <div style={{ border: "1px solid blue" }}>
      <h2>부모 Component입니다. message:{message}</h2>
      <input onChange={changeHandler} />
      <Comp2Child clickHander2={clickHander2} />
    </div>
  );
}

export default Com1Parent;
