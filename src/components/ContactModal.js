import React from 'react';
import Modal from 'react-modal';
import ContactForm from './ContactForm'; // Make sure this path is correct
import './Modal.css'; // Assuming you have modal-specific styles here

Modal.setAppElement('#root'); // For accessibility reasons, this hides the rest of the app from screen readers when the modal is open

const ContactModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Contact Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modal-content">
        <h2>Contact</h2>
        <ContactForm /> {/* Add the contact form here */}
        <button className="close-button" onClick={onRequestClose}>
        <img src="/close-icon.png" alt="Close" className="close-icon" /> Close
      </button>
      </div>
    </Modal>
  );
};

export default ContactModal;
