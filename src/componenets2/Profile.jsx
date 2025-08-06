import React from "react";

function Profile({ name, age, children }) {
  console.log(name, age);

  return (
    <div style={{ border: "1px solid green", padding: "10px", margin: "10px" }}>
      <p>이름: {name}</p>
      <p>나이: {age}</p>
      {children}
    </div>
  );
}

export default Profile;
