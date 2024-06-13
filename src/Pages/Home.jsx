import React, { useState, useEffect } from "react";
import gsap from "gsap";
import axios from "axios";
import { useCookies } from "react-cookie";
// axios.defaults.withCredentials = true;
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import email from "../assets/Asset!/email.gif";
import hero1 from "../assets/Asset!/hero1.webp";
import video from "../assets/video.mp4";

import Categories from "../components/Categories";
import JobListing from "../components/JobListing";

export default function Home() {
  const [userName, setUserName] = useState();
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const sendRequest = async () => {
  //     const res = await axios.get("/user", {
  //       withCredentials: true,
  //     });
  //     const data = await res.data;
  //     setUser(data.user);
  //     // console.log(data.user);
  //   };
  //   sendRequest();
  //   const verifyCookie = async () => {
  //     if (!cookies.token) {
  //       // navigate("/login");
  //       // console.log("cookie not found")
  //     }
  //     const { data } = await axios.post("/", {}, { withCredentials: true });
  //     const { status, user } = data;
  //     setUserName(user);
  //     return status ? "" : (removeCookie("token"), navigate("/login"));
  //   };
  //   verifyCookie();
  // }, [cookies, navigate, removeCookie]);

  // const Logout = () => {
  //   removeCookie("token");
  //   navigate("/login");
  // };

  useEffect(() => {
    gsap.fromTo(
      ".box",
      {
        y: 10,
        opacity: 0,
        ease: "elastic.inOut",
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "elastic.inOut",
      }
    );
  }, []);

  return (
    <>
      <div className="flex flex-col w-full max-w-screen-2xl pb-20 font-poppins">
        <div className="flex h-[60vh] w-full">
          <div className="w-1/2 flex justify-center items-center ml-[5%] flex-col pt-16 leftdiv">
            <h1 className="text-4xl font-bold w-full text-left">
              Find & <span className="text-green-600">Hire</span> Experts{" "}
            </h1>
            <h1 className="text-4xl font-bold  w-full text-left">
              For any <span className="text-green-600">Job</span>{" "}
            </h1>
            <div className="w-full flex">
              <p className="w-[70%] text-[#5f5f5f] mt-4 text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              </p>
            </div>

            <div className="w-full mt-4 flex gap-2">
              <div className="w-[65%] ">
                <input
                  className="bg-[#f2f2f2] px-3 py-2 rounded-full w-full outline-[1px]"
                  type="text"
                  placeholder="Search jobs,"
                />
              </div>
              <div className="flex justify-center items-center w-[120px] text-lg border-[2px] border-[#c1c1c1] hover:border-green-500 hover:text-white hover:bg-green-500 rounded-full hover:cursor-pointer hover:brightness-90 active:scale-90 transition-all ease-in-out duration-300 ">
                Search
              </div>
            </div>
          </div>
          <div className="w-1/2 lg:flex relative hidden rightdiv">
            <img
              className="w-full h-full object-cover "
              src={hero1}
              // src="https://i.pinimg.com/originals/a3/84/3e/a3843e404a271edb47b1908dd2a6230b.gif"
              alt=""
            />
            {/* <video className="w-full h-full object-cover pointer-events-none"  autoPlay  muted src={video}></video> */}
            <div className="absolute left-[32%] top-[24%] xl:top-[24%] 2xl:top-[22%] h-10">
              <img
                className="box w-[24%] xl:w-[22%] h-auto"
                src={email}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col px-[5%] mt-16">
          <div className="flex justify-between mb-8">
            <h1 className="text-black text-xl font-semibold">Most Demanding Categories</h1>
            <h1 className="font-medium text-green-600 hover:cursor-pointer">Explore all fields &gt;</h1>
          </div>
          <Categories />
        </div>

        <div className="w-full flex flex-col px-[5%] mt-24">
          <div className="flex justify-between mb-8">
            <h1 className="text-black text-xl font-semibold">Recent Job Circulars</h1>
            <h1 className="font-medium text-green-600 hover:cursor-pointer">Explore more &gt;</h1>
          </div>
          <JobListing />
        </div>
      </div>
      {/* {userName && (
        <div>
          <h4>
            {" "}
            Welcome <span>{userName}</span>
          </h4>
          <button onClick={Logout}>LOGOUT</button>
        </div>
      )} */}
    </>
  );
}
