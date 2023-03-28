import React from 'react';
import { Connection_item, Skill, Transparent_rectangle } from './components';
import { Bio, Connections, Footer, Navbar, Projects, Quests, Skillset, Title } from './containers';
import './app.css';

const App = () => {
  return (

    <div className='App' >
      <Title></Title>
      <Navbar></Navbar>
      <Bio></Bio>
      <Projects></Projects>
      <Skillset></Skillset>
      <Quests></Quests>
      <Connections></Connections>
      <Footer></Footer>
    </div>
    

  )
}

export default App