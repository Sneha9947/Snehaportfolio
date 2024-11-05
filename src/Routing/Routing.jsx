import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import About from "../component/About/About";
import Profile from "../component/ProfileSec/Profile";
import Contact from "../component/contact/Contact";
import Work from "../component/Works/Work";
import Resume from "../component/resume/Resume";
import Footer from "../component/footer/Footer";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/works" element={<Work/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/Resume" element={<Resume/>} />
          <Route path="/Footer" element={<Footer/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
