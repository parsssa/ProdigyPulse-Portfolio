import React from 'react';
import './footer.css';
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
          {"\n"}Navigation: <a href="#" className="footer-link">Home</a> | <a href="#" className="footer-link">About</a> | <a href="#" className="footer-link">Blog</a> | <a href="#" className="footer-link">Contact</a>
        </p>
      </div>
    </div>
  )
}

export default Footer