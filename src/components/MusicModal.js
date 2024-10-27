// src/components/MusicModal.js
import React from 'react';
import Modal from 'react-modal';
import Music from './Music'; // Import the Music component
import './Modal.css';

Modal.setAppElement('#root'); // Accessibility feature to hide main content from screen readers

const MusicModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Music Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <div className='modal-content'>
      <h2>Music</h2>
      <Music /> {/* Render the Music component inside the modal */}
      <button className="close-button" onClick={onRequestClose}>
      <img src={`${process.env.PUBLIC_URL}/close-icon.png`} alt="Close" className="close-icon" /> Close
      </button>
      </div>
    </Modal>
  );
};

export default MusicModal;
