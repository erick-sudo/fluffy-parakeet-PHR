import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

import { nav_bar_items } from "../data/data.jsx"

const AuthContext = createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [change, setOnChange] = useState(false);
  const [error, setError] = useState('');
  let storedUser = localStorage.getItem("user");
  let parsedUser = null;
  
try {
  parsedUser = JSON.parse(storedUser);
} catch (e) {
  console.log("Error parsing user from localStorage:", e);
}

const backendUrl = "http://localhost:8080";
  
const isValidEmail = (email) => {
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  try {
    parsedUser = JSON.parse(storedUser);
  } catch (e) {
    console.log("Error parsing user from localStorage:", e);
  }
  const [user, setUser] = useState(parsedUser || null);

  // responsible for the log in
  const login = (email, password) => {
    if (!email || !password) {
      setError('Please enter both email and password.');
    } else if (!isValidEmail(email)) {
      setError('Invalid email format.');
    } else if (password.length < 6) {
      setError('Password must be at least 6 characters.');
    } else {
      fetch(`${backendUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then((response) => {
          // console.log(email);
          console.log(response);
          const { jwt, user } = response;
          setOnChange(!change);
          setUser(user);
          localStorage.setItem("is_google_login", false);
          localStorage.setItem("user", JSON.stringify(user));
          if (response.error) {
            // console.log(response.error)
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })
            Toast.fire({
              icon: 'error',
              title: 'Oops...',
              text: response.error
            })
          } else if (user) {
            setUser(user);
            localStorage.setItem("jwtToken", jwt);
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })
            Toast.fire({
              icon: 'success',
              title: 'Signed in successfully'
            })
            navigate("/");
          } else {
            console.log("Not logged in, something went wrong");
          }
        });
    }
  };
  
  const register = (name, email, password) => {
    if (!email || !password) {
      setError('Please enter all required fields.');
      return;
    } 
  
    if (!isValidEmail(email)) { // Check if email format is valid
      setError('Invalid email format.');
      return;
    }
  
    if (password.length < 6) { // Check if password is at least 6 characters
      setError('Password must be at least 6 characters.');
      return;
    }
  
    // if (password !== confirmPassword) { // Check if passwords match
    //   setError('Passwords do not match.');
    //   return;
    // }
  
    // Register user
    fetch(`${backendUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        setOnChange(!change);
  
        if (response.error) {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          });
  
          Toast.fire({
            icon: 'error',
            title: 'Oops...',
            text: response.error
          });
        } else {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          });
  
          Toast.fire({
            icon: 'success',
            title: 'Registered successfully!'
          });
  
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error('Error registering user:', error);
        setError('Error registering user. Please try again later.');
      });
  };
  
  
  const logout = () => {
    setUser(null);
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("user");
    localStorage.removeItem("is_google_login");
    localStorage.removeItem("user_profile");
    navigate("/");
  };

  // Attempt user login
//   useEffect(() => {
//     fetch(`${backendUrl}/loggedin`, {
//       method: "GET",
//       headers: {
//         "Authorization":`Bearer ${localStorage.getItem('jwtToken')}`,
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((response) => {
//         if(response.email){
//         setUser(response);
//         }
//       });
//   }, [change]);

  // Setting context data
  const contextData = {
    user,
    setUser,
    login,
    logout,
    register,
    backendUrl,
    nav_bar_items
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