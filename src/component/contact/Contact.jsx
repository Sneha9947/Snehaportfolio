import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./contact.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import videos from "../../assests/123.mp4";
import { SiIndeed } from "react-icons/si";
import { GrPhone } from "react-icons/gr";
import { MdEmail, MdOutlineLocationOn } from "react-icons/md";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { TfiGithub } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";

const Contact = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [Message, setMessage] = useState("");

  function sendMsg() {
    const message = `Name: ${Name}, Email: ${Email}, Subject: ${subject}, Message: ${Message}`;
    const phoneNumber = '919567416583';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank'); // Opens the WhatsApp link in a new tab
  }
  let navigate=useNavigate()
  function goto() {
    navigate('/')
  }
  return (
    <>
    <div className="main-contact">
    <video autoPlay  muted loop className="background-video">
        <source src={videos} type="video/mp4" />
      </video>
      <div className="maincontact1">
        <Navbar />
   
        <div className="whlecnt">
        <div className="bb">
     <button onClick={goto} className="buton66">
                <FaArrowLeftLong className="i" />
                Back To Home
              </button>
     </div>
        <div className="bbb1">
        <div className="cnt99">
         
         <div className="detail">
           <h2>Contact Info</h2>
           <h1>Get In Touch</h1>
           <h3>Don’t be afraid man! Just say hello</h3>
         </div>
         <div className="cnt-icon">
           <div className="cnt-icon1">
             <button className="cn"><GrPhone /></button>
             <div className="cn1">
               <h1>Phone</h1>
               <p>9876543210</p>
             </div>
           </div>
           <div className="cnt-icon1">
             <button className="cn"><MdEmail /></button>
             <div className="cn1">
               <h1>Email</h1>
               <p>snehajaya2020@gmail.com</p>
             </div>
           </div>
           <div className="cnt-icon1">
             <button className="cn"><MdOutlineLocationOn /></button>
             <div className="cn1">
               <h1>Address</h1>
               <p>Coimbatore</p>
             </div>
           </div>
         </div>
       </div>
       <div className="cnt9999">
         <div className="cnnt">
           <div className="inputsec">
             <h1>Name</h1>
             <input type="text" placeholder="Name" onChange={(s) => setName(s.target.value)} />
           </div>
           <div className="inputsec">
             <h1>Email</h1>
             <input type="email" placeholder="Email" onChange={(n) => setEmail(n.target.value)} />
           </div>
           <div className="textsec000">
           <h1>Subject</h1>
           <textarea onChange={(e) => setSubject(e.target.value)}></textarea>
           </div>
         <div className="textsec000" >
         <h1>Message</h1>
         <textarea onChange={(h) => setMessage(h.target.value)}></textarea>
         </div>
         
         </div>
         <button className="btn-cnt1" onClick={sendMsg}>Submit Now</button>
       </div>
        </div>
        <div className="i1">
          <div className="in">
            <a href="https://www.instagram.com" className="whole-buton">
              <FaInstagram />
              <h1>Instagram</h1>
            </a>
            <a href="https://www.linkedin.com" className="whole-buton">
              <BsLinkedin />
              <h1>LinkedIn</h1>
            </a>
            <a href="https://github.com/Sneha9947" className="whole-buton">
              <TfiGithub />
              <h1>GitHub</h1>
            </a>
            <a href="https://wa.me/919567416583" className="whole-buton">
              <FaWhatsapp />
              <h1>WhatsApp</h1>
            </a>
            <a href="https://profile.indeed.com/" className="whole-buton">
            <SiIndeed />
              <h1>Indeed</h1>
            </a>

          </div>
          <Footer/>

        </div>

        </div>
     
      
      </div>
    </div>

    </>
  );
};

export default Contact;
