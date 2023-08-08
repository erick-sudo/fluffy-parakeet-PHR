import React from "react";
import med1 from "../assets/phr5.png";
import { TiTick } from "react-icons/ti";

import { Container, Row, Col, Button, Card } from 'react-bootstrap';

function Home() {
  return (
    <div className="absolute inset-0 scroll_y">
      <Container className="mx-auto">
        <Row className="grid grid-cols-1 md:grid-cols-2 bg-white items-center gap-4 p-4 justify-center">
          <Col className="flex flex-col p-4 rounded-lg">
            <div className="text-[2em] font-bold text-blue-800 p-4 text-center">
              Take control of your health
            </div>
            <div className="flex items-center gap-2 my-2">
              <div className="text-blue-800">
                <TiTick size={25} />
              </div>
              <div>
                Store, manage, and access your medical information securely in
                one place.
              </div>
            </div>
            <div className="flex items-center gap-2 my-2">
              <div className="text-blue-800">
                <TiTick size={25} />
              </div>
              <div>
                Track medications, allergies, vital signs, and immunization
                records effortlessly
              </div>
            </div>
            <div className="flex items-center gap-2 my-2">
              <div className="text-blue-800">
                <TiTick size={25} />
              </div>
              <div>
                Never miss an appointment again with customizable reminders
              </div>
            </div>
            <div>
              Join us today and revolutionize the way you manage your health
            </div>
            <Button className="font-bold text-white my-6 bg-blue-800 w-max mx-auto px-4 py-2 rounded-full text-xl">
              Sign up now for a healthier future
            </Button>
          </Col>
          <Col className="flex items-center justify-center">
            <div className="max-w-lg">
              <img className="rounded-full" alt="Nurses" src={med1} />
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="mt-5">
          <Col>
            <p>
              We empower you to take control of your health by
              providing a centralized platform to manage and track your health
              information. Here's what you can do with our system:
            </p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Profile Management</Card.Title>
                <Card.Text>
                  Create and update your personal profile with essential details
                  like name, date of birth, contact information, and more.
                </Card.Text>
                <Button variant="primary">Edit Profile</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Health Records</Card.Title>
                <Card.Text>
                  Keep track of your medical history, diagnoses, treatments,
                  medications, allergies, and lab test results.
                </Card.Text>
                <Button variant="primary">View Health Records</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Appointments</Card.Title>
                <Card.Text>
                  Schedule, manage, and view upcoming and past appointments with
                  healthcare providers.
                </Card.Text>
                <Button variant="primary">Manage Appointments</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Vaccination Records</Card.Title>
                <Card.Text>
                  Keep track of your vaccination history and receive reminders
                  for upcoming vaccinations.
                </Card.Text>
                <Button variant="primary">Vaccination Records</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Lifestyle and Habits</Card.Title>
                <Card.Text>
                  Log your lifestyle choices, such as smoking status, alcohol
                  consumption, recreational drug use, and physical activity.
                </Card.Text>
                <Button variant="primary">Record Lifestyle</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Health Goals</Card.Title>
                <Card.Text>
                  Set and track your health goals, such as weight management,
                  exercise targets, and dietary objectives.
                </Card.Text>
                <Button variant="primary">Set Health Goals</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* Add more rows and cards for additional capabilities */}
      </Container>
    </div>
  );
}

export default Home;
