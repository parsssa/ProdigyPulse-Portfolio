import React from 'react';
import { Bio, Connections, Footer, Navbar, Projects, Quests, Skillset, Title } from './containers';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.css';

const App = () => {
  return (
    <Router>
      <div className='App' >
        <Title></Title>
        <Navbar></Navbar>
        <Bio id='bio'></Bio>
        <Projects id='projects'></Projects>
        <Skillset id='skillset'></Skillset>
        <Quests id='quests'></Quests>
        <Connections id='connections'></Connections>
        <Footer></Footer>
      </div>
    </Router>
  )
}

export default App;
