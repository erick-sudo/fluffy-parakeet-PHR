import React from "react";
import { Form, Card } from "react-bootstrap";
import SubmitButton from "../common/SubmitButton";

const LifestyleHabitsForm = () => {
  return (
    <div className="m-4">
      <Card>
        <Card.Header>
          <span className="text-blue-800 font-bold text-2xl">
            Lifestyle and Habits
          </span>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group controlId="smokingStatus">
              <Form.Label>1. Smoking Status:</Form.Label>
              <div>
                <Form.Check
                  type="checkbox"
                  label="Current Smoker"
                  name="smoking_status"
                />
                <Form.Check
                  type="checkbox"
                  label="Former Smoker"
                  name="smoking_status"
                />
                <div>
                  <Form.Label>Date Quit:</Form.Label>
                  <Form.Control type="date" name="date_quit" />
                </div>
                <div>
                  <Form.Label>Average Cigarettes per Day:</Form.Label>
                  <Form.Control
                    type="number"
                    name="average_cigarettes_per_day"
                  />
                </div>
              </div>
            </Form.Group>

            <Form.Group controlId="alcoholConsumption">
              <Form.Label>2. Alcohol Consumption:</Form.Label>
              <div>
                <Form.Check
                  type="checkbox"
                  label="Yes"
                  name="alcohol_consumption"
                />
                <Form.Check
                  type="checkbox"
                  label="No"
                  name="alcohol_consumption"
                />
                <div>
                  <Form.Label>Frequency:</Form.Label>
                  <Form.Control type="text" name="alcohol_frequency" />
                </div>
                <div>
                  <Form.Label>Type of Alcohol:</Form.Label>
                  <Form.Control type="text" name="type_of_alcohol" />
                </div>
                <div>
                  <Form.Label>Average Quantity:</Form.Label>
                  <Form.Control type="number" name="average_quantity" />
                </div>
              </div>
            </Form.Group>

            <Form.Group controlId="recreationalDrugUse">
              <Form.Label>3. Recreational Drug Use:</Form.Label>
              <div>
                <Form.Check
                  type="checkbox"
                  label="Yes"
                  name="recreational_drug_use"
                />
                <Form.Check
                  type="checkbox"
                  label="No"
                  name="recreational_drug_use"
                />
                <div>
                  <Form.Label>Type(s) of Drugs Used:</Form.Label>
                  <Form.Control type="text" name="type_of_drugs_used" />
                </div>
                <div>
                  <Form.Label>Frequency:</Form.Label>
                  <Form.Control type="text" name="drug_use_frequency" />
                </div>
              </div>
            </Form.Group>

            <Form.Group controlId="physicalActivity">
              <Form.Label>4. Physical Activity:</Form.Label>
              <div>
                <div>
                  <Form.Label>Type of Exercise:</Form.Label>
                  <Form.Control type="text" name="type_of_exercise" />
                </div>
                <div>
                  <Form.Label>Frequency:</Form.Label>
                  <Form.Control type="text" name="exercise_frequency" />
                </div>
                <div>
                  <Form.Label>Duration:</Form.Label>
                  <Form.Control type="text" name="exercise_duration" />
                </div>
                {/* Additional rows can be added here if needed */}
              </div>
            </Form.Group>
          </Form>
        </Card.Body>
        <Card.Footer>
          <SubmitButton val="Update Chnages" />
        </Card.Footer>
      </Card>
    </div>
  );
};

export default LifestyleHabitsForm;
