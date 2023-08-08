import React, { useState, useRef, useEffect, useContext } from "react";
import { Badge, ListGroup, ListGroupItem } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faBell,
  faCalendarAlt,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

import PhrLogo from "./common/PhrLogo";

function NavigationBar({ pathname, showNav, updateNav }) {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate()

  return (
    <div className="py-2 flex items-start">
      <div className="px-4"><PhrLogo /></div>
      <ListGroup horizontal className="list-group w-max mx-auto">
        <ListGroupItem onClick={() => navigate("/")} action className="px-4 py-2">
          <span className="text-2xl text-blue-800">
            <FontAwesomeIcon icon={faHome} />
          </span>
          <span>
            <Badge bg="danger" className="absolute right-1 top-1">
              45
            </Badge>
          </span>
        </ListGroupItem>
        <ListGroupItem onClick={() => navigate("/alerts/messages")} action className="px-4 py-2">
          <span className="text-2xl text-blue-800">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <span>
            <Badge bg="danger" className="absolute right-1 top-1">
              45
            </Badge>
          </span>
        </ListGroupItem>
        <ListGroupItem onClick={() => navigate("/alerts/notifications")} action className="px-4 py-2">
          <span className="text-2xl text-blue-800">
            <FontAwesomeIcon icon={faBell} bounce />
          </span>
          <span>
            <Badge bg="danger" className="absolute right-1 top-1">
              45
            </Badge>
          </span>
        </ListGroupItem>
        <ListGroupItem onClick={() => navigate("/calendar")} action className="px-4 py-2">
          <span className="text-2xl text-blue-800">
            <FontAwesomeIcon icon={faCalendarAlt} />
          </span>
          <span>
            <Badge bg="danger" className="absolute right-1 top-1">
              45
            </Badge>
          </span>
        </ListGroupItem>
      </ListGroup>
      <ListGroup horizontal className="pr-4">
        <ListGroupItem action onClick={() => navigate("/profile")}><FontAwesomeIcon icon={faUser} /></ListGroupItem>
      </ListGroup>
    </div>
  );
}

export { NavigationBar };
