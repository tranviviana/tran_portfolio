import React, { useState } from 'react';
import './HandleCardBody.css'
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
        
            <div className='career-categories'>
            <button onClick={handleOpenModal} className='cards'>
            <CardBody image={image} name={name}/>
            </button>
                {isOpen && (
                    <div className={`career-modal ${isOpen ? 'open' : ''}`} id="career-modal">
                        <div className='career-modal-header'>
                            <h2>{name}</h2>
                            <button onClick={handleCloseModal} className="close-button">&times;</button>
                        </div>
                        <div className='career-modal-body'>
                        {filteredItems.map(item => (
                                <div key={item.id} className='project-holder'>
                                    
                                    <h2>{item.nameOfProject}</h2>
                                    <div className='info'>
                                        <h3>Task: </h3>
                                        <p>{item.task}</p>
                                    </div>
                                    <img src={item.picture} alt={item.nameOfProject} className='project-picture'/>
                                    <div className='info'>
                                        <h3>Challenges Encountered: </h3>
                                        <p>{item.challenges}</p>
                                    </div>
                                    <div className='info'>
                                        <h3>Process and Outcome: </h3>
                                        <p>{item.outcomeuniqueAdditions}</p>
                                    </div>
                                    <div className='info'>
                                    <h3>Link: </h3>
                                    {item.resource && (
                                        <a href={item.resource} target="_blank" rel="noopener noreferrer">{item.resource}</a>
                                        )}
                                    </div>
                                    <div className='info'>
                                        <h3>Topics Used: </h3>
                                        <p>{item.topicsUsed}</p>
                                    </div>
                                    
                                </div>
                            ))}
                            
                        </div>
                    </div>
                )}
                {isOpen && <div className={`overlay ${isOpen ? 'open' : ''}`} id="overlay"></div>}
            </div>
        
    );
}