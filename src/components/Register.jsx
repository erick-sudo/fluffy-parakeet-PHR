import React, { useContext, useEffect, useState } from "react";
import PersonalInformationForm from "./registration/PersonalInformationForm";
import PrivacyAndConsentForm from "./registration/PrivacyAndConsentForm";
import med1 from "../assets/phr9.png"

const Register = () => {
  return (
    <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 ">
      <div className="-lg:hidden flex items-center justify-center">
        <img className="w-[85%]" alt="Nurses" src={med1} />
      </div>
      <div className="overflow-y-scroll scroll_y mx-auto max-w-[700px]">
        <PersonalInformationForm />
        <PrivacyAndConsentForm />
      </div>
    </div>
  );
};

export default Register;
