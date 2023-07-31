import React, { useState, useContext } from "react";
import { Card } from "react-bootstrap";
import { AuthContext } from "../AuthContext";

function MultiEditableJson({ title, root = "root", jsonData={}, footer }) {
  const [data, setData] = useState(jsonData);

  const { displayObject, keyBreakDown } = useContext(AuthContext);

  function updateFields(k, value, add) {
    const newObject = data instanceof Array ? [...data] : { ...data };
    keyBreakDown(newObject, k.split("-"), value, add);
    setData(newObject);
  }

  return (
    <div className="">
      <Card>
        {title && (
          <Card.Header>
            <span className="text-blue-800 font-bold text-2xl">{title}</span>
          </Card.Header>
        )}
        <Card.Body className="">
          {displayObject(data, root, updateFields)}
        </Card.Body>
        {footer && <Card.Footer>
          {footer}</Card.Footer>}
      </Card>
    </div>
  );
}

export default MultiEditableJson;
