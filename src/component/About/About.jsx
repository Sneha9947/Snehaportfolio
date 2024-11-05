import React from "react";
import "./About.css";
import Navbar from "../Navbar/Navbar";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { HiOutlineArrowRight } from "react-icons/hi";
import { BsArrowDownCircle } from "react-icons/bs";
import { IoSchoolOutline } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { RiBehanceFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import img1 from "../../assests/IMG20241013144225 (3).jpg";
import Footer from "../footer/Footer";
import videos from "../../assests/123.mp4";

const About = () => {
  let navigate=useNavigate()
  function goto() {
    navigate("/")
  }
  return (
    <>
    <div className="main">
    <video autoPlay  muted loop className="background-video">
        <source src={videos} type="video/mp4" />
      </video>
    <div className="About">
        <Navbar />
        <div className="about-sec">
          <div className="c3">
            <div className="abt">

              
              <button onClick={goto}>
                <FaArrowLeftLong className="i" />
                Back To Home
              </button>
              <div className="abt1">
                <div className="ty1">
                  <div className="ty">
                    <h1>Hello,</h1>
                    <h1>I'm Sneha</h1>
                    <h1>
                      Front End<span>  Developer</span>
                    </h1>
                  </div>
                  <div className="abt-content">
                    <img
                      className="circle"
                      src="https://portfolio-delta-three-51.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshape-11.792020be.png&w=128&q=75"
                      alt=""
                    />
                  </div>
                </div>
                <div className="ty2">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum explicabo officia quia magni iste dolorem eum
                    minus, vero nesciunt aliquid. Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Consequuntur officia tempore
                    accusamus vero quod expedita aut soluta quo, eius incidunt!
                  </p>
                </div>
              </div>
              <div className="abt2">
                <div className="prsnl">
                  <h1>Fresher</h1>
                  <BsArrowDownCircle className="dwn" />
                </div>
                <div className="secnd-box">
                  <div className="edu123">
                  <MdOutlineKeyboardDoubleArrowRight className="outline" />
                 <div className="edu333">
                 <h1><span>2020-23</span> //  Bachelor Degree in Banking & Insurance</h1>
                  <div className="edu1234">
                  <IoSchoolOutline  className="outline"/>
                  <h1>Hindustan college of arts and science</h1>
                  </div>
                 </div>
                  </div>
                  <div className="edu123">
                  <MdOutlineKeyboardDoubleArrowRight className="outline" />
                 <div className="edu333">
                 <h1><span>2020-23</span> //  Commerce arts</h1>
                  <div className="edu1234">
                  <IoSchoolOutline  className="outline"/>
                  <h1>G.V.H.SS MALAMPUZHA</h1>
                   <img className="roun" src="https://portfolio-delta-three-51.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fall-service-shape.fc0d4827.png&w=96&q=75" alt="" />   
                  </div>
                 </div>
                  </div>
                   
                </div>
              </div>
            </div>
            <div className="about-sec1">
              <div className="abt-part">
                <img src={img1} alt="" />
              </div>
              <div className="abt-part1">
                <div className="sk0">
                  <div className="skil-head">
                  <h1> MY SKILLS</h1>
                  <img className="threestr" src="https://portfolio-delta-three-51.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fall-project-stars.4ac25c8e.png&w=96&q=75" alt="" />
                  </div>
                <ul><li><h2>HTML</h2></li></ul> 
                <ul><li><h2>CSS</h2></li> </ul>
                <ul><li><h2>JAVASCRIPT</h2></li> </ul>   
                <ul><li><h2>REACT JS</h2></li></ul>  
                <ul><li><h2>GIT</h2></li></ul>
                <ul><li><h2>NETLIFY</h2></li></ul>

                <img src="https://portfolio-delta-three-51.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fall-service-shape.fc0d4827.png&w=96&q=75" alt="" />

                {/* <div className="rnd">
                </div> */}
                </div>
               

              </div>
            </div>
          </div>
          <div className="whole-div111">
          <div className="icondiv">
            <div className="icdiv1">
              <div className="img-container">
              <BsInstagram  className="insta-icon"/>
              <img className="circle-img" src="https://portfolio-delta-three-51.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhover-icon.cbcce62c.png&w=128&q=75" alt="" />

              </div>
              <div className="img-container">
              <FaLinkedinIn  className="insta-icon"/>
              <img className="circle-img" src="https://portfolio-delta-three-51.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhover-icon.cbcce62c.png&w=128&q=75" alt="" />

              </div>
              <div className="img-container">
              <FaGithubSquare  className="insta-icon" />

              <img className="circle-img" src="https://portfolio-delta-three-51.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhover-icon.cbcce62c.png&w=128&q=75" alt="" />

              </div>
              <div className="img-container">
              <RiBehanceFill className="insta-icon" />
              <img className="circle-img" src="https://portfolio-delta-three-51.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhover-icon.cbcce62c.png&w=128&q=75" alt="" />
              </div>
            </div>
          </div>
          <div className="abt3">
            <div className="small-box">
              <h1>My Project Works...!</h1>
              <img className="smt-img" src="https://portfolio-delta-three-51.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshape-12.aded424d.png&w=64&q=75" alt="" />
            </div>
            <div className="smll">
              <h2>Get In Touch</h2>
              <HiOutlineArrowRight className="rgt-arrw" />
            </div>
          </div>
          </div>
      <div className="ft">
      <Footer/>
      </div>
          
        </div>
      </div>
    </div>
                  
          
    </>
  );
};

export default About;
