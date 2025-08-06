import React, { useEffect, useState, useMemo } from "react";

/* 자식의 상태가 변경되면 자식만 Re-rendering
    부모의 상태가 변경되면 자식도 Re-rendering
    (이를 해결하려면 자식 component에 Memoization 이용)
    React.memo(자식 컴포넌트)
*/

function Comp2Child({ clickHander2 }) {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(100);

  useEffect(() => {
    console.log("Comp2Child.....자식Rendering");
  });
  const anotherClick = () => {
    setCount2(count2 + 1);
  };
  const clickHander = () => {
    setCount(count + 1);
  };
  const changeHandler2 = (e) => {
    clickHander2(e.target.value);
  };

  // 오래 걸리는 연산작업
  const expensiveCaculation = (num) => {
    console.log("오래걸리는 연산작업중...");
    for (let i = 1; i <= 1000; i++) {
      num += i;
    }
    return num;
  };
  // 값을 Memoization, 의존배열이 변경된 경우만 함수를 수행하도록 하다.
  // useMemo(함수, [의존배열])
  const result = useMemo(() => expensiveCaculation(count), [count]);

  return (
    <div style={{ border: "1px solid green" }}>
      <h1>자식Component입니다. count: {count}</h1>
      <p>오래걸려서 계산한 결과 : {result}</p>
      <button onClick={clickHander}>클릭(자식)</button>
      <input onChange={changeHandler2} />
      <button onClick={anotherClick}>클릭(자식 count2)</button>
    </div>
  );
}

export default React.memo(Comp2Child);
