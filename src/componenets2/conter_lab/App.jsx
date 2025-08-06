import React, { useState } from "react";
import Viewer from "./Viewer";
import Controller from "./Controller";
import "conter_lab/count.css";

function App(props) {
  const snowArray = Array.from({ length: 30 }, (_, i) => (
    <div
      key={i}
      className="snowflake"
      style={{
        left: `${Math.random() * 100}vw`,
        animationDuration: `${4 + Math.random() * 4}s`,
        fontSize: `${10 + Math.random() * 20}px`,
      }}
    >
      ❄
    </div>
  ));
  const [count, setCount] = useState(0);

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <h1>Simple Counter</h1>
      <Viewer count={count} />
      <Controller setCount={setCount} count={count} />
      {snowArray}
    </div>
  );
}

export default App;
