/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import logo from "../Assets/VINCC1-COR-PNG.png";
import { Link } from "react-scroll";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


function Navbar () {
  const [nav, setnav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
        setnav(true);
    }
    else{
        setnav(false);
    }
  }
  window.addEventListener('scroll',changeBackground);

  
  
  return (
    <nav className={nav ? "nav active" :"nav"}>
        <Link to='main' className='logo' smooth={true} duration={1000}>
            <img src={logo} alt=''/>
        </Link>
        <input className='menu-btn' type="checkbox" id='menu-btn'/>
        <label className="menu-icon" for="menu-btn">
            <span className="nav-icon"></span>
        </label>     
        <ul className="menu">
            <li><Link to='main' smooth={true} duration={1000} >Home</Link></li>
            <li><Link to='features' smooth={true} duration={1000}>Projetos</Link></li>
            <li><Link to='presentaion' smooth={true} duration={1000}>Contato</Link></li>
            <li><Link to='about' smooth={true} duration={1000}>Sobre</Link></li>
                       
        </ul>
        <div className="footer-icons" id="footer-icons">
        
         <a href="https://www.instagram.com/vincc1tic" target="_blank" rel="noreferrer"><FaInstagram /></a>
         <a href="https://wa.me/559981242197" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
         </div>
    </nav>
  );
};

export default Navbar;