import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const Index = () => (
  <div>
    <div>asdfasdf</div>
    <Form
      onSubmit={e => {
        e.preventDefault();
        const body = {
          email: e.target.email.value,
        };
        console.log("hoasdf", e);
        console.log("hoasdf", e.target);
        console.log("hoasdf", e.target.elements);
        console.log("hoasdf", e.target.email.value);
      }}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" id="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </div>
);

export default Index;
