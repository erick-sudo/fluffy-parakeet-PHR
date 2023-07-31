import React, { useContext, useState } from "react";
import { InputGroup, Form, Tab } from "react-bootstrap";
import { AuthContext } from "../AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

function EditableRow({
  columns = [],
  obj,
  last = false,
  parentKey,
  updateFields,
  removeRow,
  index,
}) {
  const { TableArray, displayObject } = useContext(AuthContext);

  return (
    <div
      className="flex relative"
      style={{ borderBottom: `${last ? "none" : "solid 1px blue"}` }}
    >
      <div
        onClick={() => removeRow(index)}
        className="absolute top-50 bottom-50 left-[100%] hover:text-red-800 hover:scale-125"
      >
        <FontAwesomeIcon icon={faDeleteLeft} />
      </div>
      {columns.map((column, i) => {
        return (
          <div key={i} style={{ width: `${100 / columns.length}%` }}>
            {obj[column] instanceof Array ? (
              <div>
                <TableArray
                  jsonArray={obj[column]}
                  parentKey={`${parentKey}-${column}`}
                  updateFields={updateFields}
                />
              </div>
            ) : typeof obj[column] === "object" ? (
              <div
                style={{
                  borderLeft: `${i !== 0 ? "1px solid blue" : "none"}`,
                  padding: "5px",
                }}
              >
                {displayObject(
                  obj[column],
                  `${parentKey}-${column}`,
                  updateFields
                ).map((div, i) => (
                  <div key={i}>{div}</div>
                ))}
              </div>
            ) : (
              <div className="flex items-center"
                style={{ borderLeft: `${i !== 0 ? "1px solid blue" : "none"}`, height: "100%" }}
              >
                <ControlledCell
                  style={{
                    borderRadius: "0",
                    border: "none",
                  }}
                  holder={column}
                  updateFields={updateFields}
                  parentKey={`${parentKey}-${column}`}
                  value={obj[column]}
                  key={i}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function ControlledCell({
  style,
  holder = "",
  value = "",
  parentKey,
  updateFields,
}) {
  const handleChange = (e) => {
    updateFields(parentKey, e.target.value);
  };

  const { camelCaseToTitleCase } = useContext(AuthContext);

  return (
    <Form.Control
      style={style}
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={camelCaseToTitleCase(holder)}
    />
  );
}

export { EditableRow, ControlledCell };
