import React from 'react';
import './title.css';
import enhancedMathDepImage from '../../assets/enahncedMathDepImage.jpg';

const Title = () => {
  return (
    <div className="container">
      <div className="text-container">
        <h1>ProdigyPulse&lt;/&gt;</h1>
      </div>
      <div className="image-container">
        <img src={enhancedMathDepImage} alt="Title Background Image" />
      </div>
    </div>
  );
}

export default Title;
