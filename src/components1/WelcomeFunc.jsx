import React from "react";

function WelcomeFunc(arg) {
  console.log("welcomFunc rendering..." + arg);
  return (
    <div>
      <h1>Hello,{arg.name} (함수형 컴포넌트)</h1>
    </div>
  );
}

export default WelcomeFunc;
// export {welcomeFunc};
