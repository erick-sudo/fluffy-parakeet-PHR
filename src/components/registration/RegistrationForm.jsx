import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Person, Envelope, Key, Check2, House } from "react-bootstrap-icons";
import PhrLogo from "../common/PhrLogo";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../common/SubmitButton";

const RegistrationForm = () => {
  const [isMedicalPractitioner, setIsMedicalPractitioner] = useState(false);

  const handleRoleChange = (event) => {
    setIsMedicalPractitioner(event.target.checked);
  };

  const navigate = useNavigate();

  return (
    <Card>
      <Card.Header>
        <PhrLogo text="Register" />
      </Card.Header>
      <Card.Body>
        <Form className="max-w-lg mx-auto">
          <Form.Group controlId="formName">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
          </Form.Group>

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

          <Form.Group controlId="formConfirmPassword">
            <Form.Label>Confirm Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm your password"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Role:</Form.Label>
            <div className="mb-4">
              <Form.Check
                inline
                type="switch"
                label="Medical Practitioner"
                name="role"
                checked={isMedicalPractitioner}
                onChange={handleRoleChange}
              />
            </div>
          </Form.Group>

          {isMedicalPractitioner && (
            <div>
              <Form.Group controlId="formMedicalLicenseNumber">
                <Form.Label>Medical License Number:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your medical license number"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formSpecialty">
                <Form.Label>Specialty:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your specialty"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formClinicName">
                <Form.Label>Clinic Name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your clinic name"
                  required
                />
              </Form.Group>
            </div>
          )}

          <div class="text-center flex justify-center gap-2 mt-4">
            <span>Already have an account?</span>
            <a
              onClick={(e) => {
                e.preventDefault();
                navigate("/login");
              }}
              href="/login"
            >
              <span>Sign in instead</span>
            </a>
          </div>

          <SubmitButton />
        </Form>
      </Card.Body>
    </Card>
  );
};

export default RegistrationForm;
