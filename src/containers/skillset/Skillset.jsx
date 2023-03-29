import React from 'react';
import './skillset.css';
import {Telegram,figma,MS,Front,linkedin,python,Maven,google,java,JavaFx,translation,react} from '../index.js';


const Skillset = () => {
  return (
    <div className='skillset-area'>
      <h1>Parsa Bagheri</h1>
      <div className='skillset-box'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id enim tempor, pulvinar enim in, mollis turpis. Integer sagittis ante sed ante volutpat hendrerit. Fusce convallis lorem vel arcu aliquet, eget accumsan metus vehicula. Quisque auctor sagittis arcu, vel eleifend mi fringilla in. Sed vitae semper nulla. Aliquam sit amet
          fringilla, tortor ut ullamcorper hendrerit, lacus risus aliquet risus, a luctus eros justo et mauris.</p>
        <img src={Telegram} alt="Me at my piano" />
      </div>
    </div>
  )
}

export default Skillset