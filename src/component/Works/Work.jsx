import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./work.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { TbArrowRightToArc } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import Footer from '../footer/Footer';
import videos from "../../assests/123.mp4";


const Work = () => {
    let navigate=useNavigate()
    function goto() {
        navigate('/')       
    }
  return (
    <>
        <div className='main'>
          <video autoPlay  muted loop className="background-video">
           <source src={videos} type="video/mp4" />
         </video>
      <div className='Works'>
        
        <Navbar/>
        <div className='Work-container'>
        <button onClick={goto} className="buton">
              <FaArrowLeftLong className="i" />
              Back To Home
            </button>

            <div className='wrk-container'>
          
                <div className='left-container'>
                    <div className='section1'>
                  
                         <img src="https://portfolio-delta-three-51.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbig-blog.284fb120.png&w=640&q=75" alt="" />   
                  <p>I am a recent graduate with a passion for creating visually stunning and user-friendly web experiences. Skilled in HTML, CSS, JavaScript and React JS.I thrive on turning ideas into responsive designs. My projects reflect a commitment to clean code and innovative solutions. Eager to learn and collaborate, I aim to contribute to dynamic development teams. Let’s bring your vision to life!</p> 
                      <div div className='view' >
                        view site
                        <FaArrowRight />
                      </div>
                    </div>
                   
                </div>
                <div className='right-container'>
                 <div className='whole-rgt0'>
                    <div className='rgt-cntnt'>
                        <img src="https://portfolio-delta-three-51.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flist-blog-2.9440d2a4.png&w=384&q=75" alt="" />
                      <div className='rgt-txt'>
                      <h1>Tawam Portfolio</h1>
                       <p>The Tawam portfolio project showcases a modern and responsive design  by using HTML and CSS, & highlighting the unique skills and experiences of the individual.</p>   
                  <div className='rggtt'>
                     <h2>Get in touch</h2>
                      <TbArrowRightToArc                                                                                                                                                                               />
                   </div>  

                        </div>  

                   </div>
                 <div className='rgt-cntnt'>
                        <img src="https://portfolio-delta-three-51.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flist-blog-1.e5eeac33.png&w=384&q=75" alt="" />
                
                    <div className='rgt-txt'>
                      <h1>Banking statement</h1>
                   
                      <p>In Javascript, I choose a Banklist Project and using development best practices, including loop functions for transfer money,received amount cross-browser compability and web accessibility and do multiple transactions.</p> 
                   <div className='rggtt1'>
                     <h2>Get in touch</h2>
                      <TbArrowRightToArc  />
                   </div>
                   </div>
                </div>

                   <div className='rgt-cntnt'>
                        <img src="https://portfolio-delta-three-51.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flist-blog-3.58da036e.png&w=384&q=75" alt="" />
                     <div className='rgt-txt'>
                     <h1> Personal Portfolio</h1>

                      <p>This personal portfolio, built with React, showcases my skills, projects, and professional journey in an interactive and dynamic way.
                         The portfolio is organized into reusable components, promoting maintainability and scalability.The application is styled using CSS modules.The portfolio includes interactive elements, such as hover effects and animations, to engage users and make navigation intuitive.A dedicated contact section, integrated with React, allows visitors to reach out directly through a simple and user-friendly form.
                      </p>
                      <div className='rggtt1'>
                     <h2>Get in touch</h2>
                      <TbArrowRightToArc  />
                   </div> 

                     </div>
                     
                     
                   </div>


                </div>
                   


                </div>
           
               

            </div>
            <Footer/>

        </div>
        </div>

        </div>
       
    </>
  )
}

export default Work