import React, { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter App</h1>
      <h2>현재 값: {count}</h2>
      <div>
        <button onClick={increase}>+1 증가</button>
        <button onClick={decrease}>-1 감소</button>
        <button onClick={reset}>초기화</button>
      </div>
    </div>
  );
}

export default CounterApp;
