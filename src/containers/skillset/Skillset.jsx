import React from 'react';
import './skillset.css';
import { Skill } from '../../components/index.js';
import {Telegram,figma,MS,Front,linkedin,python,Maven,google,java,JavaFx,translation,react} from '../index.js';


const Skillset = () => {
  return (
    <div className='skillset-area'>
      <h1>Skillset</h1>
      <div className='skillset-box'>
        <Skill></Skill>
        <Skill></Skill>
        <Skill></Skill>
        <Skill></Skill>
        <Skill></Skill>
        <Skill></Skill>
        <Skill></Skill>
        <Skill></Skill>
        <Skill></Skill>
        <Skill></Skill>
        <Skill></Skill>
        <Skill></Skill>
      </div>
    </div>
  )
}

export default Skillset