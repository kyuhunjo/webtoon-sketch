import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <p>&copy; {new Date().getFullYear()} Webtoon Sketching Tool. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
