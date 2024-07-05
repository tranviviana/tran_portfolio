import React, { useState } from 'react';
import './handleCardBody.css'
import CardBody from './CardBody.js';
export default function HandleCardBody({ items, image, name }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };
    const itemArray = Array.from(items);
    const filteredItems = itemArray.filter(item => item.groupings === name);
    

    return (
        
            <div>
            <button className='career-categories' onClick={handleOpenModal}>
            <CardBody image={image} name={name}/>
            </button>
                {isOpen && (
                    <div className={`career-categories ${isOpen ? 'open' : ''}`} id="career-modal">
                        <div className='career-modal-header'>
                            <h2>{name}</h2>
                            <button onClick={handleCloseModal} className="close-button">&times;</button>
                        </div>
                        <div className='career-modal-body'>
                        {filteredItems.map(item => (
                                <div key={item.id}>
                                    
                                    <p>{item.nameOfProject}</p>
                                    <p>{item.task}</p>
                                    <p>{item.challenges}</p>
                                    <p>{item.oucomeuniqueAdditions}</p>
                                    <p>{item.topicsUsed}</p>
                                    
                                </div>
                            ))}
                            
                        </div>
                    </div>
                )}
                {isOpen && <div className={`overlay ${isOpen ? 'open' : ''}`} id="overlay"></div>}
            </div>
        
    )
}