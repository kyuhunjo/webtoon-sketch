
import React, { useState } from 'react';
import logo from '../../../images/logo.jpg'
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false);

    const toggleNav = () => {
        setIsNavExpanded(!isNavExpanded);
    };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={ logo } alt="Webtoon Sketch Logo" width="200" height="50" />
      </div>
      <button className="mobile-nav-toggle" onClick={toggleNav}>
        {/* Icon for the menu button (e.g., hamburger icon) */}
        ☰
      </button>
      <ul className={`nav-links ${isNavExpanded ? 'expanded' : ''}`}>
        <li><Link to="/ws">Home</Link></li>
        <li><Link to="/ws/About">About</Link></li>
        <li><Link to="/ws/ToolInterface">Tool Interface</Link></li>
        <li><Link to="/ws/LearningCenter">Learning Center</Link></li>
        <li><Link to="/ws/Community">Community</Link></li>
        <li><Link to="/ws/ContactSupport">Support</Link></li>
        <li><Link to="/ws/PrivacyTerms">Privacy & Terms</Link></li>
        <button id="logIn" className="secondary-button">Log In</button>
      </ul>
    </nav>
  );
};

export default Navigation;
