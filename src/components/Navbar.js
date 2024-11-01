import React, { useState } from 'react';
import MusicModal from './MusicModal';
import VideoModal from './VideoModal';
import ArtworkModal from './ArtworkModal';
import ContactModal from './ContactModal';
import './Navbar.css';

const Navbar = () => {
  const [isMusicOpen, setMusicOpen] = useState(false);
  const [isVideoOpen, setVideoOpen] = useState(false);
  const [isArtworkOpen, setArtworkOpen] = useState(false);
  const [isContactOpen, setContactOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false); // For toggling mobile menu

  return (
    <nav className="navbar">
      <div className="logo">
        
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" />
        
      </div>
      <div className="hamburger" onClick={() => setIsNavOpen(!isNavOpen)}>
        ☰
      </div>
      <ul className={`nav-links ${isNavOpen ? 'open' : ''}`}>
        <li>
          <button onClick={() => setMusicOpen(true)}>
            <img src={`${process.env.PUBLIC_URL}/music-icon.png`} alt="Music Icon" className="nav-icon" />
            <span>Music</span>
          </button>
        </li>
        <li>
          <button onClick={() => setVideoOpen(true)}>
            <img src={`${process.env.PUBLIC_URL}/video-icon.png`} alt="Video Icon" className="nav-icon" />
            <span>Video</span>
          </button>
        </li>
        <li>
          <button onClick={() => setArtworkOpen(true)}>
            <img src={`${process.env.PUBLIC_URL}/artwork-icon.png`} alt="Artwork Icon" className="nav-icon" />
            <span>Artwork</span>
          </button>
        </li>
        <li>
          <button onClick={() => setContactOpen(true)}>
            <img src={`${process.env.PUBLIC_URL}/contact-icon.png`} alt="Contact Icon" className="nav-icon" />
            <span>Contact</span>
          </button>
        </li>
      </ul>

      {/* Modals */}
      <MusicModal isOpen={isMusicOpen} onRequestClose={() => setMusicOpen(false)} />
      <VideoModal isOpen={isVideoOpen} onRequestClose={() => setVideoOpen(false)} />
      <ArtworkModal isOpen={isArtworkOpen} onRequestClose={() => setArtworkOpen(false)} />
      <ContactModal isOpen={isContactOpen} onRequestClose={() => setContactOpen(false)} />
    </nav>
  );
};

export default Navbar;
