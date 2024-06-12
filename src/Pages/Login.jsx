import React from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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
      toast.error("An error occurred");
    }
  };
  return (
    <div className="mt-16">
      <form
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
      </form>
    </div>
  );
}
