import React, { useState } from 'react';
import './FlipImage.css'; // Assuming you have a CSS file named FlipImage.css

export default function FlipImage() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src="frontImage.jpg" alt="Front Image" />
        </div>
        <div className="flip-card-back">
          <img src="backImage.jpg" alt="Back Image" />
        </div>
      </div>
    </div>
  );
}