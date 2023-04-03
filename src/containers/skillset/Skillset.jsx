import React from 'react';
import './skillset.css';
import { Skill } from '../../components/index.js';
import {Telegram,Git,figma,MS,FrontEnd,python,Maven,google,java,JavaFx,translation,react} from '../index.js';

const skillsArray = [
  { img: react, text: 'React' },
  { img: Git, text: 'Git' },
  { img: JavaFx, text: 'JavaFx' },
  { img: FrontEnd, text: 'FrontEnd' },
  { img: figma, text: 'Figma' },
  { img: translation, text: 'Translation' },
  { img: google, text: 'Google Workspace' },
  { img: Telegram, text: 'Telegram' },
  { img: Maven, text: 'Maven' },
  { img: java, text: 'Java' },
  { img: python, text: 'Python' },
  { img: MS, text: 'MS' },
];

const Skillset = () => {
  return (
    <div className='skillset-area'>
      <h1>Skillset</h1>
      <div className='skillset-box'>
        {skillsArray.map((skill, index) => (
          <Skill key={index} img={skill.img} text={skill.text} />
        ))}
      </div>
    </div>
  )
}

export default Skillset;