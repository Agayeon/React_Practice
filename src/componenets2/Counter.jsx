import React, { useEffect, useState } from "react";
import "./counter2.css";

function Counter(props) {
  // 상태관리 : useState Hook 이용
  const [count, setCount] = useState(0);
  const incrementHandler = () => {
    setCount(count + 1);
  };
  const decrementHandelr = () => {
    setCount(count - 1);
  };
  const resetHandler = () => {
    setCount(0);
  };
  const clickHandler = (e) => {
    const text = e.target.innerText;
    console.log(e.target.innerText);
    if (text == "+") {
      setCount(count + 1);
    }
    if (text == "-") {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };
  // count가 변경되었는지 확인하고자한다. useEffect()훅을 이용,
  // 의존배열에 변수를 주면 그 변수가 변경되었을 떄만 수행한다.
  useEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <div className="counter-container">
      <h2 className="counter-display">{count}</h2>
      <div className="counter-buttons">
        <button className="counter-button" onClick={clickHandler}>
          -
        </button>
        <button className="counter-button reset" onClick={clickHandler}>
          reset
        </button>
        <button className="counter-button" onClick={clickHandler}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
