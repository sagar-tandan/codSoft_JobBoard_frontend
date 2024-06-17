import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import loader from "../assets/Asset!/loader.gif";
import category from "../Data/Category.jsx";

export default function PostJob({ datas }) {
  const [data, setData] = useState({
    id: datas._id,
    cName: datas.name,
    cLoc: datas.selectedCity + ", " + datas.selectedCountry,
    cPhone: datas.phone,
    position: "",
    des: "",
    jobtype: "",
    category: "",
    skills: "",
    salary: "",
    experience: "",
    gender: "",
    qual: "",
    level: "",
    responsibilities: [],
    requirements: [],
    benefits: [],
  });

  const [responsibilityInput, setResponsibilityInput] = useState("");
  const [requirementInput, setRequirementInput] = useState("");
  const [benefitInput, setBenefitInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [cate, setCate] = useState(category);

  const addResponsibility = () => {
    if (responsibilityInput.trim() !== "") {
      setData({
        ...data,
        responsibilities: [...data.responsibilities, responsibilityInput],
      });
      setResponsibilityInput("");
    }
  };

  const addRequirement = () => {
    if (requirementInput.trim() !== "") {
      setData({
        ...data,
        requirements: [...data.requirements, requirementInput],
      });
      setRequirementInput("");
    }
  };

  const addBenefit = () => {
    if (benefitInput.trim() !== "") {
      setData({
        ...data,
        benefits: [...data.benefits, benefitInput],
      });
      setBenefitInput("");
    }
  };

  const deleteResponsibility = (index) => {
    const newResponsibilities = data.responsibilities.filter(
      (_, i) => i !== index
    );
    setData({ ...data, responsibilities: newResponsibilities });
  };

  const deleteRequirement = (index) => {
    const newRequirement = data.requirements.filter((_, i) => i !== index);
    setData({ ...data, requirements: newRequirement });
  };

  const deleteBenefit = (index) => {
    const newBenefit = data.benefits.filter((_, i) => i !== index);
    setData({ ...data, benefits: newBenefit });
  };

  //   Sending all these data to backend to store in DB
  const UploadData = async (e) => {
    e.preventDefault();
    const {
      id,
      cName,
      cLoc,
      cPhone,
      position,
      des,
      jobtype,
      category,
      skills,
      salary,
      experience,
      gender,
      qual,
      level,
      responsibilities,
      requirements,
      benefits,
    } = data;

    try {
      setLoading(true);
      const response = await axios.post("/uploadjob", {
        id,
        cName,
        cLoc,
        cPhone,
        position,
        des,
        jobtype,
        category,
        skills,
        salary,
        experience,
        gender,
        qual,
        level,
        responsibilities,
        requirements,
        benefits,
      });
      if (response.data.error) {
        toast.error(response.data.error);
        setLoading(false);
      }
      toast.success(response.data.message);
      setLoading(false);
      setData({});
    } catch (error) {
      console.log(error);
      toast.success("Something went wrong!");
      setLoading(false);
    }
  };

  return (
    <div
      id="top"
      className=" h-[100vh] text-black w-full flex flex-col max-w-screen-2xl pt-24 px-[5%] font-poppins mx-auto"
    >
      <div className="flex flex-col">
        <h1 className="uppercase text-md font-poppins font-medium">
          Post a new Job Vacancy
        </h1>

        <form onSubmit={UploadData} className="flex flex-col gap-6 mt-8 ">
          <div className="flex sm:flex-row flex-col gap-4 justify-between">
            <div className="flex flex-col gap-2 items-center w-full">
              <label className="font-poppins font-medium w-full">
                Position <span className="text-red-600">*</span>
              </label>
              <input
                required
                className="w-full py-2 px-3 border-[1px] border-[#c1c1c1] rounded"
                type="text"
                placeholder="E.g. Frontend Developer"
                value={data.position}
                onChange={(e) => {
                  setData({ ...data, position: e.target.value });
                }}
              />
            </div>
            <div className="flex flex-col gap-2 items-center w-full">
              <label className="font-poppins font-medium w-full">
                Level <span className="text-red-600">*</span>
              </label>
              <select
                required
                className="w-full py-2 px-2 border-[1px] border-[#c1c1c1] rounded"
                value={data.level}
                onChange={(e) => {
                  setData({ ...data, level: e.target.value });
                }}
              >
                <option value="">Select Level</option>
                <option value="Junior Level">Junior Level</option>
                <option value="Intermediate Level">Intermediate Level</option>
                <option value="Senior Level">Senior Level</option>
              </select>
            </div>
          </div>

          <div className="flex sm:flex-row flex-col gap-4 justify-between">
            <div className="flex flex-col gap-2 items-center w-full">
              <label className="font-poppins font-medium w-full">
                Category <span className="text-red-600">*</span>
              </label>
              <select
                className="w-full py-2 px-2 border-[1px] border-[#c1c1c1] rounded"
                value={data.category}
                required
                onChange={(e) => {
                  setData({ ...data, category: e.target.value });
                }}
              >
                <option value="">Select Category</option>
                {cate.map((cat) => (
                  <option value={cat.name}>{cat.name}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2 items-center w-full">
              <label className="font-poppins font-medium w-full">
                Job Type <span className="text-red-600">*</span>
              </label>
              <select
                className="w-full py-2 px-2 border-[1px] border-[#c1c1c1] rounded"
                value={data.jobtype}
                required
                onChange={(e) => {
                  setData({ ...data, jobtype: e.target.value });
                }}
              >
                <option value="">Select Job Type</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
              </select>
            </div>
          </div>

          <div className="flex sm:flex-row flex-col gap-4 justify-between">
            <div className="flex flex-col gap-2 items-center w-full">
              <label className="font-poppins font-medium w-full">Salary</label>
              <select
                className="w-full py-2 px-2 border-[1px] border-[#c1c1c1] rounded"
                value={data.salary}
                onChange={(e) => {
                  setData({ ...data, salary: e.target.value });
                }}
              >
                <option value="">Select Monthly Salary</option>
                <option value="Below $500">Below $500</option>
                <option value="$500-$1000">$500-$1000</option>
                <option value="$1000-$2000">$1000-$2000</option>
                <option value="$2000-$4000">$2000-$4000</option>
                <option value="$4000-$8000">$4000-$8000</option>
                <option value="$8000-$10000">$8000-$10000</option>
                <option value="Above $10000">Above $10000</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 items-center w-full">
              <label className="font-poppins font-medium w-full">
                Experience <span className="text-red-600">*</span>
              </label>
              <select
                required
                className="w-full py-2 px-2 border-[1px] border-[#c1c1c1] rounded"
                value={data.experience}
                onChange={(e) => {
                  setData({ ...data, experience: e.target.value });
                }}
              >
                <option value="">Select experience in years</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="10+">10 +</option>
              </select>
            </div>
          </div>

          <div className="flex sm:flex-row flex-col gap-4 justify-between">
            <div className="flex flex-col gap-2 items-center w-full">
              <label className="font-poppins font-medium w-full">
                Gender <span className="text-red-600">*</span>
              </label>

              <select
                required
                className="w-full py-2 px-2 border-[1px] border-[#c1c1c1] rounded"
                value={data.gender}
                onChange={(e) => {
                  setData({ ...data, gender: e.target.value });
                }}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Both">Both</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 items-center w-full">
              <label className="font-poppins font-medium w-full">
                Qualification <span className="text-red-600">*</span>
              </label>
              <select
                required
                className="w-full py-2 px-2 border-[1px] border-[#c1c1c1] rounded"
                value={data.qual}
                onChange={(e) => {
                  setData({ ...data, qual: e.target.value });
                }}
              >
                <option value="">Select Qualification</option>
                <option value="None">None</option>
                <option value="Diploma">Diploma</option>
                <option value="Bachelor's degree">Bachelor's degree</option>
                <option value="Master's Degrees">Master's Degrees</option>
                <option value="PhD">PhD</option>
                <option value="Others">Others</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2 items-center w-full">
            <label className="font-poppins font-medium w-full">
              Skills Required <span className="text-red-600">*</span>
            </label>

            <input
              required
              className="w-full py-2 px-3 border-[1px] border-[#c1c1c1] rounded"
              type="text"
              placeholder="E.g. HTML, CSS, Js"
              value={data.skills}
              onChange={(e) => {
                setData({ ...data, skills: e.target.value });
              }}
            />
          </div>

          <div className="flex flex-col gap-2 items-center w-full">
            <label className="font-poppins font-semibold w-full uppercase text-md">
              Job Description <span className="text-red-600">*</span>
            </label>

            <textarea
              required
              id="message"
              rows="6"
              class="mt-2 block p-2.5 w-full text-sm text-gray-900  rounded-lg border-[1px] border-[#c1c1c1] "
              value={data.des}
              onChange={(e) => {
                setData({ ...data, des: e.target.value });
              }}
            ></textarea>
          </div>

          {/* Responsibilities */}
          <div className="flex flex-col gap-2 items-center w-full">
            <label className="font-poppins font-semibold w-full uppercase text-md">
              Responsibilities
            </label>

            <ul className="w-full">
              {data.responsibilities &&
                data.responsibilities.map((responsibility, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center border-b py-2"
                  >
                    <span>✔ {responsibility}</span>
                    <div
                      className="bg-red-500 text-white px-2 py-1 rounded cursor-pointer"
                      onClick={() => deleteResponsibility(index)}
                    >
                      Delete
                    </div>
                  </li>
                ))}
            </ul>
            <div className="w-full flex gap-2 items-center">
              <input
                className="w-full p-2 border-[1px] border-[#c1c1c1] rounded"
                type="text"
                id="todo-input"
                placeholder="Click on + button after adding responsibility"
                value={responsibilityInput}
                onChange={(e) => setResponsibilityInput(e.target.value)}
              />
              <div
                className="bg-gray-500 p-2 rounded-lg px-4 sm:font-medium active:scale-95 hover:cursor-pointer text-white hover:bg-gray-700 transition-all ease-in-out duration-300"
                id="add-btn"
                onClick={addResponsibility}
              >
                +
              </div>
            </div>
          </div>
          {/* Requirement */}
          <div className="flex flex-col gap-2 items-center w-full">
            <label className="font-poppins font-semibold w-full uppercase text-md">
              Requirements
            </label>

            <ul className="w-full">
              {data.requirements &&
                data.requirements.map((requirement, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center border-b py-2"
                  >
                    <span>✔ {requirement}</span>
                    <div
                      className="bg-red-500 text-white px-2 py-1 rounded cursor-pointer"
                      onClick={() => deleteRequirement(index)}
                    >
                      Delete
                    </div>
                  </li>
                ))}
            </ul>
            <div className="w-full flex gap-2 items-center">
              <input
                className="w-full p-2 border-[1px] border-[#c1c1c1] rounded"
                type="text"
                id="todo-input"
                placeholder="Click on + button after adding requirement"
                value={requirementInput}
                onChange={(e) => setRequirementInput(e.target.value)}
              />
              <div
                className="bg-gray-500 p-2 rounded-lg px-4 sm:font-medium active:scale-95 hover:cursor-pointer text-white hover:bg-gray-700 transition-all ease-in-out duration-300"
                id="add-btn"
                onClick={addRequirement}
              >
                +
              </div>
            </div>
          </div>

          {/* Benefits */}

          <div className="flex flex-col gap-2 items-center w-full">
            <label className="font-poppins font-semibold w-full uppercase text-md">
              Benefits
            </label>
            <ul className="w-full">
              {data.benefits &&
                data.benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center border-b py-2"
                  >
                    <span>✔ {benefit}</span>
                    <div
                      className="bg-red-500 text-white px-2 py-1 rounded cursor-pointer"
                      onClick={() => deleteBenefit(index)}
                    >
                      Delete
                    </div>
                  </li>
                ))}
            </ul>{" "}
            <div className="w-full flex gap-2 items-center">
              <input
                className="w-full p-2 border-[1px] border-[#c1c1c1] rounded"
                type="text"
                id="todo-input"
                placeholder="Click on + button after adding benefit"
                value={benefitInput}
                onChange={(e) => setBenefitInput(e.target.value)}
              />
              <div
                className="bg-gray-500 p-2 rounded-lg px-4 sm:font-medium active:scale-95 hover:cursor-pointer text-white hover:bg-gray-700 transition-all ease-in-out duration-300"
                id="add-btn"
                onClick={addBenefit}
              >
                +
              </div>
            </div>
          </div>

          <button
            className="mt-3 mb-20 shadow-green-300 shadow-lg bg-green-600 font-medium text-white rounded-full w-1/2 mx-auto hover:cursor-pointer flex items-center hover:bg-green-700 transition-all ease-in-out duration-300"
            type="submit"
          >
            <div className="w-full flex p-3 justify-center gap-4 ">
              <img
                className={`${loading ? "inline-block" : "hidden"}
                w-6 h-6 object-center`}
                src={loader}
                alt=""
              />
              <h1 className={`${loading ? "hidden" : "hidden sm:inline-block"}`}>
                Submit Application
              </h1>
              <h1 className={`${loading ? "hidden" : "inline-block sm:hidden"}`}>
                Submit
              </h1>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
