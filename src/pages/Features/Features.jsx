import React from 'react';
import './Features.css'; // Importing CSS specific to the Features component

const Features = () => {
    return (
        <div className="features-content">
            {/* Detailed Features Section */}
            <section className="detailed-features">
                <h1>Explore Our Features</h1>
                {/* Iterate through features */}
                <article className="feature">
                    <h2>Automatic Sketching</h2>
                    <p>Utilize our cutting-edge AI to transform your ideas into sketches with a click.</p>
                    <button className="demo-button">See it in action</button>
                </article>
                {/* More features */}
            </section>

            {/* Interactive Demos Section */}
            <section className="interactive-demos">
                <h1>Interactive Demos</h1>
                {/* Demos */}
                <div className="demo">
                    <h2>Demo Title</h2>
                    {/* Placeholder or actual interactive demo */}
                </div>
                {/* More demos */}
            </section>

            {/* Comparison Chart Section */}
            <section className="comparison-chart">
                <h1>Choose Your Plan</h1>
                {/* Table or Chart comparing different plans */}
            </section>
        </div>
    );
};

export default Features;
