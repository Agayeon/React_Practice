import React from "react";
import { InputGroup, Form } from "react-bootstrap";

function Inputcomponent(props) {
  return (
    <div>
      <InputGroup>
        <InputGroup.Text>{props.label}</InputGroup.Text>
        <Form.Control
          name={props.label}
          aria-label={props.label}
          onChange={props.onChange}
        ></Form.Control>
        <Form.Control>
          name={props.label}
          aria-lable={props.label}
          onChange=
          {(e) => {
            props.onChange2(e.target.value);
          }}
        </Form.Control>
      </InputGroup>
    </div>
  );
}

export default Inputcomponent;
