import React, { useState } from "react";

import { Container, Row, Form, Button, Col, Card } from "react-bootstrap";

const MedicalHistoryForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    primaryCarePhysician: "",
    lastMedicalCheckupDate: "",
    chronicMedicalConditions: "",
    allergies: "",
    medications: [{}],
    surgeries: [{}],
    immunizations: [{}],
    familyMedicalHistory: [{}],
  });

  // Helper functions to handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNestedChange = (arrayName, index, field, value) => {
    const arrayCopy = [...formData[arrayName]];
    arrayCopy[index][field] = value;
    setFormData({ ...formData, [arrayName]: arrayCopy });
  };

  // Helper functions to add new rows
  const addRow = (arrayName) => {
    setFormData({ ...formData, [arrayName]: [...formData[arrayName], {}] });
  };

  // Helper functions to remove rows
  const removeRow = (arrayName, index) => {
    const newArray = [...formData[arrayName]];
    newArray.splice(index, 1);
    setFormData({ ...formData, [arrayName]: newArray });
  };

  const handleSurgeriesChange = (index, field, value) => {
    const surgeriesCopy = [...formData.surgeries];
    surgeriesCopy[index][field] = value;
    setFormData({ ...formData, surgeries: surgeriesCopy });
  };

  const handleImmunizationsChange = (index, field, value) => {
    const immunizationsCopy = [...formData.immunizations];
    immunizationsCopy[index][field] = value;
    setFormData({ ...formData, immunizations: immunizationsCopy });
  };

  const handleFamilyMedicalHistoryChange = (index, field, value) => {
    const familyMedicalHistoryCopy = [...formData.familyMedicalHistory];
    familyMedicalHistoryCopy[index][field] = value;
    setFormData({
      ...formData,
      familyMedicalHistory: familyMedicalHistoryCopy,
    });
  };

  return (
    <div className="mx-4">
    <Card>
      <Card.Header>
        <span className="">Medical History</span>
      </Card.Header>
      <Card.Body>
        <Container>
          <Form>
            <Form.Group controlId="primaryCarePhysician">
              <Form.Label>Primary Care Physician:</Form.Label>
              <Form.Control
                type="text"
                name="primaryCarePhysician"
                value={formData.primaryCarePhysician}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="lastMedicalCheckupDate">
              <Form.Label>Last Medical Checkup Date:</Form.Label>
              <Form.Control
                type="date"
                name="lastMedicalCheckupDate"
                value={formData.lastMedicalCheckupDate}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="chronicMedicalConditions">
              <Form.Label>Chronic Medical Conditions (if any):</Form.Label>
              <Form.Control
                as="textarea"
                name="chronicMedicalConditions"
                rows={3}
                value={formData.chronicMedicalConditions}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="allergies">
              <Form.Label>Allergies:</Form.Label>
              <Form.Control
                as="textarea"
                name="allergies"
                rows={3}
                value={formData.allergies}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="medications">
              <Form.Label>Medications:</Form.Label>
              {formData.medications.map((medication, index) => (
                <Row key={index}>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Name of Medication"
                      value={medication.name || ""}
                      onChange={(e) =>
                        handleNestedChange(
                          "medications",
                          index,
                          "name",
                          e.target.value
                        )
                      }
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Dosage"
                      value={medication.dosage || ""}
                      onChange={(e) =>
                        handleNestedChange(
                          "medications",
                          index,
                          "dosage",
                          e.target.value
                        )
                      }
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Frequency"
                      value={medication.frequency || ""}
                      onChange={(e) =>
                        handleNestedChange(
                          "medications",
                          index,
                          "frequency",
                          e.target.value
                        )
                      }
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Reason for Use"
                      value={medication.reason || ""}
                      onChange={(e) =>
                        handleNestedChange(
                          "medications",
                          index,
                          "reason",
                          e.target.value
                        )
                      }
                    />
                  </Col>
                  <Col xs="auto">
                    {index > 0 && (
                      <Button
                        variant="danger"
                        onClick={() => removeRow("medications", index)}
                      >
                        Remove
                      </Button>
                    )}
                  </Col>
                </Row>
              ))}
              <Button variant="primary" onClick={() => addRow("medications")}>
                Add Medication
              </Button>
            </Form.Group>

            <Form.Group controlId="surgeries">
              <Form.Label>Previous Surgeries (if any):</Form.Label>
              {formData.surgeries.map((surgery, index) => (
                <Row key={index}>
                  <Col>
                    <Form.Control
                      type="date"
                      placeholder="Date of Surgery"
                      value={surgery.date || ""}
                      onChange={(e) =>
                        handleSurgeriesChange(index, "date", e.target.value)
                      }
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Type of Surgery"
                      value={surgery.type || ""}
                      onChange={(e) =>
                        handleSurgeriesChange(index, "type", e.target.value)
                      }
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Surgeon's Name"
                      value={surgery.surgeon || ""}
                      onChange={(e) =>
                        handleSurgeriesChange(index, "surgeon", e.target.value)
                      }
                    />
                  </Col>
                  <Col xs="auto">
                    {index > 0 && (
                      <Button
                        variant="danger"
                        onClick={() => removeRow("surgeries", index)}
                      >
                        Remove
                      </Button>
                    )}
                  </Col>
                </Row>
              ))}
              <Button variant="primary" onClick={() => addRow("surgeries")}>
                Add Surgery
              </Button>
            </Form.Group>

            <Form.Group controlId="immunizations">
              <Form.Label>Immunization History:</Form.Label>
              {formData.immunizations.map((immunization, index) => (
                <Row key={index}>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Vaccine Name"
                      value={immunization.vaccine || ""}
                      onChange={(e) =>
                        handleImmunizationsChange(
                          index,
                          "vaccine",
                          e.target.value
                        )
                      }
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      type="date"
                      placeholder="Date Administered"
                      value={immunization.date || ""}
                      onChange={(e) =>
                        handleImmunizationsChange(index, "date", e.target.value)
                      }
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Administered by"
                      value={immunization.administeredBy || ""}
                      onChange={(e) =>
                        handleImmunizationsChange(
                          index,
                          "administeredBy",
                          e.target.value
                        )
                      }
                    />
                  </Col>
                  <Col xs="auto">
                    {index > 0 && (
                      <Button
                        variant="danger"
                        onClick={() => removeRow("immunizations", index)}
                      >
                        Remove
                      </Button>
                    )}
                  </Col>
                </Row>
              ))}
              <Button variant="primary" onClick={() => addRow("immunizations")}>
                Add Immunization
              </Button>
            </Form.Group>

            <Form.Group controlId="familyMedicalHistory">
              <Form.Label>Family Medical History:</Form.Label>
              {formData.familyMedicalHistory.map((familyMedHistory, index) => (
                <Row key={index}>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Medical Condition"
                      value={familyMedHistory.condition || ""}
                      onChange={(e) =>
                        handleFamilyMedicalHistoryChange(
                          index,
                          "condition",
                          e.target.value
                        )
                      }
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Affected Family Member"
                      value={familyMedHistory.affectedMember || ""}
                      onChange={(e) =>
                        handleFamilyMedicalHistoryChange(
                          index,
                          "affectedMember",
                          e.target.value
                        )
                      }
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Relationship"
                      value={familyMedHistory.relationship || ""}
                      onChange={(e) =>
                        handleFamilyMedicalHistoryChange(
                          index,
                          "relationship",
                          e.target.value
                        )
                      }
                    />
                  </Col>
                  <Col xs="auto">
                    {index > 0 && (
                      <Button
                        variant="danger"
                        onClick={() => removeRow("familyMedicalHistory", index)}
                      >
                        Remove
                      </Button>
                    )}
                  </Col>
                </Row>
              ))}
              <Button
                variant="primary"
                onClick={() => addRow("familyMedicalHistory")}
              >
                Add Family Medical History
              </Button>
            </Form.Group>

            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </Card.Body>
    </Card>
    </div>
  );
};

export default MedicalHistoryForm;
