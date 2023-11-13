import React from 'react';
import artwork1 from '../../images/artwork1.png';
import artwork2 from '../../images/artwork2.png';
import './Community.css'; // Assuming you have a corresponding CSS file

const Community = () => {
    return (
        <div className="Community">
            <section id="user-gallery" className="user-gallery">
                <h2>User Gallery</h2>
                <p>Showcasing the amazing work of our community members.</p>
                <div className="gallery-grid">
                    {/* Gallery images here */}
                    <img src={ artwork1 } alt="User artwork 1" />
                    <img src={ artwork2 } alt="User artwork 2" />
                    {/* More images as needed */}
                </div>
            </section>
            
            <section id="forum-board" className="forum-board">
                <h2>Forum Board</h2>
                <p>Join the discussions and share your tips with fellow creators.</p>
                <div className="forum-links">
                    {/* Forum links here */}
                    <a href="forum-category-1.html">General Discussion</a>
                    <a href="forum-category-2.html">Feedback and Suggestions</a>
                    {/* More links as needed */}
                </div>
            </section>
            
            <section id="event-calendar" className="event-calendar">
                <h2>Event Calendar</h2>
                <p>Stay updated with upcoming community events and contests.</p>
                <ul className="event-list">
                    {/* Event list items here */}
                    <li><strong>Webtoon Contest:</strong> December 10, 2023</li>
                    <li><strong>Live Q&A Session:</strong> January 15, 2024</li>
                    {/* More events as needed */}
                </ul>
            </section>
        </div>
    );
};

export default Community;
