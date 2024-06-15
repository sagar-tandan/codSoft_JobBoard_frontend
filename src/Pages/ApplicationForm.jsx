import React from "react";
import { useLocation } from "react-router-dom";

export default function ApplicationForm() {
  const location = useLocation();
  const { username, emails, phones, cities, countries } = location.state;
  return (
    <div
      id="top"
      className=" h-[50vh] text-white bg-red-500 flex flex-col w-full max-w-screen-2xl pb-20 pt-24 px-[5%] font-poppins mx-auto overflow-hidden"
    >
      {username}
    </div>
  );
}
