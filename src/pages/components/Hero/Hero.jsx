import React from 'react';
import './Hero.css'; // Importing CSS specific to Hero

const Hero = () => {
    return (
        <header className="hero">
            <h1 className="hero-heading">웹툰 스케치로 창의력을 발휘해보세요</h1>
            <p className="hero-subheading">웹툰 예술성을 위한 디지털 캔버스.</p>
            <button id="signUp" className="primary-button">무료로 시작해보세요</button>
        </header>
    );
};

export default Hero;
