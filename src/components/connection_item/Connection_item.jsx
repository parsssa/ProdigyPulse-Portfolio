import React from 'react';
import './connection_item.css';


const Connection_item = ({img, text, link}) => {
  return (
    <div className='connection_item-box'>
      <div className='connection_item-box-image'>
        <img src={img} alt={text} />
      </div>
      <div className='connection_item-box-text'><a  className='connection_item-link' href={link} target="_blank" rel="noopener noreferrer"><p>{text}</p></a></div>
      </div>
  )
}

export default Connection_item