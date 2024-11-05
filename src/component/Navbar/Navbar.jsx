import React from 'react'
import "./mynav.css"
import { FaChevronDown } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className='navbar'>
   <div className="nav">
    <h1>port<span>folio</span></h1>
    <input type="checkbox" id='check'/>
    <label htmlFor="check">
    <GiHamburgerMenu />
    </label>
  

  <div className='list'>
    <Link to="/">  <h2>Home<FaChevronDown className='icon' /></h2></Link>
    <Link to="/About">  <h2>About</h2></Link>
    <Link to="/Works">  <h2>Works<FaChevronDown className='icon' /></h2></Link>
    <Link to="/contact">  <h2>Contact</h2></Link>

  </div>
<div className='butn'>
<button>Let's Talk</button>
  <button className='icon-1'><GoArrowUpRight className='move-on' />
  <GoArrowUpRight className='fix' />
  </button>
</div>
   </div>
   </div> 

  )
}

export default Navbar