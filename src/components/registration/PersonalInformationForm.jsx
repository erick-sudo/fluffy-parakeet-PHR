import React from "react";
import { Form, Button, Card } from "react-bootstrap";

const PersonalInformationForm = () => {
  return (
    <div className="p-4">
      <Card style={{backgroundColor: 'transparent', border: 'none'}} data-bs-theme="">
        <Card.Header style={{backgroundColor: 'transparent', border: 'none'}}>
          <span>Personal Information</span>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formFullName">
              <Form.Label>Full Name:</Form.Label>
              <Form.Control
                type="text"
                name="full_name"
                placeholder="Enter full name"
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
                placeholder="Enter SSN"
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
                placeholder="Enter occupation"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPreferredLanguage">
              <Form.Label>Preferred Language:</Form.Label>
              <Form.Control
                type="text"
                name="preferred_language"
                placeholder="Enter preferred language"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formContactNumberHome">
              <Form.Label>Contact Number (Home):</Form.Label>
              <Form.Control
                type="tel"
                name="contact_number_home"
                placeholder="Enter home contact number"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formContactNumberMobile">
              <Form.Label>Contact Number (Mobile):</Form.Label>
              <Form.Control
                type="tel"
                name="contact_number_mobile"
                placeholder="Enter mobile contact number"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmailAddress">
              <Form.Label>Email Address:</Form.Label>
              <Form.Control
                type="email"
                name="email_address"
                placeholder="Enter email address"
              />
            </Form.Group>

            <div>
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
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PersonalInformationForm;
