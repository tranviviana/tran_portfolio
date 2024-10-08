import React, { useState, useEffect } from 'react';
import './HandleCardBody.css'
import CardBody from './CardBody';




export default function HandleCardBody({ items, image, name }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
        
    };

    const handleCloseModal = (e) => {
        if (e.target.id === 'overlay' || e.target.className === 'close-button') {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleCloseModal);
        return () => {
            document.removeEventListener('click', handleCloseModal);
        };
    }, []);
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
                                <div key={item.column1} className='project-holder'>
                                    
                                    <h2>{item.nameOfProject}</h2>
                                    <div className='info'>
                                        <h3>Task: </h3>
                                        <h3 style={{fontWeight: 'normal'}}>{item.task}</h3>
                                    </div>
                                    <embed src={item.pictures} className='project-picture'/>
                                    <div className='info'>
                                        <h3>Challenges Encountered: </h3>
                                        <h3 style={{fontWeight: 'normal'}}>{item.challenges}</h3>
                                    </div>
                                    <div className='info'>
                                        <h3>Process and Outcome: </h3>
                                        <h3 style={{fontWeight: 'normal'}}>{item.outcomeuniqueAdditions}</h3>
                                    </div>
                                    <div className='info'>
                                    <h3>Link: </h3>
                                    {item.resource && (
                                        <a href={item.resource} target="_blank" rel="noopener noreferrer">{item.resource}</a>
                                        )}
                                    </div>
                                    <div className='info'>
                                        <h3>Topics Used: </h3>
                                        <h3 style={{fontWeight: 'normal'}}>{item.topicsUsed}</h3>
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