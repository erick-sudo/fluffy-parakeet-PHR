import React from "react";
import logo from "../images/phr_logo.svg"

function PhrLogo({ text }) {

    return (
        <div className="flex items-center gap-2 mx-auto w-max">
            <img src={logo} alt="PHR" /> <span>{text}</span>
        </div>
    )
}

export default PhrLogo;