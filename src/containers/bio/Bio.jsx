import React from 'react';
import './bio.css';
import bioPhoto from '../../assets/bioPhoto.jpg';


const Bio = () => {
  return (
    <div className='bio-area'>
      <h1>Parsa Bagheri</h1>
      <div className='bio-box'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id enim tempor, pulvinar enim in, mollis turpis. Integer sagittis ante sed ante volutpat hendrerit. Fusce convallis lorem vel arcu aliquet, eget accumsan metus vehicula. Quisque auctor sagittis arcu, vel eleifend mi fringilla in. Sed vitae semper nulla. Aliquam sit amet
          fringilla, tortor ut ullamcorper hendrerit, lacus risus aliquet risus, a luctus eros justo et mauris.</p>
        <img src={bioPhoto} alt="Me at my piano" />
      </div>
    </div>
  )
}

export default Bio