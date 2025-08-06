import React from "react";

function HobbyDisplay({ hobbyArr = [] }) {
  console.log("HobbyDisplay rendering");
  return (
    <div style={{ border: "1px solid blue" }}>
      <h3>hobby display</h3>
      <ul>
        {hobbyArr.map((item, index) => (
          <li key={index}>
            {item.title}의 회비는 {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HobbyDisplay;
