import React from 'react';
import logo from '../../../images/logo.jpg';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav>
      <div className="logo">
        <img src={ logo } alt="Webtoon Sketch Logo" />
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/tool-interface">Tool Interface</Link>
        <Link to="/learning-center">Learning Center</Link>
        <Link to="/community">Community</Link>
        <Link to="/contact-support">Support</Link>
        <Link to="/privacy-terms">Privacy & Terms</Link>
        <button id="logIn" className="secondary-button">Log In</button>
      </div>
    </nav>
  );
};

export default Navigation;
