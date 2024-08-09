import React, { useState } from 'react';
import './Modal.css';
export default function Modal({ closed_image, open_text, link_text }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <button className='img-btn' onClick={handleOpenModal}>
                <img className='contact-images' src={closed_image} alt="Closed Modal" style={{ width: '100%', height: '100%', minWidth: '25.5px', maxWidth: '68px', minHeight: '25.875px', maxHeight: '69px' }}/>
            </button>
            {isOpen && (
                <div className={`modal ${isOpen ? 'open' : ''}`} id="modal">
                    <div className="modal-header">
                        <button onClick={handleCloseModal} className="close-button">&times;</button>
                    </div>
                    <div className="modal-body">
                    <div className="title">URL: {open_text}</div>
                        <div><a href={link_text} target="_blank" rel="noopener noreferrer">
                            <button id='send-btn'>Send Me There</button>
                        </a></div>
                    </div>
                </div>
            )}
            {isOpen && <div className={`overlay ${isOpen ? 'open' : ''}`} id="overlay"></div>}
        </div>
    );
}




