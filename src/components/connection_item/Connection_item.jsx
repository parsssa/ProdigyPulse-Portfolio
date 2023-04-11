import React from 'react';
import './connection_item.css';


const Connection_item = ({img, text}) => {
  return (
    <div className='connection_item-box'>
      <div className='connection_item-box-image'>
        <img src={img} alt={text} />
      </div>
      <div className='connection_item-box-text'><h3>{text}</h3></div>
      </div>
  )
}

export default Connection_item