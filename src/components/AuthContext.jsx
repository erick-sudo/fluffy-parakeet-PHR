import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false)

  const api = "http://localhost:8080"
  
  const [user, setUser] = useState(null)

  const login = () => {

  }

  const logout = () => {

  }

  const updateUser = (usr) => {
    setUser(usr)
  }
  
  const contextData = {
    user,
    setUser,
    login,
    logout,
    api,
    darkMode
  };

  return (
    <>
      <AuthContext.Provider value={contextData}>
        {children}
      </AuthContext.Provider>
    </>
  );
}

export { AuthContext, AuthProvider }