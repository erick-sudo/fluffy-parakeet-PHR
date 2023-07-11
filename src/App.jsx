import React, { useState } from "react";
import { Routes, Route, useLocation, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiAccountPinCircleFill } from "react-icons/ri";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faBell } from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import { Sidebar } from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const { pathname } = location;

  const [showNav, setShowNav] = useState(false);

  function updateNav(flag) {
    setShowNav(flag);
  }

  return (
    <div className="App flex flex-col fixed inset-0 bg-slate-100">
      <div className="">
        <div className="flex items-center gap-2 py-2">
          <div className="flex items-center justify-center h-12 w-12">
            {!Boolean(showNav) && (
              <div
                onClick={() => updateNav(true)}
                className="text-blue-800 text-xl rounded border p-1 border-blue-800 hover:border-bue-800 hover:text-blue-800 hover:scale-125"
              >
                <GiHamburgerMenu />
              </div>
            )}
          </div>

          {/* Notifications, Messages, etc */}
          <div className="flex-grow flex items-center justify-center gap-4">
            <div>
              <span className="text-blue-800 text-2xl"><FontAwesomeIcon icon={faMessage} /></span>
            </div>
            <div>
              <span className="text-blue-800 text-2xl"><FontAwesomeIcon icon={faBell} /></span>
            </div>
          </div>

          {/* Account */}
          <div className="flex justify-end px-4 mt-2 font-bold">
            <div className="group text-sm flex flex-col cursor-pointer">
              <h2 className="py-2 px-6 hover:bg-blue-800 hover:text-white flex items-center gap-2 ">
                <RiAccountPinCircleFill />
                Account
              </h2>
              <div className="relative">
                <div className="absolute hidden border border-blue-800 bg-white group-hover:block w-[200px] right-4 shadow shadow-blue-800 z-40">
                  <NavLink
                    to="/signup"
                    className="py-2 px-2 hover:bg-blue-800 border-b border-b-blue-800 hover:text-white block"
                  >
                    Signup
                  </NavLink>
                  <NavLink
                    to="/login"
                    className="py-2 px-2 hover:bg-blue-800 border-b border-b-blue-800 hover:text-white block"
                  >
                    Login
                  </NavLink>
                  <NavLink className="py-2 px-2 hover:bg-blue-800 border-b border-b-blue-800 hover:text-white block">
                    Logout
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow relative">
        <div className="absolute inset-0 flex">
          <Sidebar
            pathname={pathname}
            showNav={showNav}
            updateNav={updateNav}
          />
          <div className="routing flex flex-col flex-grow overflow-y-scroll scroll_y">
            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Register />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
