import React from "react";
import { Stack } from "react-bootstrap";
import Inputcomponent from "./Inputcomponent";

function InputParent(props) {
  const handleChange = (event) => {
    console.log(event.target.name, event.target.value);
    // dash 속성은 carmel 표기법으로 사용
    //console.log(event.target.arialabel);
  };
  const onChange2 = (data) => {
    console.log("자식에서 받은 data:" + data);
  };
  return (
    <div>
      <Stack direction="horization" gap={2} className="mt-3">
        <Inputcomponent
          label="username"
          onChange={handleChange}
          onChange2={onChange2}
        />
        <Inputcomponent
          label="email"
          onChange={handleChange}
          onChange2={onChange2}
        />
        <Inputcomponent
          label="password"
          onChange={handleChange}
          onChange2={onChange2}
        />
      </Stack>
    </div>
  );
}

export default InputParent;
