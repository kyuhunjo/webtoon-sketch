import React from 'react';
import './About.css'; // Assuming you have an About.css for styles

const About = () => {
    return (
        <div className="About">
            <main className="information-content">
                <section id="our-story" className="our-story">
                    <h2>Our Story</h2>
                    <p>Webtoon Sketch began as a passion project in 2017, born from a desire to empower digital artists and storytellers. Our team of developers and artists have worked tirelessly to bring you the tools you need to bring your webtoons to life.</p>
                    {/* Additional content as needed */}
                </section>
                
                <section id="mission-statement" className="mission-statement">
                    <h2>Our Mission</h2>
                    <p>Our mission is to democratize webtoon creation, making it accessible and enjoyable for artists of all skill levels. We're dedicated to providing a platform where creativity knows no bounds.</p>
                    {/* Additional content as needed */}
                </section>
                
                <section id="visual-timeline" className="visual-timeline">
                    <h2>Our Journey</h2>
                    <ul className="timeline">
                        <li className="timeline-event">
                            <h3>2017</h3>
                            <p>The idea for Webtoon Sketch was conceived.</p>
                        </li>
                        <li className="timeline-event">
                            <h3>2018</h3>
                            <p>Our first prototype was released and met with positive feedback from early adopters.</p>
                        </li>
                        {/* Add more timeline events as necessary */}
                    </ul>
                </section>
            </main>
        </div>
    );
};

export default About;
