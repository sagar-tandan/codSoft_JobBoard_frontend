import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { toast } from "react-hot-toast";
import hamburger from "../assets/Asset!/hamburger.png";
import profile from "../assets/Asset!/profile.png";
import logo from "../assets/jobLogo.png";
import logout from "../assets/Asset!/log-out.png";

export default function Navbar() {
  const [userName, setUserName] = useState();
  const [register, setRegister] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  // Get date

  let date = new Date(); // Current date and time

  let year = date.getFullYear();
  let monthIndex = date.getMonth(); // Getting the month index (0-11)
  let day = date.getDate();

  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let monthName = monthNames[monthIndex];

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        // navigate("/login");
        // console.log("cookie not found")
      }
      const { data } = await axios.post("/", {}, { withCredentials: true });
      const { status, user } = data;
      setUserName(user);
      return status ? "" : removeCookie("token");
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    setUserName("");
    window.location.reload();
    navigate("/");
  };

  const toggleButton = () => {
    setRegister((prev) => !prev);
  };
  const sendToProfile = (e, username) => {
    e.preventDefault();
    navigate("/profile");
  };

  // useEffect(() => {
  //   navigate("/");
  // }, [userName]);

  // console.log(userName);
  return (
    <nav>
      {userName && userName.type === "company" ? (
        <div
          className={`bg-white w-full flex text-black px-6 fixed top-0 z-50 `}
        >
          <div className="w-full max-w-screen-2xl h-full flex justify-between mx-auto items-center">
            <div className="text-2xl lg:text-3xl font-bold tracking-wide py-3 text-green-600 flex  w-full">
              <Link to="/" className="flex gap-1">
                <img className="w-8 h-8 lg:w-9 lg:h-9" src={logo} alt="" />
                <h1 className="py-1">JobBoard</h1>
              </Link>
            </div>

            <div className="w-full font-poppins sm:flex justify-center items-center gap-1 hidden">
              <h1 className="text-lg font-medium">{`${day} ${monthName} ${year} `}</h1>
            </div>
            <div className="flex gap-2 lg:gap-4 py-3 items-center w-full justify-end">
              <img
                onClick={() => {
                  Logout();
                }}
                className="w-8 h-8 object-cover hover:cursor-pointer"
                src={logout}
                alt="out"
              />

              {/* <div className="sm:hidden inline-block hover:cursor-pointer transition-all ease-in-out duration-300">
                <img className="w-6 h-6" src={hamburger} alt="" />
              </div> */}
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`bg-white w-full flex text-black px-6 fixed top-0 z-50 `}
        >
          <div className="w-full max-w-screen-2xl h-full flex justify-between mx-auto items-center relative">
            <Link to="/">
              <div className="text-2xl lg:text-3xl font-bold tracking-wide py-3 text-green-600 flex gap-1">
                <img className="w-8 h-8 lg:w-9 lg:h-9" src={logo} alt="" />
                <h1 className="py-1">JobBoard</h1>
              </div>
            </Link>
            <div className="flex gap-2 lg:gap-4 py-3 items-center font-medium lg:font-semibold">
              <div className="absolute left-[25%] h-full top-0 flex items-center justify-between right-[25%] font-poppins text-lg font-medium">
                <Link to="/">
                  <h1 className="hidden lg:inline-block ">Home</h1>
                </Link>
                <a href="#">
                  <h1 className="hidden lg:inline-block ">Company</h1>
                </a>
                <a href="#">
                  <h1 className="hidden lg:inline-block ">Jobs</h1>
                </a>
                <a href="#">
                  <h1 className="hidden lg:inline-block ">Contact</h1>
                </a>{" "}
              </div>
              {userName ? (
                <div className="flex gap-3 items-center">
                  {/* <div className="bg-green-500 py-1 px-3 text-white rounded hover:cursor-pointer hover:bg-green-600 transition-all ease-in-out duration-300">Post a Job</div> */}
                  <Link to="/">
                    <img
                      onClick={(e) => {
                        sendToProfile(e, userName);
                      }}
                      className="w-7 h-7"
                      src={profile}
                      alt=""
                    />
                  </Link>
                </div>
              ) : (
                <div className="relative flex gap-4">
                  <Link to="/login">
                    <div className="hidden sm:flex w-full gap-2 hover:cursor-pointer border-[2px] px-3 sm:px-6 lg:px-7 sm:py-1 rounded-full text-black border-black hover:text-white  hover:bg-green-700  hover:border-green-700 transition-all ease-in-out duration-500">
                      <h1 className="w-full ">Login </h1>
                      {/* <h1 className="w-full ">▼</h1> */}
                    </div>
                  </Link>

                  <div
                    onClick={() => {
                      toggleButton();
                    }}
                    className="hidden sm:flex w-full gap-2 hover:cursor-pointer border-[2px] px-3 sm:px-6 lg:px-7 sm:py-1 rounded-full text-white border-green-600 bg-green-600 hover:bg-green-700  hover:border-green-700 transition-all ease-in-out duration-300"
                  >
                    <h1 className="w-full ">Register </h1>
                    {/* <h1 className="w-full ">▼</h1> */}
                  </div>
                  {/* </Link> */}
                  {register && (
                    <div className="dropdownAnimation flex flex-col gap-2 py-2 absolute top-10 justify-center items-center bg-[#f2f2f2] shadow-md w-full">
                      <Link to="/registeruser">
                        <h1
                          onClick={() => toggleButton()}
                          className="hover:cursor-pointer hover:text-green-600"
                        >
                          Register JobSeeker
                        </h1>
                      </Link>
                      <Link to="/registercompany">
                        <h1
                          onClick={() => toggleButton()}
                          className="hover:cursor-pointer hover:text-green-600"
                        >
                          Register Company
                        </h1>
                      </Link>
                    </div>
                  )}
                </div>
              )}

              <div className="lg:hidden inline-block hover:cursor-pointer transition-all ease-in-out duration-300">
                <img className="w-6 h-6" src={hamburger} alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
