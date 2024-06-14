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
        className="flex border flex-col max-w-screen-md my-3 mx-auto mt-16"
      >
        {/* <label className="font-medium mx-1 text-lg"> Name</label>

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
        </div> */}

        <div className="flex flex-col gap-2 w-[70%] mx-auto mt-4">
          <h1 className="font-poppins font-medium text-xl">
            Company Registration
          </h1>
          <p>
            Fill out the form below to create an account. Once you create an
            account, log in to the system and post your vacancies online to
            reach out the active users who are looking for a new job.
          </p>
          <div className="border"></div>

          <h1 className="font-medium text-xl font-poppins mt-3 mb-2">
            Login Information
          </h1>
          {/* for email */}
          <div className="flex md:flex-row flex-col gap-4 md:gap-8 justify-between">
            <div className="flex flex-col gap-1 w-full">
              <label className="font-medium">Email Address</label>
              <input
                className="border-[1px] border-[#c1c1c1] rounded p-2"
                type="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>

            <div className="flex flex-col gap-1 w-full">
              <label className="font-medium">Password</label>
              <input
                className="border-[1px] border-[#c1c1c1] rounded p-2"
                type="password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </div>
          </div>

          <div className="border"></div>
          
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
