import React from 'react';
import { useState } from 'react';
import './quests.css';
import youtubeQuest from '../../assets/oldYoutubeChannel.png';

// an array that contains img+description for each quest
const data = [
  {
    title: "Teenage YouTube Channel",
    image: youtubeQuest,
    description: "Back in March 2020, completely stuck at home and quarantined, I decided to try my luck uploading content on Youtube. This content was what inspired me at the time, and despite the limited tools and knowledge I had, I look back at it and smile. One video even reached a milestone of 2k views! Unfortunately, after my last year of highschool I no longer found the time to upload and the growth of the channel got halted. I plan on uploading another video soon, this way I can learn some video-editing magic and perhaps finish the channel in style",
  },
  {
    title: "quest 2",
    // image: questPhoto,
    description: "Vestibulum at ipsum vel nulla commodo commodo. Nulla facilisi. Nulla sed augue elit. Maecenas eget diam consequat, sodales tellus vitae, bibendum lorem. ",
  },
  {
    title: "quest 3",
    // image: questPhoto,
    description: "Fusce volutpat lobortis tortor, vel pharetra nibh fermentum non. Vestibulum quis lorem lectus. Integer vel quam nec enim consequat tempus.",
  },
];



const Quests = () => {
  const [currentquest, setCurrentquest] = useState(0);
  const totalquests = data.length;

  const handleNextquest = () => {
    const newquestIndex = currentquest === totalquests - 1 ? 0 : currentquest + 1;
    setCurrentquest(newquestIndex);
  };

  const handlePreviousquest = () => {
    const newquestIndex = currentquest === 0 ? totalquests - 1 : currentquest - 1;
    setCurrentquest(newquestIndex);
  };

  return (
    <div className="quests-bigger-area">
      <h1>Quests</h1>
      <div className="quests-area">
        <button className="quests-nav-arrow left-arrow" onClick={handlePreviousquest}></button>
        <div className="quests-box">
          <h3>{data[currentquest].title}</h3>
          <img src={data[currentquest].image} alt={data[currentquest].title} />
          <p>{data[currentquest].description}</p>
        </div>
        <button className="quests-nav-arrow right-arrow" onClick={handleNextquest}></button>
      </div>
    </div>
  );
};

export default Quests;