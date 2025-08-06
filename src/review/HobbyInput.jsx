import React from "react";

function HobbyInput({ hobbyChangeHandler, addClickHandler }) {
  return (
    <div style={{ border: "1px solid green" }}>
      <h3>hobby input</h3>
      title: <input name="title" onChange={hobbyChangeHandler} />
      price : <input name="price" onChange={hobbyChangeHandler} />
      <button onClick={addClickHandler}>취미 추가</button>
    </div>
  );
}

export default React.memo(HobbyInput);
