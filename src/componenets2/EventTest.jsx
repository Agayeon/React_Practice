import React from "react";
import { Button } from "react-bootstrap";

function EventTest(props) {
  const buttonHandler = (event) => {
    alert(event.target.textContent); //innerTextt
  };
  const chanageHandler = (e) => {
    console.log(e.target.name, e.target.value);
  };
  return (
    <div>
      <Button
        variant="primary"
        onClick={(e) => {
          alert(e.target.innerText);
        }}
      >
        버튼1
      </Button>
      <Button variant="success" onClick={buttonHandler}>
        버튼2
      </Button>
      <Button variant="secondary" onClick={buttonHandler}>
        버튼3
      </Button>
      <input name="email" onChange={chanageHandler} placeholder="이메일입력" />
      <input
        name="phone"
        onChange={chanageHandler}
        placeholder="전화번호입력"
      />
    </div>
  );
}

export default EventTest;
