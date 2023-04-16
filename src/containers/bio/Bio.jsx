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
        <p>An IT student, software developer and content creator based in Bologna, Italy. Currently persuing a 3-year bachelor's degree, and also self-taught on creative writing, web-dev and all that good stuff. Oh, and in case you're wondering, yes I do look that handsome most of the time!</p>
        <img src={bioPhoto} alt="Me at my piano" />
      </div>
    </div>
    </Element>
  )
}

export default Bio