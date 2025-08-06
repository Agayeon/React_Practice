import React from "react";
import Profile from "./Profile";

function APP4(props) {
  const user = { name: "가연", age: 25 };
  const user2 = { ...user, age: 40 };
  const { name, age } = user2;
  console.log("부모:", name, age);

  return (
    <div>
      <Profile name="상현" age={10}></Profile>
      <Profile name={user.name} age={user.age}></Profile>
      <Profile {...user2}>
        <p style={{ color: "blue" }}>user의 자식</p>
      </Profile>
      <Profile {...user2}>
        <p style={{ color: "red" }}>user2의 자식</p>
      </Profile>
    </div>
  );
}

export default APP4;
