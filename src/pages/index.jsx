import * as React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

const FormComp = ({ onSubmit }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState(null);
  if (submitState === "success") return <div>Thanks!</div>;
  return (
    <Form
      //   action="/api/form"
      //   method="POST"
      onSubmit={async e => {
        e.preventDefault();
        setIsSubmitting(true);
        await onSubmit(e);
        setIsSubmitting(false);
        setSubmitState("success");
      }}
      disabled
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          id="email"
          placeholder="Enter email"
          disabled={isSubmitting}
        />
        {/* <Form.Text className="text-muted">
    We'll never share your email with anyone else.
  </Form.Text> */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First name</Form.Label>
        <Form.Control
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          disabled={isSubmitting}
        />
        {/* <Form.Text className="text-muted">
    We'll never share your email with anyone else.
  </Form.Text> */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last name</Form.Label>
        <Form.Control
          type="text"
          id="lastName"
          placeholder="Enter your last name"
          disabled={isSubmitting}
        />
        {/* <Form.Text className="text-muted">
    We'll never share your email with anyone else.
  </Form.Text> */}
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Password</Form.Label>
  <Form.Control type="password" placeholder="Password" />
</Form.Group> */}
      <Row>
        <Col>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Col>
        <Col>
          {isSubmitting && <Spinner animation="border" role="status"></Spinner>}
        </Col>
      </Row>
    </Form>
  );
};

const Index = () => {
  const onSubmit = async e => {
    e.preventDefault();
    const body = {
      email: e.target.email.value,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
    };
    await fetch("/api/form", {
      method: "post",
      body: JSON.stringify(body),
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    // console.log("hoasdf", e);
    // console.log("hoasdf", e.target);
    // console.log("hoasdf", e.target.elements);
    // console.log("hoasdf", e.target.email.value);
  };
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col s lg="4">
          <FormComp onSubmit={onSubmit}></FormComp>
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
