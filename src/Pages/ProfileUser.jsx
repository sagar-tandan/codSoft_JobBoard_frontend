import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function ProfileUser({ data }) {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [userData, setUserData] = useState({});
  const [username, setUserName] = useState("");
  const [useremail, setUserEmail] = useState("");
  const [userphone, setUserPhone] = useState("");
  const [isUsernameEditable, setIsUsernameEditable] = useState(false);
  const [isUserEmailEditable, setIsUserEmailEditable] = useState(false);
  const [isUserPhoneEditable, setIsUserPhoneEditable] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setUserData(data);
      setUserName(data.Username);
      setUserEmail(data.Useremail);
      setUserPhone(data.Userphone);
    }
  }, [data]);

  const Logout = () => {
    navigate("/");
    removeCookie("token");
    window.location.reload();
    setUserData({});
  };

  return (
    <div className="flex flex-col w-full max-w-screen-2xl pb-20 font-poppins mx-auto overflow-hidden mt-20 lg:mt-20 justify-center items-center px-1">
      <div className="w-[100%] sm:w-[60%] flex flex-col gap-2 justify-center items-center bg-[#f2f2f2] px-1 sm:px-3 py-6 rounded-xl">
        <img
          className="w-28 h-28 rounded-full"
          src={userData.Userimage}
          alt=""
        />
        <div className="w-full flex gap-2 items-center justify-center mt-5">
          <div className="flex gap-2 items-center w-[80%] sm:w-[500px] px-2 py-2 justify-between border rounded">
            <div className="flex gap-2 items-center w-full">
              <img
                className="w-4 h-4"
                src="https://cdn-icons-png.flaticon.com/128/456/456212.png"
                alt=""
              />
              <input
                className={` font-poppins w-full bg-[#f2f2f2] outline-none`}
                type="text"
                value={username}
                onChange={(e) => setUserPhone(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="w-full flex gap-2 items-center justify-center">
          <div className="flex gap-2 items-center w-[80%] sm:w-[500px] px-2 py-2 justify-between border rounded">
            <div className="flex gap-2 items-center w-full">
              <img
                className="w-4 h-4"
                src="https://cdn-icons-png.flaticon.com/128/646/646135.png"
                alt=""
              />
              <input
                className={` font-poppins w-full bg-[#f2f2f2] outline-none`}
                type="text"
                value={useremail}
                onChange={(e) => setUserPhone(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="w-full flex gap-2 items-center justify-center">
          <div className="flex gap-2 items-center w-[80%] sm:w-[500px] px-2 py-2 justify-between border rounded">
            <div className="flex gap-2 items-center w-full">
              <img
                className="w-4 h-4"
                src="https://cdn-icons-png.flaticon.com/128/483/483947.png"
                alt=""
              />
              <input
                className={` font-poppins w-full bg-[#f2f2f2] outline-none`}
                type="text"
                value={userphone}
                onChange={(e) => setUserPhone(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="w-full sm:w-[60%] flex items-center justify-between sm:justify-center gap-10">
          <h1 className="px-3 sm:px-9 py-1 sm:py-2 bg-green-700 rounded font-poppins font-medium text-white mt-3 cursor-pointer active:scale-95 transition-all duration-200">
            Update
          </h1>
          <h1
            onClick={() => Logout()}
            className="px-3 sm:px-9 py-1 sm:py-2 bg-red-700 rounded font-poppins font-medium text-white mt-3 cursor-pointer active:scale-95 transition-all duration-200"
          >
            Logout
          </h1>
        </div>

        <h1 className="mt-10 w-full flex justify-center items-center font-poppins font-medium">Applications</h1>
      </div>
    </div>
  );
}
