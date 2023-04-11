import React from 'react';
import './connections.css';
import { Connection_item } from '../../components';
import { Telegram,LinkedIn,Email } from '../index.js';

const connectionsArray = [
  { img: LinkedIn, text: 'LinkedIn' },
  { img: Email, text: 'Email' },
  { img: Telegram, text: 'Telegram' },
];


const Connections = () => {
  return (
    <div className='connections-area'>
      <h1>Connections</h1>
      <div className='connections-box'>
      {connectionsArray.map((connection, index) => (
          <Connection_item key={index} img={connection.img} text={connection.text} />
        ))}
      </div>
    </div>
  )
}

export default Connections