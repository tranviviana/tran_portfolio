import React, { useState } from 'react';
import './Modal.css';
{/*Fix ease of the modal in the future*/}
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
            <button onClick={handleOpenModal}>
                <img src={closed_image} alt="Closed Modal" />
            </button>
            {isOpen && (
                <div className={`modal ${isOpen ? 'open' : ''}`} id="modal">
                    <div className="modal-header">
                        <div className="title">URL</div>
                        <button onClick={handleCloseModal} className="close-button">&times;</button>
                    </div>
                    <div className="modal-body">
                        {open_text}
                        <a href={link_text} target="_blank" rel="noopener noreferrer">
                            <button>Send Me There</button>
                        </a>
                    </div>
                </div>
            )}
            {isOpen && <div className={`overlay ${isOpen ? 'open' : ''}`} id="overlay"></div>}
        </div>
    );
}