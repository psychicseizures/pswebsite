import React from 'react';
import './Footer.css'; // Make sure to import your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons"> 
      <a href="https://psychicseizures.bandcamp.com/follow_me" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-bandcamp"></i>
        </a>
        
        <a href="https://www.instagram.com/psychicseizures/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://open.spotify.com/artist/1ZcdDRusMbfuGD10ImvlAi" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-spotify"></i>
        </a>
        {/* YouTube Icon */}
        <a href="http://www.youtube.com/channel/UCwNamBfPSaWraDCDK553QMQ" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="https://www.facebook.com/psychicseizures/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
