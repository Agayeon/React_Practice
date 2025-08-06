import Outline from "./Outline";
import Skill from "./Skill";
import Team from "./Team";
import Technology from "./Technology";
import "App.css";

import React from "react";

function APP(props) {
  return (
    <div>
      <h1 className="main-title">me:mento</h1>
      <Outline />
      <Skill />
      <Team />
      <Technology />
    </div>
  );
}

export default APP;
