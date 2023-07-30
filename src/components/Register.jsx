import React, { useContext, useEffect, useState } from "react";
import med1 from "../assets/phr7.png";
import RegistrationForm from "./registration/RegistrationForm";
import LoginForm from "./registration/LoginForm";

const Access = ( { t } ) => {

  return (
    <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
      <div className="-lg:hidden flex items-center justify-center">
        <img className="w-[85%]" alt="Nurses" src={med1} />
      </div>
      <div className="overflow-y-scroll scroll_y flex flex-col justify-center flex-grow p-4">
        {t === "register" && <RegistrationForm /> }
        {t=== "login" && <LoginForm />}
      </div>
    </div>
  );
};

export default Access;
