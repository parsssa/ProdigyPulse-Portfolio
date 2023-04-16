import React from 'react';
import { Element } from 'react-scroll';
import './skillset.css';
import { Skill } from '../../components/index.js';
import {America, Italy, Iran, Telegram,Git,figma,MS,FrontEnd,python,Maven,google,java,JavaFx,translation, content, youtube, react} from '../index.js';

const skillsArray = [
  { img: America, text: 'English' },
  { img: Italy, text: 'Italian' },
  { img: Iran, text: 'Persian' },
  { img: translation, text: 'Content Translation' },
  { img: content, text: 'Content Creation' },
  { img: youtube, text: 'Social Media Management' },
  { img: MS, text: 'MS Office' },
  { img: google, text: 'Google Workspace' },
  { img: figma, text: 'Figma' },
  { img: python, text: 'Python' },
  { img: Git, text: 'Git' },
  { img: react, text: 'React' },
  { img: FrontEnd, text: 'FrontEnd' },
  { img: Telegram, text: 'Telegram API' },
  { img: java, text: 'Java' },
  { img: Maven, text: 'Maven' },
  { img: JavaFx, text: 'JavaFx' },
];

const Skillset = () => {
  return (
    <Element name="skillset">
    <div className='skillset-area'>
      <h1>Skillset</h1>
      <div className='skillset-box'>
        {skillsArray.map((skill, index) => (
          <Skill key={index} img={skill.img} text={skill.text} />
        ))}
      </div>
    </div>
    </Element>
  )
}

export default Skillset;