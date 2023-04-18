import React from 'react';
import { useState } from 'react';
import './quests.css';
import youtubeQuest from '../../assets/oldYoutubeChannel.png';
import journal from '../../assets/journal.jpg'
import { Element } from 'react-scroll';


// an array that contains img+description for each quest
const data = [
  {
    title: "Teenage YouTube Channel",
    image: youtubeQuest,
    description: "Back in March 2020, completely stuck at home and quarantined, I decided to try my luck uploading content on Youtube. This content was what inspired me at the time, and despite the limited tools and knowledge I had, I look back at it and smile. One video almost reached 2 thousand views! Unfortunately, after my last year of highschool I no longer found the time to upload and the growth of the channel slowed to a stop. I plan on uploading another video soon, this way I can learn some video-editing magic and perhaps end the channel in style",
  },
  {
    title: "Journal",
    image: journal,
    description: "I've been keeping a Journal from early 2013, scattered across various notebooks. Of course, the first entries are very basic and my writing has greatly improved over the years, but it's nice to have written records of my life. Perhaps one day I will edit them all into a single book and publish it for the world to read.",
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
    <Element name="quests">
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
    </Element>
  );
};

export default Quests;