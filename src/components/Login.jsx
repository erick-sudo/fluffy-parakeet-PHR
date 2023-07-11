import { React, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import bg from "./images/record.png";
import logo from "./images/stethoscope.svg";

function Login({ signin }) {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div
      className="fixed z-50 inset-0 bg-slate-300 bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className=" flex justify-center items-center min-h-screen w-full p-10 bg-cover bg-center">
        <div className="container shadow-gray-900 h-100 w-96 bg-gray-200 bg-opacity-75 rounded-2xl shadow-2xl relative z-2 backdrop-filter backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center mt-10">
            <Link to="/">
              <img className="h-12 mb-5 mx-auto" src={logo} alt="logo" />
            </Link>
          </div>
          <form
            className="flex flex-col justify-evenly items-center"
            onSubmit={handleSubmit}
          >
            <div className="w-3/4 p-1 my-6">
              <div className="relative">
                <input
                  type="username"
                  className="w-full p-3 text-lg bg-transparent placeholder-black placeholder-font-semibold outline-none"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute top-0 left-0 py-2 px-3 transition-all duration-300 ease-in-out"
                >
                  <span className="sr-only">Username</span>
                </label>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="absolute top-0 right-0 ml-8 mt-3 mr-4 text-black"
                />
              </div>
              <div className="border-b border-black w-full"></div>
            </div>
            <div className="w-3/4 p-1 my-6">
              <div className="relative">
                <input
                  type="password"
                  className="w-full p-3 text-black text-lg bg-transparent placeholder-black placeholder-font-semibold outline-none"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
                <label
                  htmlFor="password"
                  className="absolute top-0 left-0 px-3 py-2 text-black transition-all duration-300 ease-in-out"
                >
                  <span className="sr-only">Password</span>
                </label>
                <FontAwesomeIcon
                  icon={faLock}
                  className="absolute top-0 right-0 ml-8 mr-4 mt-3 text-black"
                />
              </div>
              <div className="border-b border-black w-full"></div>
            </div>
            <button
              type="submit"
              className="w-3/4 block active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]
      ease-in-out py-2 rounded-md block px-4 mx-auto bg-gray-700 hover:bg-white hover:ring hover:text hover:ring-gray-700 hover:text-gray-700 text-white font-bold"
            >
              Login
            </button>
            <div className="text-black my-2 text-sm font-bold">OR</div>
            <button
              className="w-3/4 block active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]
            ease-in-out py-2 rounded-md px-4 mx-auto bg-gray-700 hover:bg-white hover:ring hover:text hover:ring-gray-700 hover:text-gray-700 text-white font-bold"
              onClick={() => signin()}
            >
              Log in with Google
            </button>

            <Link
              to="/signup"
              className="mt-8 flex justify-center items-center font-bold"
            >
              Don't have an account?
              <span className="text-blue-600 p-2 font-bold text-m">signup</span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
