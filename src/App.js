import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Music from './components/Music';
import Video from './components/Video';
import Artwork from './components/Artwork';
import Contact from './components/Contact';
import Footer from './components/Footer'; // Import the Footer component
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/music" element={<Music />} />
          <Route path="/video" element={<Video />} />
          <Route path="/artwork" element={<Artwork />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

