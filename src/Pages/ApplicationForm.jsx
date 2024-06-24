import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { storage } from "../config.jsx";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import axios from "axios";
import toast from "react-hot-toast";
import loader from "../assets/Asset!/loader.gif";
import { Editor } from "@tinymce/tinymce-react";

export default function ApplicationForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(false);

  // Function to Upload images and Pdf files
  async function UploadFiles(folder, file) {
    const storageRef = ref(storage, `${folder}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          console.log("Progress:", progress);
        },
        (error) => {
          reject(error); // Reject promise with error
        },
        async () => {
          // When upload is completed
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            resolve(downloadURL);

            // Resolve promise with downloadURL
          } catch (error) {
            // Reject promise with error if getting downloadURL fails
            reject(error);
          }
        }
      );
    });
  }

  useEffect(() => {
    if (location.state === null) {
      navigate("/login");
    } else {
      setIsLoading(false);
    }
  }, [location.state, navigate]);

  const {
    username,
    emails,
    phones,
    cities,
    countries,
    jobname,
    companyname,
    companyloc,
    jobtype,
    jobid,
    Userimage,
  } = location.state;

  const [data, setData] = useState({
    Cname: username,
    email: emails,
    phone: phones,
    location: cities + "," + " " + countries,
    jobname: jobname,
    Userimage: Userimage,
    resume: "",
    fb: "",
    linkedin: "",
    github: "",
    portfolio: "",
    experience: "",
    cover: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const {
      Cname,
      email,
      phone,
      location,
      jobname,
      Userimage,
      resume,
      fb,
      linkedin,
      github,
      portfolio,
      experience,
      cover,
    } = data;

    const downloadURL = await UploadFiles("Application", resume);
    // console.log("URL:", downloadURL);

    const response = await axios.post("/submitApplication", {
      Cname,
      email,
      phone,
      location,
      jobname,
      Userimage,
      downloadURL,
      fb,
      linkedin,
      github,
      portfolio,
      experience,
      cover,
      jobid,
      companyname,
    });
    toast.success(response.data.message);
    setLoading(false);
  };

  if (isLoading) {
    return null;
  }

  return (
    <div
      id="top"
      className="h-[100vh] text-black w-full flex flex-col max-w-screen-2xl pt-24 px-[5%] font-poppins mx-auto"
    >
      <div className="w-full flex flex-col text-black gap-3">
        <h1 className="text-2xl font-medium font-poppins">{jobname}</h1>
        <h1 className="font-semibold text-[#575757]">
          <span className="text-green-600">{companyname}</span>/ {companyloc}/{" "}
          <span className="text-red-600 uppercase">{jobtype}</span>
        </h1>
      </div>
      <div className="flex flex-col mt-12 ">
        <h1 className="uppercase text-md font-poppins font-medium">
          Submit your application
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-8">
          <div className="flex flex-col gap-2 items-center w-full">
            <label className="font-poppins font-medium w-full">
              Resume/CV <span className="text-red-600">*</span>
            </label>
            <input
              required
              className="w-full block text-lg rounded-lg cursor-pointer text-gray-400 focus:outline-none bg-gray-700 placeholder-gray-400"
              id="large_size"
              type="file"
              accept=".pdf"
              onChange={(e) => {
                setData({ ...data, resume: e.target.files[0] });
              }}
            />
          </div>

          <div className="flex sm:flex-row flex-col gap-4 justify-between">
            <div className="flex flex-col gap-2 items-center w-full">
              <label className="font-poppins font-medium w-full">
                Full Name <span className="text-red-600">*</span>
              </label>
              <input
                required
                className="w-full py-2 px-3 border rounded"
                type="text"
                placeholder="Enter your name"
                value={data.Cname}
                onChange={(e) => {
                  setData({ ...data, Cname: e.target.value });
                }}
              />
            </div>
            <div className="flex flex-col gap-2 items-center w-full">
              <label className="font-poppins font-medium w-full">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                required
                className="w-full py-2 px-3 border rounded"
                type="email"
                placeholder="Enter your email"
                value={data.email}
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="flex sm:flex-row flex-col gap-4 justify-between">
            <div className="flex flex-col gap-2 items-center w-full">
              <label className="font-poppins font-medium w-full">
                Phone <span className="text-red-600">*</span>
              </label>
              <input
                required
                className="w-full py-2 px-3 border rounded"
                type="number"
                placeholder="Enter your number"
                value={data.phone}
                onChange={(e) => {
                  setData({ ...data, phone: e.target.value });
                }}
              />
            </div>
            <div className="flex flex-col gap-2 items-center w-full">
              <label className="font-poppins font-medium w-full">
                Location <span className="text-red-600">*</span>
              </label>
              <input
                required
                className="w-full py-2 px-3 border rounded"
                type="text"
                placeholder="Enter your location"
                value={data.location}
                onChange={(e) => {
                  setData({ ...data, location: e.target.value });
                }}
              />
            </div>
          </div>
          <h1 className="mt-2 font-medium text-lg font-poppins">LINKS</h1>

          <div className="flex sm:flex-row flex-col gap-4 justify-between">
            <div className="flex flex-col gap-2 items-center w-full">
              <label className="font-poppins font-medium w-full">
                Facebook URL
              </label>
              <input
                className="w-full py-2 px-3 border rounded"
                type="text"
                placeholder="Enter your facebook URL"
                value={data.fb}
                onChange={(e) => {
                  setData({ ...data, fb: e.target.value });
                }}
              />
            </div>
            <div className="flex flex-col gap-2 items-center w-full">
              <label className="font-poppins font-medium w-full">
                Linkedin URL
              </label>
              <input
                className="w-full py-2 px-3 border rounded"
                type="text"
                placeholder="Enter your linkedin URL"
                value={data.linkedin}
                onChange={(e) => {
                  setData({ ...data, linkedin: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="flex sm:flex-row flex-col gap-4 justify-between">
            <div className="flex flex-col gap-2 items-center w-full">
              <label className="font-poppins font-medium w-full">
                Github URL
              </label>
              <input
                className="w-full py-2 px-3 border rounded"
                type="text"
                placeholder="Enter your github URL"
                value={data.github}
                onChange={(e) => {
                  setData({ ...data, github: e.target.value });
                }}
              />
            </div>
            <div className="flex flex-col gap-2 items-center w-full">
              <label className="font-poppins font-medium w-full">
                Portfolio URL
              </label>
              <input
                className="w-full py-2 px-3 border rounded"
                type="text"
                placeholder="Enter your portfolio URL"
                value={data.portfolio}
                onChange={(e) => {
                  setData({ ...data, portfolio: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 items-center w-full">
            <label className="font-poppins font-semibold w-full uppercase text-md">
              Share Experiences
            </label>
            <p className="w-full">
              Although it is not a requirement, we would love to know about some
              of the projects you have done. Or, give us short overview on why
              this role speaks to you.
            </p>
            {/* <textarea
              id="message"
              rows="6"
              className="mt-2 block p-2.5 w-full text-gray-900 rounded-lg border"
              value={data.experience}
              onChange={(e) => {
                setData({ ...data, experience: e.target.value });
              }}
            ></textarea> */}

            {/* <Editor
              apiKey="uj8y5173znc52ddnpfkntgutzhsbe4ra21ge6k3htlpxz9bh"
              initialValue={data.experience}
              init={{
                width: 1400,
                height: 500,
                menubar: false,
                plugins: [
                  "searchreplace visualblocks code",
                  "insertdatetime table paste wordcount",
                ],
                toolbar:
                  "undo redo | bold italic | \
            alignleft aligncenter alignright ",
              }}
              onChange={(e) => {
                setData({ ...data, experience: e.target.value });
              }}
            /> */}

            <div className="w-full max-w-8xl mx-auto p-4">
              <Editor
                apiKey="uj8y5173znc52ddnpfkntgutzhsbe4ra21ge6k3htlpxz9bh"
                initialValue={data.experience}
                init={{
                  height: 500,
                  menubar: false,
                  plugins: [
                    "advlist autolink lists link image",
                    "charmap print preview anchor help",
                    "searchreplace visualblocks code",
                    "insertdatetime media table paste wordcount",
                  ],
                  toolbar:
                    "undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help",
                }}
                onChange={(e) => {
                  setData({ ...data, experience: e.target.getContent() });
                }}
                className="w-full"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 items-center w-full">
            <label className="font-poppins font-semibold w-full uppercase text-md">
              Cover Letter
            </label>

            <div className="w-full max-w-8xl mx-auto p-4">
              <Editor
                apiKey="uj8y5173znc52ddnpfkntgutzhsbe4ra21ge6k3htlpxz9bh"
                initialValue={data.cover}
                init={{
                  height: 500,
                  menubar: false,
                  plugins: [
                    "advlist autolink lists link image",
                    "charmap print preview anchor help",
                    "searchreplace visualblocks code",
                    "insertdatetime media table paste wordcount",
                  ],
                  toolbar:
                    "undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help",
                }}
                onChange={(e) => {
                  setData({ ...data, cover: e.target.getContent() });
                }}
                className="w-full"
              />
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
              <h1
                className={`${loading ? "hidden" : "hidden sm:inline-block"}`}
              >
                Submit Application
              </h1>
              <h1
                className={`${loading ? "hidden" : "inline-block sm:hidden"}`}
              >
                Submit
              </h1>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
