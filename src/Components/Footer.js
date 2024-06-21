import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div id="foot">
    <div className="footer-wrapper">
      
      <div className="footer-section-two">
      <div className="footer-section-columns">
          
          <span><FaWhatsapp className="icon" /> (99) 98124-2197</span>
          <span><HiOutlineMail className="icon" /> contato@elegemais.com.br</span>
          
          
        </div>
        </div>
        <div className="footer-section-center">
          <div className="footer-section-columns">
            <span>Copyright 2024 © Vincc1 Tecnologia e Inovação LTDA</span>
            <span>Todos os direitos reservados</span>
          </div>
        </div>
        <div className="footer-section-two">
        <div className="footer-section-columns">
          
                   
        
          <span></span>
          <a href="https://elegemais.com.br/"><span>TV. Frederico Leda, 1725</span></a>
          <a href="https://elegemais.com.br/"><span> Cohab - Bacabal/MA</span></a>
          
        </div>
        
        
      </div>
    
    </div>
    </div>
  );
};

export default Footer;