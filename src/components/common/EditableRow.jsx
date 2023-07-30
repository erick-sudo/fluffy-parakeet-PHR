import React, { useState } from "react";
import { InputGroup, Form } from "react-bootstrap";

function EditableRow({ columns = [], obj, last = false, parentKey, updateFields }) {
  return (
    <InputGroup style={{ borderBottom: `${last ? "none" : "solid 1px blue"}` }}>
      {columns.map((column, i) => {
        return (
          <ControlledCell
            style={{
              borderRadius: "0",
              borderRight: "none",
              borderTop: "none",
              borderBottom: `none`,
              borderLeft: `${i !== 0 ? "1px solid blue" : "none"}`,
            }}
            updateFields={updateFields}
            parentKey={`${parentKey}-${column}`}
            value={obj[column]}
            key={i}
          />
        );
      })}
    </InputGroup>
  );
}

function ControlledCell({ style, value = "", parentKey, updateFields }) {

  const handleChange = (e) => {
    updateFields(parentKey, e.target.value)
  }

  return (
    <Form.Control
      style={style}
      type="text"
      value={value}
      onChange={handleChange}
    />
  );
}

export { EditableRow, ControlledCell };
