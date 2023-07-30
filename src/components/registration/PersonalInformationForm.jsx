import React, { useContext, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import SubmitButton from "../common/SubmitButton";
import { AuthContext } from "../AuthContext";

const PersonalInformationForm = () => {
  const { submitHandler } = useContext(AuthContext);

  const [formData, setFormData] = useState({});

  return (
    <div className="p-4">
      <Card data-bs-theme="">
        <Card.Header>
          <span>Personal Information</span>
        </Card.Header>
        <Card.Body>
          <Form
            onSubmit={(e) =>
              submitHandler({
                event: e,
                endPoint: "personal_information",
                httpMethod: "PATCH",
                payload: formData,
              })
            }
          >
            <Form.Group className="mb-3" controlId="formFullName">
              <Form.Label>Full Name:</Form.Label>
              <Form.Control
                type="text"
                name="full_name"
                placeholder="full name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDateOfBirth">
              <Form.Label>Date of Birth:</Form.Label>
              <Form.Control type="date" name="date_of_birth" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGender">
              <Form.Label>Gender:</Form.Label>
              <div className="flex flex-wrap gap-2">
                <Form.Check
                  type="radio"
                  name="gender"
                  value="male"
                  label="Male"
                />
                <Form.Check
                  type="radio"
                  name="gender"
                  value="female"
                  label="Female"
                />
                <Form.Check
                  type="radio"
                  name="gender"
                  value="other"
                  label="Other"
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSocialSecurityNumber">
              <Form.Label>Social Security Number (SSN):</Form.Label>
              <Form.Control
                type="text"
                name="social_security_number"
                placeholder="SSN"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMaritalStatus">
              <Form.Label>Marital Status:</Form.Label>
              <Form.Control as="select" name="marital_status">
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
                <option value="other">Other</option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formOccupation">
              <Form.Label>Occupation:</Form.Label>
              <Form.Control
                type="text"
                name="occupation"
                placeholder="occupation"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPreferredLanguage">
              <Form.Label>Preferred Language:</Form.Label>
              <Form.Control
                type="text"
                name="preferred_language"
                placeholder="preferred language"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formContactNumberHome">
              <Form.Label>Contact Number (Home):</Form.Label>
              <Form.Control
                type="tel"
                name="contact_number_home"
                placeholder="home contact number"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formContactNumberMobile">
              <Form.Label>Contact Number (Mobile):</Form.Label>
              <Form.Control
                type="tel"
                name="contact_number_mobile"
                placeholder="mobile contact number"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmailAddress">
              <Form.Label>Email Address:</Form.Label>
              <Form.Control
                type="email"
                name="email_address"
                placeholder="email address"
              />
            </Form.Group>

            <div>
              <Form.Group className="mb-3" controlId="formAddressStreet">
                <Form.Label>Street:</Form.Label>
                <Form.Control
                  type="text"
                  name="address_street"
                  placeholder="street address"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formAddressCity">
                <Form.Label>City:</Form.Label>
                <Form.Control
                  type="text"
                  name="address_city"
                  placeholder="city"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formAddressState">
                <Form.Label>State/Province:</Form.Label>
                <Form.Control
                  type="text"
                  name="address_state"
                  placeholder="state/province"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formAddressZip">
                <Form.Label>ZIP/Postal Code:</Form.Label>
                <Form.Control
                  type="text"
                  name="address_zip"
                  placeholder="ZIP/postal code"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formAddressCountry">
                <Form.Label>Country:</Form.Label>
                <Form.Control
                  type="text"
                  name="address_country"
                  placeholder="country"
                />
              </Form.Group>
            </div>

            <SubmitButton val="Update Personal Information" />
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PersonalInformationForm;
