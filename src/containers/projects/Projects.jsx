import React from 'react';
import { useState } from 'react';
import './projects.css';
import botPhoto1 from '../../assets/botProject1.png';
import botPhoto2 from '../../assets/botProject2.png';
import AnalisiBulgari from '../../assets/AnalisiBulgari.png'
import webDevPic from '../../assets/figmaDesign.png'

// an array that contains img+description for each project
const data = [
  {
    title: "The Blog",
    image: webDevPic,
    description: "A blue-colored slice of the Internet for ME, me and... ME. You are welcome too, of course. The tools used for the creation of this website were Figma (for design) and React js (for implementation). Feel free to reach out if you are interested in starting your own web-development journey, I'd be glad to help.",
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
    title: "Bulgari Corporate Strategy Analysis",
    image: AnalisiBulgari,
    description: "A 2023 analysis of the luxury Italian brand Bulgari Spa through the lenses of Corporate Strategy, carried out in collaboration with my classmate Matilde Borghi. Truth be told, this analysis was actually a pleasure to write, thank you Matilde!",
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
  );
};

export default Projects;