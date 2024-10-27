// src/components/VideoModal.js
import React from 'react';
import Modal from 'react-modal';
import Video from './Video'; // Ensure Video component is correctly imported
import './Modal.css'; // Ensure the CSS file is imported

Modal.setAppElement('#root'); // Ensure that this is set to avoid accessibility issues

const VideoModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Video Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <h2>Video</h2>
      <div className="video-container">
        <Video />
      </div>
      <button className="close-button" onClick={onRequestClose}>
      <img src={`${process.env.PUBLIC_URL}/close-icon.png`} alt="Close" className="close-icon" /> Close
      </button>
    </Modal>
  );
};

export default VideoModal;

