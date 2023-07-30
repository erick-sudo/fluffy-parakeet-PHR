import React, { useState, useContext } from "react";
import { Card } from "react-bootstrap";
import { AuthContext } from "../AuthContext";

function MultiEditableJson({ title, root = "root", jsonData={} }) {
  const [data, setData] = useState(jsonData);

  const { displayObject, keyBreakDown } = useContext(AuthContext);

  function updateFields(k, value, add) {
    const newObject = { ...data };
    keyBreakDown(newObject, k.split("-").slice(1), value, add ? true : false);
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
        <Card.Body>
          {displayObject(data, root, updateFields)}
        </Card.Body>
      </Card>
    </div>
  );
}

export default MultiEditableJson;
