import React from 'react';
import './projects.css';
import projectPhoto from '../../assets/botProject1.png';


const Projects = () => {
  return (
    <div className='projects-area'>
      <h1>Projects</h1>
      <div className='projects-box'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id enim tempor, pulvinar enim in, mollis turpis. Integer sagittis ante sed ante volutpat hendrerit. Fusce convallis lorem vel arcu aliquet, eget accumsan metus vehicula. Quisque auctor sagittis arcu, vel eleifend mi fringilla in. Sed vitae semper nulla. Aliquam sit amet
          fringilla, tortor ut ullamcorper hendrerit, lacus risus aliquet risus, a luctus eros justo et mauris.</p>
        <img src={projectPhoto} alt="project" />
      </div>
    </div>
  )
}

export default Projects