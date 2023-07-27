import React from "react";
import { Form, Button, Card } from "react-bootstrap";

const PrivacyAndConsentForm = () => {
  return (
    <div className="m-4">
      <Card style={{border: "none"}}>
        <Card.Header>
          <span>Privacy and Consent</span>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group controlId="healthRecordsAuth">
              <Form.Check
                type="checkbox"
                label="1. I hereby authorize the healthcare facility and its medical professionals to access and maintain my health records for treatment purposes."
              />
            </Form.Group>

            <Form.Group controlId="healthInfoResearch">
              <Form.Check
                type="checkbox"
                label="2. I understand that my personal health information may be used for medical research, provided my identity is protected and kept confidential."
              />
            </Form.Group>

            <Form.Group controlId="healthInfoChanges">
              <Form.Check
                type="checkbox"
                label="3. I acknowledge that it is my responsibility to inform the healthcare facility of any changes in my health information."
              />
            </Form.Group>

            <Form.Group controlId="privacyPolicies">
              <Form.Check
                type="checkbox"
                label="4. I understand the privacy policies and practices in place to safeguard my health records."
              />
            </Form.Group>

            <Button className="w-full my-4" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PrivacyAndConsentForm;
