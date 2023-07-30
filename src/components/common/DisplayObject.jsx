import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { Card } from "react-bootstrap";

const DisplayObject = ({ obj = {}, title, action }) => {
  const { displayObject, camelCaseToTitleCase } = useContext(AuthContext);

  return (
    <Card className="mt-4">
      {title && <Card.Header>{<span className="">{camelCaseToTitleCase(title)}</span>}</Card.Header>}
      <Card.Body>{displayObject(obj)}</Card.Body>
      {action && <Card.Footer>{action}</Card.Footer>}
    </Card>
  );
};

export default DisplayObject;
