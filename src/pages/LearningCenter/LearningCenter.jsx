import React from 'react';
import './LearningCenter.css'; // Assuming you have a CSS file for LearningCenter

const LearningCenter = () => {
    return (
        <main className="learning-center">
            <section id="searchable-guides">
                <h2>Searchable Guides</h2>
                <input type="search" id="guide-search" name="guide-search" placeholder="Search tutorials..." />
                <div className="guides-list">
                    {/* Dynamic list of guides will be populated here */}
                </div>
            </section>
            
            <section id="video-tutorials">
                <h2>Video Tutorials</h2>
                {/* Example tutorial - repeat for additional tutorials */}
                <article className="video-tutorial">
                    <iframe src="https://www.youtube.com/embed/example" title="Video Tutorial" allowFullScreen></iframe>
                    <h3>Getting Started with Webtoon Sketch</h3>
                    <p>Learn the basics of using Webtoon Sketch to create your first webtoon.</p>
                </article>
                {/* Additional video tutorial articles would be added here */}
            </section>
            
            <section id="user-forum">
                <h2>User Forum</h2>
                <p>Join the community discussion in our user forum. Share tips, ask questions, and connect with other webtoon creators.</p>
                <a href="forum.html" className="button">Visit the Forum</a> {/* Adjust the href as needed */}
            </section>
        </main>
    );
};

export default LearningCenter;
