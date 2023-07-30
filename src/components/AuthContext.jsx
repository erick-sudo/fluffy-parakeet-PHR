import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PairView from "./common/PairView";

import Swal from "sweetalert2";

import { Card } from "react-bootstrap";
import { EditableRow, ControlledCell } from "./common/EditableRow";
import ColumnNames from "./common/ColumnNames";
import SubmitButton from "./common/SubmitButton";

const AuthContext = createContext();

function TableArray({ title = "", jsonArray = [], parentKey, updateFields }) {
  const columns = jsonArray.length > 0 ? Object.keys(jsonArray[0]) : [];

  const addRow = () => {
    const newRow = {};
    columns.forEach((column) => {
      newRow[column] = "";
    });
    updateFields(parentKey, newRow, true);
  };

  return (
    <Card className="my-2">
      <Card.Header>
        <span className="font-bold text-xl text-blue-800">
          {camelCaseToTitleCase(title)}
        </span>
      </Card.Header>
      <Card.Body>
        <ColumnNames columns={columns} />
        <div>
          {jsonArray.length > 0 &&
            jsonArray.map((element, idx) => (
              <EditableRow
                updateFields={updateFields}
                parentKey={`${parentKey}[${idx}]`}
                key={idx}
                last={idx === jsonArray.length - 1}
                columns={columns}
                obj={element}
              />
            ))}
        </div>
      </Card.Body>
      <Card.Footer>
        <SubmitButton
          callback={addRow}
          val={`Add ${camelCaseToTitleCase(title)}`}
        />
      </Card.Footer>
    </Card>
  );
}

function keyBreakDown(newObject, keys, value, add) {
  
  let newRef = newObject
  
  for (let i=0;i<keys.length;i++) {
    const k = keys[i];
    if(i !== keys.length - 1) {
      if (k.endsWith("]")) {
        const arrayName = k.slice(0, k.indexOf("["));
        const index = parseInt(k.slice(k.indexOf("[") + 1, k.indexOf("]")));
        const newKeys = keys.slice(1)
        newRef = newRef[arrayName][index]
      } else {
        newRef = newRef[k]
      }
    } else {
      if(add) {
        newRef[k].push(value)
      } else {
        newRef[k] =  value
      }
    }
  }
}

function displayObject(obj, parentKey, updateFields) {
  return obj instanceof Array ? (
    <TableArray jsonArray={obj} />
  ) : (
    Object.keys(obj).map((ob, index) => {
      if (obj[ob] instanceof Array) {
        return (
          <TableArray
            parentKey={`${parentKey}-${ob}`}
            title={ob}
            jsonArray={obj[ob]}
            updateFields={updateFields}
          />
        );
      } else if (typeof obj[ob] === "object") {
        return (
          <div key={index} className="mb-1">
            {displayObject(obj[ob], `${parentKey}-${ob}`, updateFields).map(
              (c, idx) => (
                <div key={idx}>{c}</div>
              )
            )}
          </div>
        );
      } else {
        return (
          <PairView
            newStyles={{ borderRadius: "0" }}
            h
            key={index}
            k={
              <span className="text-blue-700 font-bold text-sm">
                {camelCaseToTitleCase(ob)}
              </span>
            }
            v={
              <ControlledCell
                updateFields={updateFields}
                parentKey={`${parentKey}-${ob}`}
                style={{
                  border: "none",
                  outline: "none",
                  borderRadius: "0",
                }}
                value={obj[ob]}
              />
            }
          />
        );
      }
    }).map((div, index) => <div key={index}>{div}</div>)
  );
}

function camelCaseToTitleCase(inputString) {
  return inputString
    .split(/(?=[A-Z])/)
    .map((c) => capitalize(c))
    .join(" ");
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1, str.length);
}

function AuthProvider({ children }) {
  const navigate = useNavigate();

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const fireErrorAlert = ({
    message = "An error occured",
    bg = "white",
    color = "black",
  }) => {
    Toast.fire({
      icon: "error",
      title: "Oops...",
      text: message,
      background: bg,
      color: color,
    });
  };

  const [darkMode, setDarkMode] = useState(false);

  const api = "http://localhost:8080";

  const [user, setUser] = useState(null);

  const login = () => {};

  const logout = () => {};

  const updateUser = (usr) => {
    setUser(usr);
  };

  const submitHandler = ({
    event,
    endPoint,
    httpMethod,
    payload,
    successCallback,
    failureCallback,
  }) => {
    event?.preventDefault();
    const requestConfig = {
      method: httpMethod,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    if (payload) {
      requestConfig["body"] = JSON.stringify(payload);
    }
    fetch(`${api}/${endPoint}`, requestConfig)
      .then((response) => {
        if (response.status < 400) {
          // Resolve successful response
          response.json().then((res) => {
            if (successCallback) {
              successCallback(res);
            }
          });
        } else {
          if (failureCallback) {
            failureCallback(response.status);
          }
          fireErrorAlert({
            message: `${response.status} ${response.error}`,
            bg: "red",
            color: "white",
          });
        }
      })
      .catch((err) => {
        // Handle Error
        if (failureCallback) {
          failureCallback(err.message);
        }
        fireErrorAlert({ messag: err.message, bg: "maroon", color: "white" });
      });
  };

  const contextData = {
    user,
    setUser,
    login,
    logout,
    api,
    darkMode,
    displayObject,
    submitHandler,
    capitalize,
    camelCaseToTitleCase,
    keyBreakDown,
  };

  return (
    <>
      <AuthContext.Provider value={contextData}>
        {children}
      </AuthContext.Provider>
    </>
  );
}

export { AuthContext, AuthProvider };
