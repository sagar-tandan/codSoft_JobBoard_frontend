import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Navbar from "./components/Navbar";
import axios from "axios";
import {Toaster} from 'react-hot-toast'
import JobDetails from "./Pages/JobDetails";
import JobSeekerRegister from "./Pages/JobSeekerRegister";

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

function App() {
  return (
  <>
  <Navbar/>
  <Toaster position="bottom-right" toastOptions={{duration: 2000}}/>
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registercompany" element={<Register />} />
      <Route path="/registeruser" element={<JobSeekerRegister />} />
      <Route path="/login" element={<Login />} />
      <Route path="/job/jobdetails/:id" element={<JobDetails />} />
    </Routes>


  </>)
}

export default App;
