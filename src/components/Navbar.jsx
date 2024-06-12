import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="bg-white-500 w-full flex text-black px-4 fixed top-0 ">
        <div className="w-full max-w-screen-xl h-full flex justify-between mx-auto items-center">
          <Link to="/">
            <h1 className="text-xl font-semibold py-3">JobBoard</h1>
          </Link>
          <div className="flex gap-4 py-3 items-center font-semibold">
            <Link to="/login">
              <h1 className="hover:cursor-pointer border-[2px] px-8 py-1 rounded-full border-[#c1c1c1] hover:bg-green-600 hover:border-green-600 hover:text-white transition-all ease-in-out duration-300"> Login </h1>
            </Link>
            <Link to="/register">
            <h1 className="hover:cursor-pointer border-[2px] px-6 py-1 rounded-full text-white border-green-600 bg-green-600 hover:bg-white hover:text-black hover:border-[#c1c1c1] transition-all ease-in-out duration-300">Register</h1>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
