import React from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import back from "../assets/loginBack.gif";

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    // axios.get('/')
    const { email, password } = data;
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success(data.message);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };
  return (
    <div className="flex relative w-full max-w-screen-3xl top-0 left-0 right-0 bottom-0 h-[100vh]">
      <img className="w-full object-cover blur-md" src={back} alt="back" />
      <div className="dropdownAnimation absolute flex flex-col top-16 max-w-screen-sm mx-auto w-full left-0 right-0 rounded-xl shadow-2xl pb-3">
        {/* <img className="w-full object-cover" src={back} alt="" /> */}
        {/* </div> */}
        <h1 className="text-black font-semibold text-2xl px-3 font-poppins py-6">
          Login to your account
        </h1>
        <span className="w-full border mb-1"></span>
        <div className="flex flex-col border rounded m-5">
          <h1 className="w-full flex items-center font-medium justify-center text-xl mt-4">
            Enter your credentials below
          </h1>
          <form
            onSubmit={loginUser}
            className="flex flex-col w-full my-3 px-10 "
          >
            <label className="font-medium mx-1 text-lg">Email</label>

            <input
              required
              className="px-3 py-3 my-2 border"
              type="email"
              placeholder="Enter your email"
              value={data.email}
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
            />

            <label className="mt-4 font-medium mx-1 text-lg"> Password</label>

            <input
              required
              className="py-3 px-3 my-2 border"
              type="password"
              placeholder="Enter your password"
              value={data.password}
              onChange={(e) => {
                setData({ ...data, password: e.target.value });
              }}
            />

            <div className="w-full font-medium flex justify-end mt-2">
              {" "}
              <h1 className="hover:cursor-pointer hover:text-blue-500">
                Forget Password?
              </h1>
            </div>

            <button
              className="my-4 bg-green-600 text-white hover:bg-green-700 text-lg p-3 rounded-full w-1/2 mx-auto hover:brightness-95 transition-all ease-in-out duration-300 font-medium shadow-lg shadow-green-400"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      {/* <form
        onSubmit={loginUser}
        className="flex flex-col max-w-screen-md my-3 mx-auto "
      >
        <label className="font-medium mx-1 text-lg"> Email</label>

        <div className="flex flex-col border-[2px] mt-1 rounded-xl border-blue-500">
          <input
            className="outline-none px-3 my-2"
            type="email"
            placeholder="Enter email...."
            value={data.email}
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
            }}
          />
        </div>

        <label className="mt-4 font-medium mx-1 text-lg"> Password</label>

        <div className="flex flex-col border-[2px] mt-1 rounded-xl border-blue-500">
          <input
            className="outline-none px-3 my-2"
            type="password"
            placeholder="Enter password...."
            value={data.password}
            onChange={(e) => {
              setData({ ...data, password: e.target.value });
            }}
          />
        </div>

        <button
          className="mt-4 bg-blue-500 p-3 rounded-full w-1/2 mx-auto hover:brightness-95 transition-all ease-in-out duration-300 font-medium"
          type="submit"
        >
          Login
        </button>
      </form> */}
    </div>
  );
}
