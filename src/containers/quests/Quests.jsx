import React from 'react';
import './quests.css';
import questPhoto from '../../assets/figmaDesign.png';


const Quests = () => {
  return (
    <div className='quests-area'>
      <h1>Quests</h1>
      <div className='quests-box'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id enim tempor, pulvinar enim in, mollis turpis. Integer sagittis ante sed ante volutpat hendrerit. Fusce convallis lorem vel arcu aliquet, eget accumsan metus vehicula. Quisque auctor sagittis arcu, vel eleifend mi fringilla in. Sed vitae semper nulla. Aliquam sit amet
          fringilla, tortor ut ullamcorper hendrerit, lacus risus aliquet risus, a luctus eros justo et mauris.</p>
        <img src={questPhoto} alt="current quest" />
      </div>
    </div>
  )
}

export default Quests