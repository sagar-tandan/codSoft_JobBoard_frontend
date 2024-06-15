import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import reg from "../assets/Asset!/reg.jpg";
import loader from "../assets/Asset!/loader.gif";
import back from "../assets/back.png";

import { Country, State, City } from "country-state-city";

export default function JobSeekerRegister() {
  const navigate = useNavigate();
  const [cities, setCities] = useState([]);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    image: "",
    selectedCity: "",
    selectedCountry: "",
    phone: "",
  });

  const country = Country.getAllCountries();

  const handleCountryChange = (event) => {
    setData({ ...data, selectedCountry: event.target.value });
  };

  useEffect(() => {
    const selectedCountry1 = country.find(
      (count) => count.name === data.selectedCountry
    );
    if (selectedCountry1) {
      setCode(selectedCountry1.isoCode);
    }
  }, [data.selectedCountry]);

  useEffect(() => {
    if (code) {
      setCities(City.getCitiesOfCountry(code));
    }
  }, [code]);

  const handleCityChange = (event) => {
    setData({ ...data, selectedCity: event.target.value });
  };

  const registerUser = async (e) => {
    e.preventDefault();
    // const {
    //   name,
    //   email,
    //   password,
    //   cpassword,
    //   image,
    //   selectedCity,
    //   selectedCountry,
    //   phone,
    // } = data;

    // if (password != cpassword) {
    //   toast.error("Password didn't match!");
    // } else if (password.length < 6) {
    //   toast.error("Password should have at least 6 letters!");
    // } else {
    //   try {
    //     setLoading(true);
    //     const { data } = await axios.post("/register", {
    //       name,
    //       email,
    //       password,
    //       image,
    //       selectedCity,
    //       selectedCountry,
    //       phone,
    //     });
    //     if (data.error) {
    //       toast.error(data.error);
    //       setLoading(false);
    //     } else {
    //       setData("");
    //       // console.log(data);
    //       setLoading(false);
    //       toast.success("Registration completed!");
    //       navigate("/login");
    //     }
    //   } catch (error) {
    //     // console.log(error);
    //     toast.error(error.message);
    //     setLoading(false);
    //   }
    // }

    // console.log(data);
  };
  return (
    <div>
      <form
        onSubmit={registerUser}
        className="relative w-full flex flex-row max-w-screen-2xl mt-3 md:mt-10 lg:mt-20 px-[5%] 2xl:px-[3%] mx-auto"
      >
        <div className="hidden lg:inline-block absolute top-0 left-0 h-[100vh] w-[40%] blur">
          <img
            className="h-[90vh] object-cover"
            src="https://i.pinimg.com/564x/f1/d3/f8/f1d3f81bfd7b0b3dab51557e1ec430d1.jpg"
            alt=""
          />
        </div>

        <div className="absolute top-0 right-0 h-[100%] w-[60%] blur">
          <img className="h-full object-cover w-full" src={back} alt="" />
        </div>

        <div className="flex flex-row w-full h-[80vh] my-[5vh] z-[10] gap-4 lg:shadow-[#545454f1] lg:shadow-2xl">
          <div className="w-[40%] hidden lg:inline-block">
            <img
              className="w-full h-full object-cover"
              // src="https://i.pinimg.com/564x/f1/d3/f8/f1d3f81bfd7b0b3dab51557e1ec430d1.jpg"
              // src="https://i.pinimg.com/564x/e2/19/16/e2191675372d855ffd12addb695946b6.jpg"
              src="https://i.pinimg.com/564x/48/cc/24/48cc24070f83f56a25eb8b00862ef514.jpg"
              alt=""
            />
          </div>

          <div className="flex flex-col w-full lg:w-[60%] my-[3vh] h-[80vh] pr-4">
            <div className="flex flex-col gap-2 w-full">
              <div className="font-poppins font-semibold text-xl flex flex-col">
                <h1>Candidate Registration</h1>
                <div className="border bg-green-600 w-[70px] h-[5px] mt-1 rounded-full"></div>
              </div>
              <p>
                Fill out the form below to create an account. Once you create an
                account, log in to the system and create your profile to start
                applying the jobs that you are looking for.
              </p>
              <div className="border"></div>

              {/* for email */}
              <div className="flex md:flex-row flex-col gap-4 md:gap-8 justify-between mt-1">
                <div className="flex flex-col gap-1 w-full">
                  <label className="font-medium">Full Name</label>
                  <input
                    required
                    className="border-[1px] border-[#c1c1c1] rounded p-2"
                    type="text"
                    placeholder="Enter full name"
                    value={data.name}
                    onChange={(e) =>
                      setData({ ...data, name: e.target.value })
                    }
                  />
                </div>

                

                <div className="flex flex-col gap-1 w-full">
                  <label className="font-medium">Profile Link</label>
                  <input
                    required
                    className="border-[1px] border-[#c1c1c1] rounded p-2"
                    type="text"
                    placeholder="Enter image link"
                    value={data.image}
                    onChange={(e) =>
                      setData({ ...data, image: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="flex md:flex-row flex-col gap-4 md:gap-8 justify-between">
                <div className="flex flex-col gap-1 w-full">
                  <label className="font-medium">Email Address</label>
                  <input
                    required
                    className="border-[1px] border-[#c1c1c1] rounded p-2"
                    type="email"
                    placeholder="Enter email address"
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                  />
                </div>

                <div className="flex flex-col gap-1 w-full">
                  <label className="font-medium">Phone</label>
                  <input
                    required
                    className="border-[1px] border-[#c1c1c1] rounded p-2"
                    type="number"
                    placeholder="Enter phone number"
                    value={data.phone}
                    onChange={(e) =>
                      setData({ ...data, phone: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="flex md:flex-row flex-col gap-4 md:gap-8 justify-between">
                <div className="flex flex-col gap-1 w-full">
                  <label className="font-medium">Country</label>

                  <select
                    className="py-2 px-2 border-[1px] border-[#c1c1c1] rounded"
                    value={data.selectedCountry}
                    required
                    onChange={handleCountryChange}
                  >
                    <option value="">Select Country</option>
                    {country.map((cou) => (
                      <option value={cou.countryCode}>{cou.name}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1 w-full">
                  <label className="font-medium">City</label>

                  <select
                    className="py-2 px-2 border-[1px] border-[#c1c1c1] rounded"
                    value={data.selectedCity}
                    onChange={handleCityChange}
                    required
                  >
                    <option value="">Select city</option>
                    {cities.length > 0 &&
                      cities.map((cou) => (
                        <option value={cou.name}>{cou.name}</option>
                      ))}
                  </select>
                </div>
              </div>

              <div className="flex md:flex-row flex-col gap-4 md:gap-8 justify-between">
                <div className="flex flex-col gap-1 w-full">
                  <label className="font-medium">Password</label>
                  <input
                    required
                    className="border-[1px] border-[#c1c1c1] rounded p-2"
                    type="password"
                    placeholder="Enter password"
                    value={data.password}
                    onChange={(e) =>
                      setData({ ...data, password: e.target.value })
                    }
                  />
                </div>

                <div className="flex flex-col gap-1 w-full">
                  <label className="font-medium">Confirm Password</label>
                  <input
                    required
                    className="border-[1px] border-[#c1c1c1] rounded p-2 "
                    type="password"
                    placeholder="Enter password again"
                    value={data.cpassword}
                    onChange={(e) =>
                      setData({ ...data, cpassword: e.target.value })
                    }
                  />
                </div>
              </div>
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
                <h1 className={`${loading ? "hidden" : "inline"}`}>Submit</h1>
              </div>
            </button>

            <div className="flex items-center justify-center mt-4 w-full font-medium gap-1 pb-20 md:pb-0 flex-wrap">
              <span>Already have an account? </span>
              <span className="text-green-600 hover:text-blue-500 hover:cursor-pointer transition-all ease-in-out duration-300">
                {" "}
                Login
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
