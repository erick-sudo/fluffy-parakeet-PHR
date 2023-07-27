import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

const InsuranceInformationForm = () => {
  const [insuranceProviders, setInsuranceProviders] = useState([
    {
      healthInsuranceProvider: "",
      insurancePolicyNumber: "",
      groupNumber: "",
      insuranceProviderPhoneNumber: "",
      insuranceProviderAddress: {
        street: "",
        city: "",
        state: "",
        zip: "",
        country: "",
      },
    },
  ]);
  const handleAddProvider = () => {
    setInsuranceProviders([
      ...insuranceProviders,
      {
        healthInsuranceProvider: "",
        insurancePolicyNumber: "",
        groupNumber: "",
        insuranceProviderPhoneNumber: "",
        insuranceProviderAddress: {
          street: "",
          city: "",
          state: "",
          zip: "",
          country: "",
        },
      },
    ]);
  };
  const handleRemoveProvider = (index) => {
    const updatedProviders = [...insuranceProviders];
    updatedProviders.splice(index, 1);
    setInsuranceProviders(updatedProviders);
  };

  const handleChange = (index, field, value) => {
    setInsuranceProviders((prevProviders) => {
      const updatedProviders = [...prevProviders];
      updatedProviders[index][field] = value;
      return updatedProviders;
    });
  };

  const handleAddressChange = (index, field, value) => {
    setInsuranceProviders((prevProviders) => {
      const updatedProviders = [...prevProviders];
      updatedProviders[index].insuranceProviderAddress[field] = value;
      return updatedProviders;
    });
  };

  return (
    <div className="m-4">
      <Card>
        <Card.Header>
          <span>Insurance Information</span>
        </Card.Header>
        <Card.Body>
          <>
            {insuranceProviders.map((provider, index) => (
              <div key={index}>
                <h2>Insurance Provider {index + 1}</h2>
                <Form.Group>
                  <Form.Label>Health Insurance Provider:</Form.Label>
                  <Form.Control
                    type="text"
                    value={provider.healthInsuranceProvider}
                    onChange={(e) =>
                      handleChange(
                        index,
                        "healthInsuranceProvider",
                        e.target.value
                      )
                    }
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Insurance Policy Number:</Form.Label>
                  <Form.Control
                    type="text"
                    value={provider.insurancePolicyNumber}
                    onChange={(e) =>
                      handleChange(
                        index,
                        "insurancePolicyNumber",
                        e.target.value
                      )
                    }
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Group Number:</Form.Label>
                  <Form.Control
                    type="text"
                    value={provider.groupNumber}
                    onChange={(e) =>
                      handleChange(index, "groupNumber", e.target.value)
                    }
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Insurance Provider Phone Number:</Form.Label>
                  <Form.Control
                    type="text"
                    value={provider.insuranceProviderPhoneNumber}
                    onChange={(e) =>
                      handleChange(
                        index,
                        "insuranceProviderPhoneNumber",
                        e.target.value
                      )
                    }
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Insurance Provider Address - Street:</Form.Label>
                  <Form.Control
                    type="text"
                    value={provider.insuranceProviderAddress.street}
                    onChange={(e) =>
                      handleAddressChange(index, "street", e.target.value)
                    }
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Insurance Provider Address - City:</Form.Label>
                  <Form.Control
                    type="text"
                    value={provider.insuranceProviderAddress.city}
                    onChange={(e) =>
                      handleAddressChange(index, "city", e.target.value)
                    }
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    Insurance Provider Address - State/Province:
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={provider.insuranceProviderAddress.state}
                    onChange={(e) =>
                      handleAddressChange(index, "state", e.target.value)
                    }
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    Insurance Provider Address - ZIP/Postal Code:
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={provider.insuranceProviderAddress.zip}
                    onChange={(e) =>
                      handleAddressChange(index, "zip", e.target.value)
                    }
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Insurance Provider Address - Country:</Form.Label>
                  <Form.Control
                    type="text"
                    value={provider.insuranceProviderAddress.country}
                    onChange={(e) =>
                      handleAddressChange(index, "country", e.target.value)
                    }
                  />
                </Form.Group>
                {index > 0 && (
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveProvider(index)}
                  >
                    Remove Provider
                  </Button>
                )}
                <hr />
              </div>
            ))}
            <Button variant="primary" onClick={handleAddProvider}>
              Add Insurance Provider
            </Button>
          </>
        </Card.Body>
      </Card>
    </div>
  );
};

export default InsuranceInformationForm;
