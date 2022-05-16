import React from "react";
import { Link } from "react-scroll/modules";
//React Fontawesome imports

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
        <div className="container">

    
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style= {{color: "#fff"}}/>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item active">
          <Link smooth= {true} to="home" className="nav-link" href="#">Home <span className="sr-only"></span></Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} to="about me" offset={-110} className="nav-link" href="#">About Me</Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} to="services"  offset={-110} className="nav-link" href="#">Services</Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} to="experience" offset={-110} className="nav-link" href="#">Experience</Link>
        </li>
        
         <li className="nav-item">
          <Link smoooth={true} to="portfoilo" offset={-110} className="nav-link" href="#">Portfoilo</Link>
        </li>

        <li className="nav-item">
          <Link smooth={true} to="contact"  offset={-110}className="nav-link" href="#">Contact</Link>
        </li>
        
         </ul>
  
    </div>
    /</div>
  </nav>
  )
}

export default Navbar
