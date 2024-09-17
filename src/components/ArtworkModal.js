// src/components/ArtworkModal.js
import React from 'react';
import Modal from 'react-modal';
import Artwork from './Artwork';
import './Artwork.css'; // Import the CSS file

Modal.setAppElement('#root');

const ArtworkModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Artwork Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <h2>Artwork</h2>
      <div className="artwork-container">
        <Artwork />
      </div>
      <button className="close-button" onClick={onRequestClose}>
        <img src="/close-icon.png" alt="Close" className="close-icon" /> Close
      </button>
    </Modal>
  );
};

export default ArtworkModal;
