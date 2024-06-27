import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import "./App.css";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Navbar from "./components/Navbar";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import JobDetails from "./Pages/JobDetails";
import JobSeekerRegister from "./Pages/JobSeekerRegister";
import CompanyPage from "./Pages/CompanyPage";
import ApplicationForm from "./Pages/ApplicationForm";
import PostJob from "./Pages/PostJob";

import { useCookies } from "react-cookie";
import Start from "./Pages/Start";
import JobApplicationPage from "./Pages/JobApplicationPage";
import ApplicationDetails from "./Pages/ApplicationDetails";
import AllJobs from "./Pages/AllJobs";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  const [data, setData] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  // // console.log(data.type)

  //to store all the jobs
  const [allJobs, setAllJobs] = useState([]);

  useEffect(() => {
    const verifyCookie = async () => {
      setLoading(true);
      if (!cookies.token) {
        // navigate("/");
        // console.log("cookie not found")
        setLoading(false);
      }
      const { data } = await axios.post(
        "http://localhost:8000/",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setData(user);
      setLoading(false);
      return status ? "" : removeCookie("token");
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  // useEffect(() => {
  //   if (data) {
  //     console.log(data);
  //     // setData(userName);
  //   }
  // }, [data]);

  useEffect(() => {
    const fetchAllJobs = async () => {
      const jobs = await axios.get("/getAllJobs");
      let reversed = [];
      for (let i = jobs.data.findJobs.length - 1; i >= 0; i--) {
        reversed.push(jobs.data.findJobs[i]);
      }
      setAllJobs(reversed);
      // console.log(allJobs)
    };
    fetchAllJobs();
  }, []);

  return (
    <>
      {/* <Navbar setData={setData}/> */}
      <Navbar/>
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={loading ? <Start /> : <Home data={data} />} />
        <Route path="/registercompany" element={<Register />} />
        <Route path="/registeruser" element={<JobSeekerRegister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/job/jobdetails/:id" element={<JobDetails />} />
        <Route path="/job" element={<AllJobs jobs={allJobs} datas={data} />} />

        <Route
          path="/job/jobdetails/:ids/apply"
          element={<ApplicationForm />}
        />
        <Route
          path="/postjob"
          element={
            data && data.type == "company" ? (
              <PostJob datas={data} />
            ) : (
              <Login />
            )
          }
        />

        <Route
          path="/:jobname"
          element={
            data && data.type == "company" ? <JobApplicationPage /> : <Login />
          }
        />

        <Route
          path="/:jobname/:applicatioid"
          element={
            data && data.type == "company" ? (
              <ApplicationDetails datas={data} />
            ) : (
              <Login />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
