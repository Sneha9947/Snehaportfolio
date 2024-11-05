import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'
import { FaChevronDown } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='footer-container'>
          <div className='footer-section'>
          <Link to="/">  <h2>Home</h2></Link>
          <Link to="/About">  <h2>About</h2></Link>
          <Link to="/Works">  <h2>Works</h2></Link>
          <Link to="/contact">  <h2>Contact</h2></Link>
          </div>

        </div>
    </div>
    
    </>
  )
}

export default Footer