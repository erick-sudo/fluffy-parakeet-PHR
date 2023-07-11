import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { Link } from "react-router-dom";
import { GiDoctorFace } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { BiSubdirectoryLeft } from "react-icons/bi";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import bg from "./images/record.png";
import logo from "./images/stethoscope.svg";
import Errors from "./Errors";

const Register = () => {
  const [stage, setStage] = useState(0);
  const { register } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [qualification, setQualification] = useState("");
  const [address, setAddress] = useState("");
  const [fillDoctorDetails, setFillDoctorDetails] = useState(false);
  const [errors, setErrors] = useState({})
  // sign up
  const handleSubmit = (e) => {
    e.preventDefault();
    register(name, email, password);
  };

  useEffect(() => {
    // validate1()
  }, [])

  // validate Username, Name, and Email
  function validate1() {
    if(name.length<1 || username.length<1 || email.length<1) {
      let errs = {}
      if(name.length < 1) {
        errs.name = ["name too short"]
      }
      if(username.length < 1) {
        errs.username = ["username too short"]
      }
      if(email.length < 1) {
        errs.email = ["invalid email address"]
      }
      setErrors(errs)
      setStage(0)
      return false
    } else {
      return true
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-white bg-slate-300 bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className=" flex flex-col items-center min-h-screen w-full p-10 bg-cover bg-center">
        <div className="flex w-3/4 mb-6 justify-center gap-1 items-center">
          <div
            onClick={() => setStage(0)}
            className={`flex items-center justify-center h-8 w-8 ${
              stage >= 0 ? "text-white bg-blue-800" : "border-2 border-blue-800"
            } rounded-full`}
          >
            <FaRegUser />
          </div>
          <div
            className={`flex-grow h-2 ${
              stage >= 1 ? "bg-blue-800" : "border-2 border-blue-800"
            } rounded-full`}
          ></div>
          <div
            onClick={() => validate1() && Object.keys(errors).length === 0 && setStage(1)}
            className={`flex items-center justify-center h-8 w-8 ${
              stage >= 1 ? "text-white bg-blue-800" : "border-2 border-blue-800"
            } rounded-full`}
          >
            <GiDoctorFace />
          </div>
          <div
            className={`flex-grow h-2 ${
              stage >= 2 ? "bg-blue-800" : "border-2 border-blue-800"
            } rounded-full`}
          ></div>
          <div
            onClick={() => validate1() && Object.keys(errors).length === 0 && setStage(2)}
            className={`flex items-center justify-center h-8 w-8 ${
              stage >= 2 ? "text-white bg-blue-800" : "border-2 border-blue-800"
            } rounded-full`}
          >
            <BiSubdirectoryLeft />
          </div>
        </div>
        <div className="container min-h-[70vh] max-w-lg bg-white shadow-lg flex flex-col shadow-gray-900 bg-opacity-75 rounded-2xl shadow-5xl relative z-2 backdrop-filter backdrop-blur-sm">
          <div className="flex items-center justify-center mt-10">
            <Link className="flex block items-center" to="/">
              <img className="h-12 mb-5 mx-auto" src={logo} alt="logo" />
            </Link>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-grow flex-col">
            {stage === 0 && (
              <div className="flex flex-col flex-grow">
                <div className="mt-2 flex flex-col flex-grow justify-center">
                  <div className={`w-3/4 ml-10 p-1 my-6 ${errors.name && "border rounded text-red-500 border-red-500"}`}>
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="absolute top-0 left-0 px-3 py-2 transition-all duration-300 ease-in-out"
                      >
                        <span className="sr-only">Name</span>
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 bg-transparent placeholder-black placeholder-font-semibold outline-none"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => {
                          let errs = []
                          if(name.length<3) {
                            errs.push("name too short")
                          }
                          if(errs.length < 1) {
                            delete errors.name;
                          } else {
                            setErrors({...errors, name: errs })
                          }
                          setName(e.target.value)
                        }}
                        placeholder="Name"
                        required
                      />
                      <FontAwesomeIcon
                        icon={faUser}
                        className="absolute top-0 right-0 ml-3 mt-3 mr-4 text-black"
                      />
                    </div>
                    <div className="border-b border-black w-full"></div>
                    {errors.name && <Errors errors={errors.name} />}
                  </div>
                  <div className={`w-3/4 ml-10 p-1 my-6 ${errors.username && "border rounded text-red-500 border-red-500"}`}>
                    <div className="relative">
                      <label
                        htmlFor="username"
                        className="absolute top-0 left-0 px-3 py-2 transition-all duration-300 ease-in-out"
                      >
                        <span className="sr-only">Username</span>
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 bg-transparent placeholder-black placeholder-font-semibold outline-none"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => {
                          let errs = []
                          if(username.length<6) {
                            errs.push("username too short")
                          }
                          if(errs.length < 1) {
                            delete errors.username;
                          } else {
                            setErrors({...errors, username: errs })
                          }
                          setUsername(e.target.value)
                        }}
                        placeholder="Username"
                        required
                      />
                      <FontAwesomeIcon
                        icon={faUser}
                        className="absolute top-0 right-0 ml-3 mt-3 mr-4 text-black"
                      />
                    </div>
                    <div className="border-b border-black w-full"></div>
                    {errors.username && <Errors errors={errors.username} />}
                  </div>
                  <div className={`w-3/4 ml-10 p-1 my-6 ${errors.email && "border rounded text-red-500 border-red-500"}`}>
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="absolute top-0 left-0 px-3 py-2 transition-all duration-300 ease-in-out"
                      >
                        <span className="sr-only">Email</span>
                      </label>
                      <input
                        type="email"
                        className="w-full p-3 bg-transparent placeholder-black placeholder-font-semibold outline-none"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => {
                          let errs = []
                          if(!email.includes("@")) {
                            errs.push("invalid email address")
                          }
                          if(errs.length < 1) {
                            delete errors.email;
                          } else {
                            setErrors({...errors, email: errs })
                          }
                          setEmail(e.target.value)
                        }}
                        placeholder="Email "
                        required
                      />
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="absolute top-0 right-0 ml-3 mt-3 mr-4 text-black"
                      />
                    </div>
                    <div className="border-b border-black w-full"></div>
                    {errors.email && <Errors errors={errors.email} />}
                  </div>

                  <div className="flex justify-center px-8 py-2">
                    <div
                      onClick={(e) => validate1() && Object.keys(errors).length === 0 && setStage(1)}
                      className="bg-blue-800 text-xl text-white hover:bg-white hover:ring-2 hover:ring-blue-800 hover:text-blue-800 mb-2 px-8 py-1 rounded-lg"
                    >
                      <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {stage === 1 && (
              <div className={`flex flex-col flex-grow`}>
                <div
                  className={`flex-grow flex flex-col justify-center`}
                >
                  <div className="w-3/4 mx-auto flex items-center gap-2">
                    <input
                      checked={fillDoctorDetails}
                      onChange={() => setFillDoctorDetails(!fillDoctorDetails)}
                      className="h-8"
                      type="checkbox"
                    />
                    <span>Fill doctor details</span>
                  </div>
                  <div className={`m-2 rounded-lg ${
                    !fillDoctorDetails && "bg-gray-400 opacity-50"
                  }`}>
                    <div className="w-3/4 ml-10  p-1 my-6">
                      <div className="relative">
                        <label
                          htmlFor="specialization"
                          className="absolute top-0 left-0 px-3 py-2 transition-all duration-300 ease-in-out"
                        >
                          <span className="sr-only">Specialization</span>
                        </label>
                        <input
                          type="text"
                          className="w-full disabled:bg-gray-400 disabled:bg-opacity-50 disabled:text-opacity-30 p-3 bg-transparent placeholder-black placeholder-font-semibold outline-none"
                          id="specialization"
                          name="specialization"
                          value={specialization}
                          onChange={(e) => setSpecialization(e.target.value)}
                          placeholder="Specialization"
                          required
                          disabled={!fillDoctorDetails}
                        />
                      </div>
                      <div className="border-b border-black w-full"></div>
                    </div>
                    <div className="w-3/4 ml-10  p-1 my-6">
                      <div className="relative">
                        <label
                          htmlFor="qualification"
                          className="absolute top-0 left-0 px-3 py-2 transition-all duration-300 ease-in-out"
                        >
                          <span className="sr-only">Qualificcation</span>
                        </label>
                        <input
                          type="text"
                          className="w-full disabled:bg-gray-400 disabled:bg-opacity-50 disabled:text-opacity-30 p-3 bg-transparent placeholder-black placeholder-font-semibold outline-none"
                          id="qualification"
                          name="qualification"
                          value={qualification}
                          onChange={(e) => setQualification(e.target.value)}
                          placeholder="Qualification"
                          required
                          disabled={!fillDoctorDetails}
                        />
                      </div>
                      <div className="border-b border-black w-full"></div>
                    </div>
                    <div className="w-3/4 ml-10  p-1 my-6">
                      <div className="relative">
                        <label
                          htmlFor="address"
                          className="absolute top-0 left-0 px-3 py-2 transition-all duration-300 ease-in-out"
                        >
                          <span className="sr-only">Address</span>
                        </label>
                        <input
                          type="text"
                          className="w-full disabled:bg-gray-400 disabled:bg-opacity-50 disabled:text-opacity-30 p-3 bg-transparent placeholder-black placeholder-font-semibold outline-none"
                          id="address"
                          name="address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="Address"
                          required
                          disabled={!fillDoctorDetails}
                        />
                      </div>
                      <div className="border-b border-black w-full"></div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between px-8 py-2">
                  <div
                    onClick={(e) => setStage(0)}
                    className="bg-blue-800 text-xl text-white hover:bg-white hover:ring-2 hover:ring-blue-800 hover:text-blue-800 mb-2 px-8 py-1 rounded-lg"
                  >
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </div>
                  <div
                    onClick={(e) => setStage(2)}
                    className="bg-blue-800 text-xl text-white hover:bg-white hover:ring-2 hover:ring-blue-800 hover:text-blue-800 mb-2 px-8 py-1 rounded-lg"
                  >
                    {fillDoctorDetails ? (
                      <FontAwesomeIcon icon={faArrowRight} />
                    ) : (
                      <span className="cursor-pointer">Skip</span>
                    )}
                  </div>
                </div>
              </div>
            )}
            {stage === 2 && (
              <div className="flex flex-col flex flex-grow">
                <div className="flex-grow flex flex-col justify-center">
                  <div className="w-3/4 ml-10 p-1 my-6">
                    <div className="relative">
                      <label
                        htmlFor="password"
                        className="absolute top-0 left-0 px-3 py-2 transition-all duration-300 ease-in-out"
                      >
                        <span className="sr-only">Password</span>
                      </label>
                      <input
                        type="password"
                        className="w-full p-3 bg-transparent placeholder-black placeholder-font-semibold outline-none"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => {
                          let errs = []
                          if(!Boolean(password.length < 8)) {
                            errs.push("password too short")
                          }
                          if(errs.length < 1) {
                            delete errors.password;
                          } else {
                            setErrors({...errors, password: errs })
                          }
                          setEmail(e.target.value)
                          setPassword(e.target.value)
                        }}
                        placeholder="Password"
                        required
                      />
                      <FontAwesomeIcon
                        icon={faLock}
                        className="absolute top-0 right-0 ml-3 mt-3 mr-4 text-black"
                      />
                    </div>
                    <div className="border-b border-black w-full"></div>
                  </div>
                  <div className="w-3/4 ml-10 p-1 my-6">
                    <div className="relative">
                      <input
                        type="password"
                        className="w-full p-3 bg-transparent placeholder-black placeholder-font-semibold outline-none"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm Password"
                        required
                      />
                      <label
                        htmlFor="confirmPassword"
                        className="absolute top-0 left-0 px-3 py-2 text-black transition-all duration-300 ease-in-out"
                      >
                        <span className="sr-only">Confirm Password</span>
                      </label>
                      <FontAwesomeIcon
                        icon={faLock}
                        className="absolute top-0 right-0 ml-3 mt-3 mr-4 text-black"
                      />
                    </div>
                    <div className="border-b border-black w-full"></div>
                  </div>
                  <div>
                    <button className="w-3/4 block active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-2 rounded-md px-4 mx-auto bg-gray-700 hover:bg-white hover:ring hover:ring-gray-700 hover:text-gray-700 text-white font-bold">
                      Sign Up
                    </button>
                  </div>
                </div>
                <div className="flex justify-between px-8 py-2">
                  <div
                    onClick={(e) => setStage(1)}
                    className="bg-blue-800 text-xl text-white hover:bg-white hover:ring-2 hover:ring-blue-800 hover:text-blue-800 mb-2 px-8 py-1 rounded-lg"
                  >
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </div>
                </div>
              </div>
            )}
          </form>
          <Link
            to="/login"
            className="my-4 flex justify-center items-center font-bold "
          >
            Have an account?
            <span className="text-blue-900 font-bold p-2">login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Register;
