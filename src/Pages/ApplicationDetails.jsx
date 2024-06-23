import React from "react";
import { useLocation } from "react-router-dom";

export default function ApplicationDetails() {
  const location = useLocation();
  const { app } = location.state;
  //   console.log(app);
  return (
    <div className="mt-20 w-full max-w-screen-2xl mx-auto flex flex-col text-black gap-3 font-poppins">
      <div >
        <h1 className="w-full font-medium text-xl flex items-center justify-center gap-2">
          Application details of 
          <span className="text-green-600 font-semibold text-xl"> {app.name}</span>
        </h1>
      </div>
    </div>
  );
}
