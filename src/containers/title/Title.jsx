import React from 'react';
import './title.css';
import enhancedMathDepImage from '../../assets/enahncedMathDepImage.jpg';
import { Element } from 'react-scroll';


const Title = () => {
  return (
    <Element name="title">
    <div className="container">
      <div className="text-container">
        <h1>ProdigyPulse&lt;/&gt;</h1>
      </div>
      <div className="image-container">
        <img src={enhancedMathDepImage} alt="Title Background Image" />
      </div>
    </div>
    </Element>
  );
}

export default Title;
