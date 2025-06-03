// src/components/Video.js
import React from 'react';
import './Video.css';

const Video = () => {
  return (
    <div className="video-list">




      {/* First Video */}
      <div className="video-item">
        <h2>Psychic Seizures - My Burned Brain</h2>
        <div className="video-embed-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/LEzvyXExqJQ?si=jNLq5CbfWnBWPWta" 
            title="Psychic Seizures - My Burned Brain" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Second Video */}
      <div className="video-item">
        <h2>Psychic Seizures - The Ambulance</h2>
        <div className="video-embed-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/y6Ry8fhSXqk?si=hWIQE1eQ0nLftYzu" 
            title="Psychic Seizures - The Ambulance" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-item">
        <h2>Psychic Seizures - The Transatlantic</h2>
        <div className='video-embed-container'>
        <iframe width="560" height="315" 
        src="https://www.youtube.com/embed/ILSEaI1oFYg?si=b5Ng8ZV9KMkWpM_H" 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen></iframe>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
