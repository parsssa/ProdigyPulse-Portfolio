import React from 'react';
import './bio.css';
import bioPhoto from '../../assets/bioPhoto.jpg';
import { Element } from 'react-scroll';


const Bio = () => {
  return (
    <Element name="bio">
    <div className='bio-area'>
      <h1>Parsa Bagheri</h1>
      <div className='bio-box'>
        <p>An IT student, software developer and content creator fluent in multiple languages. Currently based in Bologna, Italy, pursuing a 3-year bachelor's degree. Also self-taught on creative writing, web-dev and all that good stuff. Oh, and in case you're wondering, yes I do look that handsome most of the time!<br/>Find out more about my work background and education from my LinkedIn profile (linked below).<br/><br/>Or just text my Telegram-id if you want to banter</p>
        <img src={bioPhoto} alt="Me at my piano" />
      </div>
    </div>
    </Element>
  )
}

export default Bio