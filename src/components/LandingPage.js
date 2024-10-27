import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <video
        className="background-video"
        src={`${process.env.PUBLIC_URL}/videos/mmmppfourbackground.mp4`}
        autoPlay
        loop
        muted
      />
      <div className="content">
        {/* Your content goes here */}
      </div>
    </div>
  );
};

export default LandingPage;
