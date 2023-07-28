import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EventModal = ({ startEventDate, show, onHide, onSave }) => {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState(startEventDate);
  const [end, setEnd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventData = {
      title,
      start: new Date(start),
      end: new Date(end),
    };
    onSave(eventData);
    onHide();
  };

  return (
    <Modal centered show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add Event Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formStart">
            <Form.Label>Start</Form.Label>
            <Form.Control
              type="date"
              value={start}
              onChange={(e) => setStart(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formEnd">
            <Form.Label>End</Form.Label>
            <Form.Control
              type="date"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
            />
          </Form.Group>
          <hr />
          <Button variant="secondary" onClick={onHide}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Save
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EventModal;
