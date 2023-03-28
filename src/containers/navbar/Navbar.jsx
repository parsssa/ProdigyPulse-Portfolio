import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">
          <a href="#" className="navbar-link">
            Bio
          </a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">
            Projects
          </a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">
            Skillset
          </a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">
            Quests
          </a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">
            Connections
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
