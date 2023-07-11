import React from "react"
import logo from "./images/stethoscope.svg"
import { useNavigate } from "react-router-dom";

function Logo({size}) {

  const navigate = useNavigate();

    return (
      <div className="" onClick={() => navigate("/")}>
        <img className="" src={logo} style={{
          minWidth: `${size}px`,
          maxWidth: `${size}px`
        }} alt="Horus" />
      </div>
    )
}

export default Logo;