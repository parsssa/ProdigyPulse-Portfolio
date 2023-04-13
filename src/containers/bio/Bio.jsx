import React from 'react';
import './bio.css';
import bioPhoto from '../../assets/bioPhoto.jpg';


const Bio = () => {
  return (
    <div className='bio-area'>
      <h1>Parsa Bagheri</h1>
      <div className='bio-box'>
        <p>An IT student and content creator based in Bologna, Italy. Currently persuing a bachelor's degree, and also self-taught on creative writing, web-dev and all that good stuff. Oh, and in case you're wondering, yes I do look that handsome most of the time!</p>
        <img src={bioPhoto} alt="Me at my piano" />
      </div>
    </div>
  )
}

export default Bio