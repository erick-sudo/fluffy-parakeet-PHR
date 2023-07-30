import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Person, Envelope, Key, Check2, House } from "react-bootstrap-icons";
import PhrLogo from "../common/PhrLogo";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../common/SubmitButton";

const LoginForm = () => {
  const [isMedicalPractitioner, setIsMedicalPractitioner] = useState(false);

  const handleRoleChange = (event) => {
    setIsMedicalPractitioner(event.target.checked);
  };

  const navigate = useNavigate()

  return (
    <Card>
      <Card.Header>
        <PhrLogo text="Login" />
      </Card.Header>
      <Card.Body>
        <Form className="max-w-lg mx-auto">
          <Form.Group controlId="formEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              required
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              required
            />
          </Form.Group>

          <div class="text-center flex justify-center gap-2 mt-4">
            <span>New on our platform?</span>
            <a onClick={(e) => {
                e.preventDefault();
                navigate("/register")
            }} href="/register">
              <span>Create an account</span>
            </a>
          </div>

          <SubmitButton />
        </Form>
      </Card.Body>
    </Card>
  );
};

export default LoginForm;
