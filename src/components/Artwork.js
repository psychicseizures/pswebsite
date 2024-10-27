// src/components/Artwork.js
import React, { useState } from 'react';
import './Artwork.css';

// Define the array of artwork images with paths relative to the public folder
const artworkImages = [
  { src: `${process.env.PUBLIC_URL}/images/artwork1.webp`, alt: 'Artwork 1' },
  { src: `${process.env.PUBLIC_URL}/images/artwork2.webp`, alt: 'Artwork 2' },
  { src: `${process.env.PUBLIC_URL}/images/artwork3.webp`, alt: 'Artwork 3' },
  { src: `${process.env.PUBLIC_URL}/images/artwork4.webp`, alt: 'Artwork 4' },
  { src: `${process.env.PUBLIC_URL}/images/artwork5.webp`, alt: 'Artwork 5' },
  { src: `${process.env.PUBLIC_URL}/images/artwork6.webp`, alt: 'Artwork 6' },
  // Add more images as needed
];

const Artwork = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="artwork-container">
      <div className="artwork-gallery">
        {artworkImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="artwork-thumbnail"
            onClick={() => handleImageClick(image.src)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="artwork-modal" onClick={closeModal}>
          <img src={selectedImage} alt="Full-size artwork" className="artwork-fullsize" />
        </div>
      )}
    </div>
  );
};

export default Artwork;
