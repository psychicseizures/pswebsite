// src/components/Artwork.js
import React, { useState } from 'react';
import './Artwork.css';

// Define the array of artwork images with titles, paths, and alt text
const artworkImages = [
  { src: `${process.env.PUBLIC_URL}/images/artwork0.webp`, alt: 'Artwork 0', title: 'Kunsthochschul-Professor' },
  { src: `${process.env.PUBLIC_URL}/images/artwork1.webp`, alt: 'Artwork 1', title: 'Das Podest' },
  { src: `${process.env.PUBLIC_URL}/images/artwork2.webp`, alt: 'Artwork 2', title: 'Pandemonium' },
  { src: `${process.env.PUBLIC_URL}/images/artwork3.webp`, alt: 'Artwork 3', title: 'Soldier Boy' },
  { src: `${process.env.PUBLIC_URL}/images/artwork4.webp`, alt: 'Artwork 4', title: 'The Man behind the Sun' },
  { src: `${process.env.PUBLIC_URL}/images/artwork5.webp`, alt: 'Artwork 5', title: 'The Stooge and his Steed' },
  { src: `${process.env.PUBLIC_URL}/images/artwork6.webp`, alt: 'Artwork 6', title: 'Mushroom Cloud Codey' },
  // Add more images with titles as needed
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
          <div key={index} className="artwork-item">
            <img
              src={image.src}
              alt={image.alt}
              className="artwork-thumbnail"
              onClick={() => handleImageClick(image)}
            />
            <p className="artwork-title">{image.title}</p>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="artwork-modal" onClick={closeModal}>
          <img src={selectedImage.src} alt={selectedImage.alt} className="artwork-fullsize" />
          <p className="artwork-modal-title">{selectedImage.title}</p>
        </div>
      )}
    </div>
  );
};

export default Artwork;
