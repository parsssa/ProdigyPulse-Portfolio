import React from 'react';
import { Link } from 'react-scroll';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="bio" smooth={true} duration={1000} className="navbar-link">
            Bio
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="projects" smooth={true} duration={1000} className="navbar-link">
            Projects
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="skillset" smooth={true} duration={1000} className="navbar-link">
            Skillset
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="quests" smooth={true} duration={1000} className="navbar-link">
            Quests
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="connections" smooth={true} duration={1000} className="navbar-link">
            Connections
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
