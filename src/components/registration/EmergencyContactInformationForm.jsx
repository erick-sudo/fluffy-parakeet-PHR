import React, { useContext, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import SubmitButton from "../common/SubmitButton";
import { AuthContext } from "../AuthContext";

const EmergencyContactInformationForm = () => {
  const { submitHandler } = useContext(AuthContext);

  const [formData, setFormData] = useState({})

  return (
    <div className="p-4">
      <Card>
        <Card.Header>
          <span>Emergency Contact Information</span>
        </Card.Header>
        <Card.Body>
          <Form
            onSubmit={(e) => {
              submitHandler({
                event: e,
                endPoint: "emergency_contact_information",
                httpMethod: "PATCH",
                payload: formData,
              });
            }}
          >
            <Form.Group className="mb-3" controlId="formEmergencyContactName">
              <Form.Label>Full Name of Emergency Contact</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter emergency contact's full name"
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formEmergencyContactRelationship"
            >
              <Form.Label>Relationship to Patient</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter relationship to patient"
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formEmergencyContactNumberHome"
            >
              <Form.Label>Contact Number (Home)</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter home contact number"
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formEmergencyContactNumberMobile"
            >
              <Form.Label>Contact Number (Mobile)</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter mobile contact number"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmergencyContactEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter email address" />
            </Form.Group>

            <div className=" ml-[10%] w-[90%]">
              <span className="font-bold text-xl">Address</span>
              <Form.Group className="mb-3" controlId="formAddressStreet">
                <Form.Label>Street:</Form.Label>
                <Form.Control
                  type="text"
                  name="address_street"
                  placeholder="Enter street address"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formAddressCity">
                <Form.Label>City:</Form.Label>
                <Form.Control
                  type="text"
                  name="address_city"
                  placeholder="Enter city"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formAddressState">
                <Form.Label>State/Province:</Form.Label>
                <Form.Control
                  type="text"
                  name="address_state"
                  placeholder="Enter state/province"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formAddressZip">
                <Form.Label>ZIP/Postal Code:</Form.Label>
                <Form.Control
                  type="text"
                  name="address_zip"
                  placeholder="Enter ZIP/postal code"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formAddressCountry">
                <Form.Label>Country:</Form.Label>
                <Form.Control
                  type="text"
                  name="address_country"
                  placeholder="Enter country"
                />
              </Form.Group>
            </div>

            <SubmitButton val="Update Emergency Information" />
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EmergencyContactInformationForm;
