import React from 'react';
import './footer.css';
import { Link } from 'react-scroll';
import { TehranLandscape } from '../index.js';

const Footer = () => {
  return (
    <div className='footer-area'>
      <div className='footer-area-image'>
        <img src={TehranLandscape} alt="Lanscape Background for Footer" />
      </div>
      <div className='footer-area-bottom'>
        <p>© Seyed Parsa Bagheri 2023. All rights reserved.
          {"\n"}Get in touch: parsssa13@gmail.com
          {"\n"}Navigation: 
          <Link to="title" smooth={true} duration={1000} className="footer-link"> Home</Link> | 
          <Link to="bio" smooth={true} duration={1000} className="footer-link"> Bio</Link> | 
          <Link to="projects" smooth={true} duration={1000} className="footer-link"> Projects</Link> | 
          <Link to="skillset" smooth={true} duration={1000} className="footer-link"> Skillset</Link> | 
          <Link to="quests" smooth={true} duration={1000} className="footer-link"> Quests</Link> | 
          <Link to="connections" smooth={true} duration={1000} className="footer-link"> Connections</Link>
        </p>
      </div>
    </div>
  )
}

export default Footer;
