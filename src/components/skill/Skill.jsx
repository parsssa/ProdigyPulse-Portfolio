import React from 'react';
import './skill.css';


const Skill = ({img, text}) => {
  return (
    <div className='skill-box'>
      <div className='skill-box-image'>
        <img src={img} alt={text} />
      </div>
      <div className='skill-box-text'><h3>{text}</h3></div>
      </div>
  )
}

export default Skill