import React from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const { data } = await axios.post("/register", {
        name,
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData("");
        toast.success("Login Successful!!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form
        onSubmit={registerUser}
        className="flex flex-col max-w-screen-md my-3 mx-auto mt-16"
      >
        <label className="font-medium mx-1 text-lg"> Name</label>

        <div className="flex flex-col border-[2px] mt-1 rounded-xl border-blue-500">
          <input
            className="outline-none px-3 my-2"
            type="text"
            placeholder="Enter name...."
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>

        <label className="font-medium mx-1 text-lg mt-4"> Email</label>

        <div className="flex flex-col border-[2px] mt-1 rounded-xl border-blue-500">
          <input
            className="outline-none px-3 my-2"
            type="email"
            placeholder="Enter email...."
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>

        <label className="font-medium mx-1 text-lg mt-4"> Password</label>

        <div className="flex flex-col border-[2px] mt-1 rounded-xl border-blue-500">
          <input
            className="outline-none px-3 my-2"
            type="password"
            placeholder="Enter password...."
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>

        <button
          className="mt-4 bg-blue-500 p-3 rounded-full w-1/2 mx-auto hover:brightness-95 transition-all ease-in-out duration-300 font-medium"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
