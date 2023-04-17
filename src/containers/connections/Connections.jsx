import React from 'react';
import './connections.css';
import { Connection_item } from '../../components';
import { Telegram,LinkedIn,Email } from '../index.js';
import { Element } from 'react-scroll';


const connectionsArray = [
  { img: LinkedIn, text: 'Parsa Bagheri' , link:'https://www.linkedin.com/in/parsa-bagheri-243419226'},
  { img: Email, text: 'parsssa13@gmail.com' },
  { img: Telegram, text: '@parsssa13' },
];


const Connections = () => {
  return (
    <Element name="connections">
    <div className='connections-area'>
      <h1>Connections</h1>
      <div className='connections-box'>
      {connectionsArray.map((connection, index) => (
          <Connection_item key={index} img={connection.img} text={connection.text} link={connection.link}/>
        ))}
      </div>
    </div>
    </Element>
  )
}

export default Connections