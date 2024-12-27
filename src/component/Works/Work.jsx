import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./work.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { TbArrowRightToArc } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import Footer from '../footer/Footer';
import videos from "../../assests/123.mp4";
import screetshot from "../../assests/Screenshot 2024-12-27 120038.png";
import dresshop from "../../assests/dressshop.png";
import bank from "../../assests/bankimg.png";
import tawam from "../../assests/tawam.png";
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
                  
                         <img className='me' src="https://portfolio-delta-three-51.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbig-blog.284fb120.png&w=640&q=75" alt="" />   
                  <p>I am a recent graduate with a passion for creating visually stunning and user-friendly web experiences. Skilled in HTML, CSS, JavaScript and React JS.I thrive on turning ideas into responsive designs. My projects reflect a commitment to clean code and innovative solutions. Eager to learn and collaborate, I aim to contribute to dynamic development teams. Let’s bring your vision to life! I enjoy analyzing situations and coming up with creative solutions to deliver quality results and I collaborate well with others, leveraging teamwork to achieve common goals and contribute to a positive work environment, these are my strengths.</p> 
                      <div div className='view' >
                        view site
                        <FaArrowRight />
                      </div>
                    </div>
                   
                </div>
                <div className='right-container'>
                 <div className='whole-rgt0'>
                   <div className='rgt-cntnt'>
                        <img src={tawam} alt="" />
                      <div className='rgt-txt'>
                      <h1>Tawam Portfolio</h1>
                       <p>The Tawam portfolio project showcases a modern and responsive design  by using HTML and CSS, & highlighting the unique skills and experiences of the individual.</p>   
                  <div className='rggtt'>
                     <h2>View Site</h2>
                     <a href="https://sneha9947.netlify.app/"> <TbArrowRightToArc /></a>
                   </div>  
                 </div>  

                   </div>
            
                   <div className='rgt-cntnt'>
                        <img src={bank} alt="" />
                
                    <div className='rgt-txt'>
                      <h1>Banking statement</h1>
                   
                      <p>In Javascript, I choose a Banklist Project and using development best practices, including loop functions for transfer money,received amount cross-browser compability and web accessibility and do multiple transactions.</p> 
                   <div className='rggtt1'>
                     <h2>View Site</h2>
                 <a href="https://banklist-three.vercel.app/">  <TbArrowRightToArc  /></a>   
                   </div>
                   </div>
                </div>


                   <div className='rgt-cntnt'>
                        <img  src={screetshot} alt="" />
                      <div className='rgt-txt'>
                      <h1>Electronic e-commerce</h1>
                       <p>A React-Redux-based electronic website offering a seamless, dynamic shopping experience. It features real-time product updates, user authentication, and a responsive interface, allowing customers to browse, filter, and purchase the latest electronic gadgets efficiently. With state management powered by Redux, the site ensures smooth data handling and consistent UI interactions across all devices.</p>   
                  <div className='rggtt'>
                     <h2>View Site</h2>
                      <TbArrowRightToArc/>
                   </div>  

                        </div>  

                   </div>
                                   
                <div className='rgt-cntnt'>
                        <img src={dresshop} alt="" />
                     <div className='rgt-txt'>
                     <h1> Dress shop e-commerce</h1>

                      <p>A Redux-based online dress store that offers an intuitive and stylish shopping experience. With advanced filter options for size, color, and style, customers can easily find their perfect outfit. The sleek, modern design ensures a smooth browsing experience, while Redux manages the site's state for fast, consistent updates and seamless user interactions.        </p>
                      <div className='rggtt1'>
                     <h2>View Site</h2>
                 <a href="https://sneha9947.netlify.app/">  <TbArrowRightToArc   /></a>   
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