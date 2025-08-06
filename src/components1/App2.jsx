import React from "react";
import WelcomeFunc from "componets1/WelcomeFunc";
import WelcomeClass from "componets1/WelcomeClass";

// import WelcomeFunc2 from "./WelcomeFunc2";

function App2(props) {
  return (
    <div>
      <WelcomeFunc name="func1"></WelcomeFunc>
      <WelcomeFunc name="func2"></WelcomeFunc>
      {/* <WelcomeFunc name="func3소문자"></WelcomeFunc> */}
      <WelcomeClass name="class1"></WelcomeClass>
      <WelcomeClass name="class2"></WelcomeClass>
    </div>
  );
}

export default App2;
