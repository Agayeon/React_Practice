import React from "react";
import "App.css";
import "components1/header.css";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import "components1/header.scss";

function Header(props) {
  const headerstyle = {
    border: "1px solid green",
    backgroundColor: "orange",
    width: "100%",
    padding: "20px",
  };
  return (
    <>
      <div className="box">
        <p>SASS연습</p>
      </div>
      <div className="container">
        <h1>SASS연습2</h1>
      </div>

      <div className="myH1" style={headerstyle}>
        <h1>Header</h1>
        <h1 style={{ color: "red" }}>Header</h1>
        <Stack direction="horizontal" gap={2}>
          <Button as="a" variant="primary">
            Button as link
          </Button>
          <Button as="a" variant="success">
            Button as link
          </Button>
          <Badge bg="secondary" as={Button}>
            New
          </Badge>
        </Stack>
        <br />
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <hr />
      </div>
    </>
  );
}

export default Header;
