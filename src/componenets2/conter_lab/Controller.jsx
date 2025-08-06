import React from "react";

function Controller({ count, setCount }) {
  const countHandelr = (e) => {
    setCount(count + e);
  };
  return (
    <div>
      <button onClick={() => countHandelr(-1)}>-1</button>
      <button onClick={() => countHandelr(-10)}>-10</button>
      <button onClick={() => countHandelr(-100)}>-100</button>
      <button onClick={() => countHandelr(1)}>+1</button>
      <button onClick={() => countHandelr(10)}>+10</button>
      <button onClick={() => countHandelr(100)}>+100</button>
    </div>
  );
}

export default Controller;
