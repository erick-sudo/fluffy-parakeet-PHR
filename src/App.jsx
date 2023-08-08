import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Access from "./components/Register";
import { NavigationBar } from "./components/NavigationBar";
import PhrCalendar from "./components/common/PhrCalendar";
import MessagesNotifications from "./components/MessagesNotifications";

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
            <Route path="/login" element={<Access t="login" />} />
            <Route path="/register" element={<Access t="register" />} />
            <Route path="/profile/*" element={<Profile />} />
            <Route path="/calendar" element={<PhrCalendar />} />
            <Route path="/alerts" element={<MessagesNotifications />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
