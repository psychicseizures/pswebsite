// src/components/LandingPage.js
import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/path-to-poster-image.jpg" // Optional: Add a fallback image
      >
        <source src="/videos/background.mp4" type="video/mp4" />
        <source src="/videos/background.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
       
      </div>
    </div>
  );
};

export default LandingPage;
