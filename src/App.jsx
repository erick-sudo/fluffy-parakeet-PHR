import React, { useState } from "react";
import { Routes, Route, useLocation, NavLink } from "react-router-dom";

import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Register from "./components/Register";
import { NavigationBar } from "./components/NavigationBar";
import PhrCalendar from "./components/common/PhrCalendar";

function App() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="App flex flex-col bg-gray-100 fixed inset-0">
      <div className="absolute inset-0 flex flex-col">
        <NavigationBar />
        <div className="relative flex flex-col flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile/*" element={<Profile />} />
            <Route path="/calendar" element={<PhrCalendar />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
