import React, { useContext } from "react";
import { InputGroup, Form, ListGroup, ListGroupItem } from "react-bootstrap";
import { AuthContext } from "../AuthContext";

function ColumnNames({ columns = [] }) {

    const { camelCaseToTitleCase } = useContext(AuthContext)

  return (
    <ListGroup horizontal style={{ width: "100%" }}>
      {columns.map((column, i) => {
        return (
          <ListGroupItem
            style={{
              width: `${100 / columns?.length}%`,
              borderRadius: "0",
              border: 'none',
              borderBottom: "1px solid blue",
              borderRight: `${i < columns.length - 1 ? "solid 1px blue" : "none"}`,
              borderLeft: `${"none"}`,
            }}
            className="font-bold"
            key={i}
          >
            {camelCaseToTitleCase(column)}
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
}

export default ColumnNames;
