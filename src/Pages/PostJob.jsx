import React, { useState } from "react";
import toast from "react-hot-toast";

export default function PostJob() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    resume: "",
    fb: "",
    linkedin: "",
    github: "",
    portfolio: "",
    experience: "",
    responsibilities: [],
    requirements: [],
    benefits: [],
  });

  const [responsibilityInput, setResponsibilityInput] = useState("");
  const [requirementInput, setRequirementInput] = useState("");
  const [benefitInput, setBenefitInput] = useState("");

  const addResponsibility = () => {
    if (responsibilityInput.trim() !== "") {
      setData({
        ...data,
        responsibilities: [...data.responsibilities, responsibilityInput],
      });
      setResponsibilityInput("");
    }
  };

  const addRequiirement = () => {
    if (requirementInput.trim() !== "") {
      setData({
        ...data,
        requirements: [...data.requirements, responsibilityInput],
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

  return (
    <div
      id="top"
      className=" h-[100vh] text-black w-full flex flex-col max-w-screen-2xl pt-24 px-[5%] font-poppins mx-auto"
    >
      <div className="flex flex-col mt-12 ">
        <h1 className="uppercase text-md font-poppins font-medium">
          Post a new Job Vacancy
        </h1>

        <form
          // onSubmit={loginUser}
          className="flex flex-col gap-6 mt-8 "
        >
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
                value={data.name}
                onChange={(e) => {
                  setData({ ...data, name: e.target.value });
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
                value={data.jobtype}
                onChange={(e) => {
                  setData({ ...data, jobtype: e.target.value });
                }}
              >
                <option value="">Select Level</option>
                <option value="">Junior Level</option>
                <option value="">Intermediate Level</option>
                <option value="">Senior Level</option>
              </select>
            </div>
          </div>

          <div className="flex sm:flex-row flex-col gap-4 justify-between">
            <div className="flex flex-col gap-2 items-center w-full">
              <label className="font-poppins font-medium w-full">
                Catagory <span className="text-red-600">*</span>
              </label>
              <select
                className="w-full py-2 px-2 border-[1px] border-[#c1c1c1] rounded"
                value={data.jobtype}
                required
                onChange={(e) => {
                  setData({ ...data, jobtype: e.target.value });
                }}
              >
                <option value="">Select Catagory</option>
                <option value="">Full Time</option>
                <option value="">Part Time</option>
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
                <option value="">Full Time</option>
                <option value="">Part Time</option>
              </select>
            </div>
          </div>

          <div className="flex sm:flex-row flex-col gap-4 justify-between">
            <div className="flex flex-col gap-2 items-center w-full">
              <label className="font-poppins font-medium w-full">Salary</label>
              <select
                className="w-full py-2 px-2 border-[1px] border-[#c1c1c1] rounded"
                value={data.jobtype}
                onChange={(e) => {
                  setData({ ...data, jobtype: e.target.value });
                }}
              >
                <option value="">Select Monthly Salary</option>
                <option value="">Below $500</option>
                <option value="">$500-$1000</option>
                <option value="">$1000-$2000</option>
                <option value="">$2000-$4000</option>
                <option value="">$4000-$8000</option>
                <option value="">$800-$10000</option>
                <option value="">Above $10000</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 items-center w-full">
              <label className="font-poppins font-medium w-full">
                Experience <span className="text-red-600">*</span>
              </label>
              <select
                required
                className="w-full py-2 px-2 border-[1px] border-[#c1c1c1] rounded"
                value={data.jobtype}
                onChange={(e) => {
                  setData({ ...data, jobtype: e.target.value });
                }}
              >
                <option value="">Select experience in years</option>
                <option value="">0</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
                <option value="">7</option>
                <option value="">8</option>
                <option value="">9</option>
                <option value="">10</option>
                <option value="">10 +</option>
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
                value={data.jobtype}
                onChange={(e) => {
                  setData({ ...data, jobtype: e.target.value });
                }}
              >
                <option value="">Select Gender</option>
                <option value="">Male</option>
                <option value="">Female</option>
                <option value="">Both</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 items-center w-full">
              <label className="font-poppins font-medium w-full">
                Qualification <span className="text-red-600">*</span>
              </label>
              <select
                required
                className="w-full py-2 px-2 border-[1px] border-[#c1c1c1] rounded"
                value={data.jobtype}
                onChange={(e) => {
                  setData({ ...data, jobtype: e.target.value });
                }}
              >
                <option value="">Select Qualification</option>
                <option value="">None</option>
                <option value="">Diploma</option>
                <option value="">Bachelor's degree</option>
                <option value="">Master's Degrees</option>
                <option value="">PhD</option>
                <option value="">Others</option>
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
              value={data.location}
              onChange={(e) => {
                setData({ ...data, location: e.target.value });
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
              value={data.experience}
              onChange={(e) => {
                setData({ ...data, experience: e.target.value });
              }}
            ></textarea>
          </div>

          {/* Responsibilities */}
          <div className="flex flex-col gap-2 items-center w-full">
            <label className="font-poppins font-semibold w-full uppercase text-md">
              Responsibilities <span className="text-red-600">*</span>
            </label>

            <ul className="w-full">
              {data.responsibilities.map((responsibility, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b py-2"
                >
                  <span>{responsibility}</span>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => deleteResponsibility(index)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
            <input
              required
              className="w-full p-2 border-[1px] border-[#c1c1c1] rounded"
              type="text"
              id="todo-input"
              placeholder="Add new responsibility"
              value={responsibilityInput}
              onChange={(e) => setResponsibilityInput(e.target.value)}
            />
            <div
              className="mt-2 bg-gray-500 p-2 rounded-full px-4 font-medium active:scale-95 hover:cursor-pointer text-white hover:bg-gray-700 transition-all ease-in-out duration-300"
              id="add-btn"
              onClick={addResponsibility}
            >
              + Add more
            </div>
          </div>
          {/* Requirement */}
          <div className="flex flex-col gap-2 items-center w-full">
            <label className="font-poppins font-semibold w-full uppercase text-md">
              Requirements <span className="text-red-600">*</span>
            </label>

            <ul className="w-full">
              {data.requirements.map((requirement, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b py-2"
                >
                  <span>{requirement}</span>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => deleteRequirement(index)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
            <input
              required
              className="w-full p-2 border-[1px] border-[#c1c1c1] rounded"
              type="text"
              id="todo-input"
              placeholder="Add new requirement"
              value={requirementInput}
              onChange={(e) => setRequirementInput(e.target.value)}
            />
            <div
              className="mt-2 bg-gray-500 p-2 rounded-full px-4 font-medium active:scale-95 hover:cursor-pointer text-white hover:bg-gray-700 transition-all ease-in-out duration-300"
              id="add-btn"
              onClick={addRequiirement}
            >
              + Add more
            </div>
          </div>

          {/* Benefits */}

          <div className="flex flex-col gap-2 items-center w-full">
            <label className="font-poppins font-semibold w-full uppercase text-md">
              Benefits <span className="text-red-600">*</span>
            </label>

            <ul className="w-full">
              {data.benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b py-2"
                >
                  <span>{benefit}</span>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => deleteBenefit(index)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
            <input
              required
              className="w-full p-2 border-[1px] border-[#c1c1c1] rounded"
              type="text"
              id="todo-input"
              placeholder="Add new benefit"
              value={benefitInput}
              onChange={(e) => setBenefitInput(e.target.value)}
            />
            <div
              className="mt-2 bg-gray-500 p-2 rounded-full px-4 font-medium active:scale-95 hover:cursor-pointer text-white hover:bg-gray-700 transition-all ease-in-out duration-300"
              id="add-btn"
              onClick={addBenefit}
            >
              + Add more
            </div>
          </div>

          <button
            className="mt-3 mb-20 shadow-green-300 shadow-lg bg-green-600 font-medium text-white rounded-full w-1/2 mx-auto hover:cursor-pointer flex items-center hover:bg-green-700 transition-all ease-in-out duration-300"
            type="submit"
          >
            <div className="w-full flex p-3 justify-center gap-4 ">
              {/* <img
              className={`
              
                w-6 h-6 object-center`}
              src={loader}
              alt=""
            /> */}
              <h1 className="sm:inline-block hidden">Submit Application</h1>
              <h1 className="inline-block sm:hidden">Submit</h1>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
