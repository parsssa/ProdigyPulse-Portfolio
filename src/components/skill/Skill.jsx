import React from 'react';
import './skill.css';
import {Telegram} from '../index.js';


const Skill = () => {
  return (
    <div className='skill-box'>
      <div className='skill-box-image'>
        <img src={Telegram} alt="" />
      </div>
      <div className='skill-box-text'><h3>Skill</h3></div>
      </div>
  )
}

export default Skill