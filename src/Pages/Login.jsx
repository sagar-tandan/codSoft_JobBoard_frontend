import React from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import back from "../assets/loginBack.gif";
import loader from "../assets/Asset!/loader.gif";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    // axios.get('/')
    const { email, password } = data;
    try {
      setLoading(true);
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
        setLoading(false);
      } else {
        setLoading(false);
        setData({});
        toast.success(data.message);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
      setLoading(false);
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
              className="px-3 py-3 my-2 border rounded"
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
              className="py-3 px-3 my-2 border rounded"
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
              className="mt-3 shadow-green-300 shadow-lg bg-green-600 font-medium text-white rounded-full w-1/2 mx-auto hover:cursor-pointer flex items-center hover:bg-green-700 transition-all ease-in-out duration-300"
              type="submit"
            >
              <div className="w-full flex p-3 justify-center gap-4">
                <img
                  className={`${
                    loading ? "inline-block" : "hidden"
                  } w-6 h-6 object-center`}
                  src={loader}
                  alt=""
                />
                <h1 className={`${loading ? "hidden" : "inline"}`}>Login</h1>
              </div>
            </button>

            <div className="flex items-center justify-center mt-6 w-full font-medium gap-1 pb-20 md:pb-0 flex-wrap">
              <span className="w-full flex justify-center">
                Don't have an account? Register as{" "}
              </span>
              <Link to="/registeruser">
                <span className="text-green-600 hover:text-blue-500 hover:cursor-pointer transition-all ease-in-out duration-300">
                  {" "}
                  Candidate
                </span>
              </Link>

              <span className="text-green-600 ">/</span>
              <Link to="/registercompany">
                <span className="text-green-600 hover:text-blue-500 hover:cursor-pointer transition-all ease-in-out duration-300">
                  {" "}
                  Company
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
