import React from 'react';
import { useState } from 'react';
import './projects.css';
import botPhoto1 from '../../assets/botProject1.png';
import botPhoto2 from '../../assets/botProject2.png';
import IcyHot from '../../assets/IcyHotContent.png'
import IcyHot2 from '../../assets/IcyHotContent2.png'
import AnalisiBulgari from '../../assets/AnalisiBulgari.png'
import webDevPic from '../../assets/figmaDesign.png'
import BaghdadAI from '../../assets/Baghdad-AI.png'
import { Element } from 'react-scroll';


// an array that contains img+description for each project
const data = [
  {
    title: "Baghdad-AI",
    image: BaghdadAI,
    description: "In our research project, Baghdad-AI, led by students from the University of Bologna - Seyed Parsa Bagheri, Massimo Andrés Camacho, and Jishan Rahman - we've been diving into the exciting world of artificial intelligence (AI) in archaeology. Inspired by the earlier work of Professors Marco Roccetti and Nicolò Marchetti, who showed how neural networks could spot archaeological sites in the Mesopotamian plain, we focused on tweaking our model. Our recent efforts involved spicing up CORONA images and adding Negative Sampling to make our model sharper. The result? A cool blend of AI and traditional archaeology methods, bringing us closer to nailing archaeological site detection with a fresh and effective approach.",
  },
  {
    title: "The Blog",
    image: webDevPic,
    description: "ProdigyPulse: a blue-colored slice of the Internet for ME, me and... ME. You are welcome too, of course. The tools used for the creation of this website were Figma (for design) and React js (for implementation). Feel free to reach out if you are interested in starting your own web-development journey, I'd be glad to help.",
  },
  {
    title: "Telegram FIRE NEWS BOT 24",
    image: botPhoto2,
    description: "FIRE NEWS 24 is a Telegram bot that delivers --you guessed it-- NEWS feeds to users based on their category and source preferences. This project was entirely developed by Me (Parsa Bagheri), Massimo Andres, and Francesco Borcassa in 2022 with the Telegram Java API. How is it useful to anyone? I don't know, ask Massimo and Francesco."
  },
  {
    title: "Telegram FIRE NEWS BOT 24",
    image: botPhoto1,
    description: "The Admins of FIRE NEWS 24 can control the settings of the bot and user activity from a dedicated GUI panel, developed in JavaFX. Coding this gave me chronic depression.",
  },
  {
    title: "Content for Mr. IcyHot llc.",
    image: IcyHot,
    description: "Mr. IcyHot llc is a local HVAC copmany operating in Gaithersburg Maryland. This project involved writing the information for their website pages, detailing out their customer contracts, and answering cutomers on social media platforms such as Yelp",
  },
  {
    title: "Content for Mr. IcyHot llc.",
    image: IcyHot2,
    description: "After extensive study of the DMV area HVAC industry and rival contractors' approach to marketing, I planned out a short-term Company Strategy for Mr. Icy Hot llc. This was a 4 step guide on how to gain local recognition in one month, launching a website and tactically posting on a picked handful of social media platforms",
  },
  {
    title: "Bulgari Corporate Strategy Analysis",
    image: AnalisiBulgari,
    description: "A 2023 analysis of the luxury Italian brand Bulgari Spa through the lenses of Corporate Strategy, carried out in collaboration with my classmate Matilde Borghi. This analysis became very professional and insightful, really exceeding our expectations. I will provide a link to it here after it goes public. Special thanks to Matilde!",
  },
];



const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const totalProjects = data.length;

  const handleNextProject = () => {
    const newProjectIndex = currentProject === totalProjects - 1 ? 0 : currentProject + 1;
    setCurrentProject(newProjectIndex);
  };

  const handlePreviousProject = () => {
    const newProjectIndex = currentProject === 0 ? totalProjects - 1 : currentProject - 1;
    setCurrentProject(newProjectIndex);
  };

  return (
    <Element name="projects">
    <div className="projects-bigger-area">
      <h1>Projects</h1>
      <div className="projects-area">
        <button className="projects-nav-arrow left-arrow" onClick={handlePreviousProject}></button>
        <div className="projects-box">
          <h3><span class="fancy">{data[currentProject].title}</span></h3>
          {/* <h3>{data[currentProject].title}</h3> */}
          <img src={data[currentProject].image} alt={data[currentProject].title} />
          <p>{data[currentProject].description}</p>
        </div>
        <button className="projects-nav-arrow right-arrow" onClick={handleNextProject}></button>
      </div>
    </div>
    </Element>
  );
};

export default Projects;