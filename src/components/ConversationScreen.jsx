import React, { useState } from "react";
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";

const ConversationScreen = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (message.trim() === "") return;

    const newMessage = {
      id: messages.length + 1,
      text: message.trim(),
      sender: "You", // You can change this based on your use case
      timestamp: new Date().toLocaleString(),
    };

    setMessages([...messages, newMessage]);
    setMessage("");
  };

  return (
    <Container>
      <Row>
        <Col md={8}>
          <ListGroup>
            {messages.map((msg) => (
              <ListGroup.Item key={msg.id}>
                <strong>{msg.sender}:</strong> {msg.text}
                <span className="float-right">{msg.timestamp}</span>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Form className="mt-4">
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleSendMessage}>
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ConversationScreen;
