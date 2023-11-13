// Home.js
import React from 'react';
import Hero from '../components/Hero/Hero';
import './Home.css';
import icon1 from '../../images/icon1.png';
import icon2 from '../../images/icon2.png';

function Home() {
  return (
    <main className="home-content">
      <Hero />
      <section className="features">
        <h2>Amazing Features</h2>
        <div className="feature-list">
          {/* Each feature item will be an article or a div, for example: */}
          <article className="feature-item">
            <img src={icon1} alt="Feature 1 Icon" className="feature-icon" />
            <h3>Feature 1</h3>
            <p>Details about Feature 1...</p>
          </article>
          <article className="feature-item">
            <img src={icon2} alt="Feature 2 Icon" className="feature-icon" />
            <h3>Feature 2</h3>
            <p>Details about Feature 2...</p>
          </article>
          {/* ...more features */}
        </div>
      </section>

      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial">
          {/* Testimonial content */}
          <p>"This tool changed the way I draw comics. Absolutely love it!"</p>
          <cite>- Artist Name</cite>
        </div>
        {/* ...more testimonials */}
      </section>
      
      {/* Additional sections can continue here */}
    </main>
  );
}

export default Home;
