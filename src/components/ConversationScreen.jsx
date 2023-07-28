import React, { useState } from "react";
import {
  Container,
  Row,
  Card,
  Col,
  Form,
  Button,
  ListGroup,
  Badge,
} from "react-bootstrap";

const Conversations = ({ conversations = [], receiver_id }) => {
  return (
    <div className="grid gap-2 p-2">
      {conversations.map((msg, index) => (
        <Card.Body
          className={`flex ${msg.sender_id !== receiver_id && "justify-end"}`}
          key={index}
        >
          <div
            className={`pt-2 px-2 pb-1 ${
              msg.sender_id === receiver_id
                ? "text-blue-800 bg-gray-200 rounded-t-xl rounded-l-xl"
                : "bg-blue-500 text-white rounded-b-xl rounded-r-xl"
            }`}
            style={{
              marginRight: msg.sender_id === receiver_id ? "25%" : "0em",
              marginLeft: msg.sender_id !== receiver_id ? "25%" : "0em",
            }}
          >
            <div>{msg.text}</div>
            <div
              className={`flex ${
                msg.sender_id !== receiver_id && "justify-end"
              }`}
            >
              <Badge
                style={{ borderRadius: "40px", fontSize: "10px" }}
                bg=""
                className="bg-gray-400"
              >
                {msg.timestamp}
              </Badge>
            </div>
          </div>
        </Card.Body>
      ))}
    </div>
  );
};

const ConversationScreen = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello there! I hope you're having a wonderful day. It's such a pleasure to chat with you. By the way.",
      sender_id: 2,
      receiver_id: 3,
      timestamp: "2023-07-27T12:34:56Z",
    },
    {
      id: 2,
      text: "How are you? I wanted to check in and see how things are going.",
      sender_id: 3,
      receiver_id: 2,
      timestamp: "2023-07-27T13:45:22Z",
    },
    {
      id: 3,
      text: "I'm doing great! Work has been exciting, and I've been exploring some new hobbies in my free time",
      sender_id: 2,
      receiver_id: 3,
      timestamp: "2023-07-27T15:10:05Z",
    },
    {
      id: 4,
      text: "What about you? How has your week been so far?",
      sender_id: 2,
      receiver_id: 3,
      timestamp: "2023-07-27T15:10:31Z",
    },
    {
      id: 5,
      text: "I'm doing well too! Thanks for asking. The book was amazing, and I couldn't put it down.",
      sender_id: 3,
      receiver_id: 2,
      timestamp: "2023-07-27T16:20:12Z",
    },
    {
      id: 6,
      text: "That's great! I'm glad you enjoyed the book. Our call sounds like a good idea, and I'm looking forward to it.",
      sender_id: 2,
      receiver_id: 3,
      timestamp: "2023-07-27T17:05:42Z",
    },
    {
      id: 7,
      text: "Hey there! I just heard some exciting news. Our team received a prestigious award for our recent project!",
      sender_id: 3,
      receiver_id: 2,
      timestamp: "2023-07-28T09:15:30Z",
    },
    {
      id: 8,
      text: "Wow! That's incredible! I'm so proud of our team's hard work and dedication.",
      sender_id: 2,
      receiver_id: 3,
      timestamp: "2023-07-28T11:05:18Z",
    },
    {
      id: 9,
      text: "Sounds like a plan! I can't wait to raise a toast to our team's success",
      sender_id: 3,
      receiver_id: 2,
      timestamp: "2023-07-28T14:30:50Z",
    },
    {
      id: 10,
      text: "Absolutely! Please do share the article with me.",
      sender_id: 2,
      receiver_id: 3,
      timestamp: "2023-07-28T15:40:12Z",
    },
    {
      id: 11,
      text: "You're welcome! I've sent the article to your email.",
      sender_id: 3,
      receiver_id: 2,
      timestamp: "2023-07-28T16:55:30Z",
    }
  ]);

  const handleSendMessage = () => {
    if (message.trim() === "") return;

    const newMessage = {
      id: messages.length + 1,
      text: message.trim(),
      sender_id: "You", // You can change this based on your use case
      timestamp: new Date().toLocaleString(),
    };

    setMessages([...messages, newMessage]);
    setMessage("");
  };

  return (
    <Container className="flex flex-col flex-grow rounded-lg">
      <div className="flex-grow relative my-2 rounded-lg">
        <div className="absolute inset-0 scroll_y">
          <Conversations conversations={messages} receiver_id={2} />
        </div>
      </div>
      <div className="mb-2 rounded-lg overflow-hidden border-1 border-blue-500 flex">
          <Form.Control
            style={{ borderRadius: "0", border: 'none' }}
            type="textarea"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            style={{ borderRadius: "0" }}
            variant="primary"
            onClick={handleSendMessage}
          >
            Send
          </Button>
      </div>
    </Container>
  );
};

export default ConversationScreen;
