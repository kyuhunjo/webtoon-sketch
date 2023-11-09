import React from 'react';
import './About.css';

function About() {
  return (
    <div className="information-content">
      <section className="our-story">
        <h1>Our Story</h1>
        <p>Here is our story...</p>
      </section>
      <section className="mission-statement">
        <h1>Our Mission</h1>
        <p>Our mission is to...</p>
      </section>
      <section className="visual-timeline">
        <h1>Timeline</h1>
        <ul className="timeline">
          <li className="timeline-event">
            <h3>Year One</h3>
            <p>Details about the first year...</p>
          </li>
          {/* Add more timeline events here */}
        </ul>
      </section>
      {/* More sections can be added here if needed */}
    </div>
  );
}

export default About;