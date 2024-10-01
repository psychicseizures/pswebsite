import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <img 
        src="/videos/background.gif" 
        alt="Background" 
        className="background-gif"
      />
      <div className="content">
        {/* Your content goes here */}
      </div>
    </div>
  );
};

export default LandingPage;
