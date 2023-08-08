import React, {  } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import ConversationScreen from "./ConversationScreen";
import { useLocation, useNavigate } from "react-router-dom";

function MessagesNotifications() {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const nav_tabs = [
    { pathname: "", title: "Messages" },
    { pathname: "notifications", title: "Notifications" },
    { pathname: "appointments", title: "Appointments" },
  ];

  const last_path_component = pathname.split("/").reverse()[0];

  return (
    <div className="absolute inset-0 scroll_y p-2">
      <Row>
        {/* Left Column */}
        <Col className="" lg={3} md={3} xs={12}>
          <div className="w-full sticky top-0">
            <ListGroup>
              {nav_tabs.map((nav_tab, index) => (
                <ListGroupItem
                  key={index}
                  onClick={() => navigate(nav_tab.pathname)}
                  className={`${
                    last_path_component === nav_tab.pathname && "text-primary"
                  } hover:bg-blue-700 hover:text-white`}
                >
                  <span className="block py-2 font-bold">{nav_tab.title}</span>
                </ListGroupItem>
              ))}
            </ListGroup>
          </div>
        </Col>
        {/* Center Column */}
        <Col lg={6} md={8} xs={12}>
          <div className="">
            <ConversationScreen />
          </div>
        </Col>
        {/* Right Column */}
        {/* d-lg-none d-md-none */}
        <Col lg={2} md={0} xs={0} className="">
          {/* Set lg={0}, md={0}, xs={0} to hide the column on lg and md screens */}
        </Col>
      </Row>
    </div>
  );
}

export default MessagesNotifications;
