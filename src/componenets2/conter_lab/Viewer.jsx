import React from "react";

function Viewer({ count }) {
  return (
    <div>
      <h3>현재 카운트</h3>
      <p>{count}</p>
    </div>
  );
}

export default Viewer;
