import React, { useState } from 'react';
import './FlipImage.css'; 
import me from '../images/generalImages/me.png'
import doggos from '../images/generalImages/doggos.png'

export default function FlipImage() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onMouseEnter={handleFlip} onMouseLeave={handleFlip}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={me} alt="Me!" style={{ width: '100%', height: '100%', minWidth: '350px', maxWidth: '425px' }}/>
        </div>
        <div className="flip-card-back">
          <img src={doggos} alt="My Fur Friends!"  style={{ width: '100%', height: '100%', minWidth: '350px',  maxWidth: '425px' }}/>
        </div>
      </div>
    </div>
  );
}