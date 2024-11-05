import React from "react";
import Navbar from "../Navbar/Navbar";
import videos from "../../assests/123.mp4";
import "./Profile.css";
import { TbArrowRightToArc } from "react-icons/tb";
import logo from "../../assests/download.png";
import { FaInstagram } from "react-icons/fa6";
import { RiBehanceFill } from "react-icons/ri";
import { ImHtmlFive } from "react-icons/im";
import { AiOutlineJavaScript } from "react-icons/ai";
import { RiReactjsFill } from "react-icons/ri";
import { TbNorthStar } from "react-icons/tb";
import { RiWebhookFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
// import image from "../../assests/edu.webp"
import { IoSchool } from "react-icons/io5";
import { GiOpenBook } from "react-icons/gi";
import { TbBrandReactNative } from "react-icons/tb";
import { AiTwotoneHtml5 } from "react-icons/ai";
import { RiCss3Line } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { PiGithubLogoBold } from "react-icons/pi";
import { HiOutlinePhone } from "react-icons/hi";
import { CiLocationArrow1 } from "react-icons/ci";
import { LiaLinkedin } from "react-icons/lia";
import { BsWhatsapp } from "react-icons/bs";
import img from "../../assests/sneha.jpeg"
import { GrFormUpload } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";

const Profile = () => { 
  
  let navigate=useNavigate()
function getout() {
  navigate("/works")
}

function getin() {
  navigate("/contact")
}
  function goto() {
    navigate("/About")
  }
  
  function goin(){
    navigate("/Resume")
  }
  
  
  return (
    <div className="main">
      <video autoPlay muted loop className="background-video">
        <source src={videos} type="video/mp4" />

      </video>
      <div className="maindiv">
        <Navbar />
        <div className="container">
          <div className="bio">
            <div className="content">
              <div className="project-1">
                <div className="prj">
                  <div className="wholeprj">
                    <div className="myimg">
                      <img src={logo} alt="" />
                      </div>
                      <button className="btn">I'm Sneha</button>
                      </div>
                    <div className="bio-icon">
                   <h1>Biography</h1>
                   <img className="threestr" src="https://portfolio-delta-three-51.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fall-project-stars.4ac25c8e.png&w=96&q=75
                 " alt="" />
               </div>
           </div>

        <div className="prj-1">
          <div className="contact12">
              <div className="ct1">
                  <h2>My Contact</h2>
                  <img className="str" src="https://portfolio-delta-three-51.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fall-blog-card-star.df75554c.png&w=48&q=75" alt="" />
               </div>
               <div className="si11">
                <div className="A">
              <span>
              <HiOutlinePhone className="iph"/>
            </span>                
          <h1>Phone</h1>
                </div>
                <div className="A">
                <span> 
                <CiLocationArrow1 className="iph"/>
                </span>
                <h1>Email</h1>
                </div>
                <div className="A">
                  <span>
                  <LiaLinkedin className="iph" />
                  </span>
                  <h1>Linkedin</h1>
                </div>
                <div className="A">
                  <span>
                  <BsWhatsapp className="iph" />
                  </span>
                  <h1>Whatsapp</h1>
                </div>


               </div>
          <div className="g1">
            <h2>Get In Touch</h2>
            <TbArrowRightToArc onClick={getin} className="gi" />

          </div>
          </div>
      
        </div>
          </div>
              <div className="project-2">
                <div className="minprj">
                  <div className="pi">
                 <div className="r">
                 <button className="but1">
                        <RiWebhookFill className="ic1" />
                      </button>
                 </div>
                    <div className="i1">
                       <h1 title="">Hi ,I am</h1>
                    <h2>Frontend Developer</h2>
                  
                    </div>
                    {/* <div className="j1">
                   <img src="https://portfolio-delta-three-51.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftitle-card-shape.a522d13c.png&w=64&q=75" alt="" />
                   <TbArrowRightToArc className="arrow" />
                   </div> */}
                  </div>
                  <div className="pi">
                    <div className="icon1">
                      <button className="but">
                        <FaInstagram className="ic1" />
                      </button>
                      <button className="but">
                        <RiBehanceFill className="ic1" />
                      </button>
                    </div>
                    <div className="pi1">
                    <button className="but">
                      <FaGithub className="ic1" /> 
                      </button>
                      <button className="but">
                      <BsLinkedin className="ic1"/>
                      </button>
                    </div>
                    {/* <div className="icon2">
                      <h1>profile</h1>
                      <TbArrowRightToArc className="arrow" />
                    </div> */}
                  </div>
                </div>
                <div className="minprj-1">
                  <div className="education">
                    <div className="eds">
                    <h1>My Education: </h1>
                    </div>
                    <div className="clg">

                    <ul><li>Bachelor Degree in Banking and Insurance</li></ul> 

                    </div>
                    <div className="clg11">
                    <ul><li>Tally ERP9(Begginer)</li></ul>    
                     <ul><li>Front End Developer</li></ul>
                     {/* <img className="web" src="https://portfolio-delta-three-51.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservice-2.19b5d4b0.png&w=64&q=75" alt="" /> */}
                     </div>
                     <div className="eds1">
                      <h1>Certifications:</h1>
                     <ul><li>Responsive Web Design</li></ul>  
                     <ul><li>Front End Developer</li></ul>  
                     <ul><li>Hacker Rank</li></ul>  
  

                     </div>
                  </div>
                  
                  <div className="j">
                  <h1>Things I’m good at</h1>
                  <img src="https://portfolio-delta-three-51.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservice-thum.0e91204a.png&w=64&q=75" alt="" />

                  </div>
                  <div className="d">
                  <h2>All Details</h2>
                  <TbArrowRightToArc className="di" />

                  </div>
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="bottom-1">
                <div className="botm">
                  <div className="s1">
                  <h2 className="ill">Skills</h2>
                  <div className="mar">
                  <marquee behavior="" direction="" loop scrollamount="3.0">
                     <div className="u">
                     <h2>Html</h2>
                      <h2>css</h2>
                      <h2>javaScript</h2>
                      <h2>React</h2>
                      <h2>GitHub</h2>
                      <h2>Html</h2>
                      <h2>css</h2>
                      <h2>javaScript</h2>
                      <h2>React</h2>
                      <h2>GitHub</h2>
                      <h2>Html</h2>
                      <h2>css</h2>
                      <h2>javaScript</h2>
                      <h2>React</h2>
                      <h2>GitHub</h2>
                    
                     </div>
                     
                    </marquee>
                    
                    <marquee behavior="" direction="right" scrollamount="2.5" loop>
                   <div className="u">
                   <PiGithubLogoBold className="h5"/>
                    <FaReact className="h4"/>
                    <IoLogoJavascript  className="h3"/>
                    <RiCss3Line className="h2" />

                    <AiTwotoneHtml5 className="h1" />
                   <PiGithubLogoBold className="h5"/>
                    <FaReact className="h4"/>
                    <IoLogoJavascript  className="h3"/>
                    <RiCss3Line className="h2" />
                    <AiTwotoneHtml5 className="h1" />
                    <PiGithubLogoBold className="h5"/>
                  <IoLogoJavascript  className="h3"/>
                  <RiCss3Line className="h2" />
                  <AiTwotoneHtml5 className="h1" />     
                    <PiGithubLogoBold className="h5"/>
                    <FaReact className="h4"/>
                    <IoLogoJavascript  className="h3"/>
                    <RiCss3Line className="h2" />

                    <AiTwotoneHtml5 className="h1" />

                    <PiGithubLogoBold className="h5"/>
                    <FaReact className="h4"/>
                    <IoLogoJavascript  className="h3"/>
                    <RiCss3Line className="h2" />
                    <AiTwotoneHtml5 className="h1" />
                    <PiGithubLogoBold className="h5"/>
                    <FaReact className="h4"/>
                    <IoLogoJavascript  className="h3"/>
                    <RiCss3Line className="h2" />

                   <AiTwotoneHtml5 className="h1" />

                   </div>
                      
                    </marquee>  
                  </div>
                  
                  </div>

                </div>
                <div className="botm-1">
                  <div className="bot">
                      <div className="bot1">
                          <h1>My Certificates</h1>
                          <img className="gs" src="https://portfolio-delta-three-51.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fget-in-touch-shape.e7da51ae.png&w=32&q=75" alt="" />
                      </div>
                      <div className="wo">
                        <img className="wo1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTphImnhAh5YWxQNizT-pUJpCphULhbfb9qvg&s" alt="" />
                      </div>
                      <div className="GT">
                        <h2>Get In Touch</h2>
                        <TbArrowRightToArc className="d4" />

                      </div>
                  </div>



                </div>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="pr-1">
              <div className="pro">
                <marquee behavior="" direction="left to right" scrollamount="2.5" loop>
                    
                  
                 <div className="scri">
                 <div className="marquee">
                 <h1>
                    Latest
                   
                  </h1>
                  <TbNorthStar className="jaya" />
                  <h1>Projects &  Works</h1>
                 </div>
                 <div className="marquee">
                 <h1>
                    Latest
                   
                  </h1>
                  <TbNorthStar className="jaya" />
                  <h1>Projects & Works</h1>
                 </div> 
                 <div className="marquee">
                 <h1>
                    Latest  
                  </h1>
                  <TbNorthStar className="jaya" />
                  <h1>Projects & Works</h1>
                 </div>
                  <div className="marquee">
                 <h1>
                    Latest
                   
                  </h1>
                  <TbNorthStar className="jaya" />
                  <h1>Projects & Works</h1>
                 </div>
                 <div className="marquee">
                 <h1>
                    Latest
                   
                  </h1>
                  <TbNorthStar className="jaya" />
                  <h1>Projects & Works</h1>
                 </div>       

                 </div>
                </marquee>
              </div>
            </div>
            <div className="pr-2">
              <div className="part">
              {/* <h1>Profession</h1> */}

              <img className="part-img" src={img} alt="" />
                <div className="part1">
                <p className="intro">I am a recent graduate with a passion for creating visually stunning and user-friendly web experiences. Skilled in HTML, CSS, JavaScript and React JS.I thrive on turning ideas into responsive designs. My projects reflect a commitment to clean code and innovative solutions. Eager to learn and collaborate, I aim to contribute to dynamic development teams. Let’s bring your vision to life!</p>
                
                </div>
                
                <div className="botom-part">
                <button className="resume">
                  Resume
                <GrFormUpload onClick={goin} className="resume-buton"/>
                </button>
                <img className="botom-img" src="https://portfolio-delta-three-51.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgroup-4.a5f28ae4.png&w=48&q=75" alt="" />
              </div>

                </div>              

             





            </div>
            <div className="pr-3">
              <div className="latest-projects">
                <div className="mypr">
                  <div className="lt">
                  <h1>See My </h1>
                  <h1  className="l">Latest Projects</h1>
                  </div>
               
                 <img className="threestr" src="https://portfolio-delta-three-51.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fall-project-stars.4ac25c8e.png&w=96&q=75" alt="" />
                </div>
                 <div className="ig">
                  <img className="o" src="https://portfolio-delta-three-51.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fall-project-image.96a93fbc.png&w=256&q=75" alt="" />
                 </div>
                 <div className="ar">
                 <h2>All Projects</h2>    
                    <TbArrowRightToArc onClick={getout} className="rui" />

                 </div>
                <div>

                </div>
                <div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
                   <Footer/>
      </div>
    </div>

    
  );
};

export default Profile;
