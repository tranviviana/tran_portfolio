import React, { useState } from 'react';
import './HandleCardBody.css'
import CardBody from './CardBody.js';
import runbutton from '../images/projectPics/runbutton.png'
import pong from '../images/projectPics/pong.png'
import rockpaperscissors from '../images/projectPics/rockpaperscissors.png'
import rotatingbutton from '../images/projectPics/rotatingbutton.png'
import youtubeclone from '../images/projectPics/youtubeclone.png'
import kachow from '../images/projectPics/kachow.png'
import cpu from '../images/projectPics/cpu.png'
import riscv from '../images/projectPics/riscv.png'
import snek from '../images/projectPics/snek.png'
import grocereyes from '../images/projectPics/grocereyes.jpg'
import voicecar from '../images/projectPics/voicecar.jpg'
import mazegame from '../images/projectPics/mazegame.png'
import ngrams from '../images/projectPics/ngrams.png'
import deque from '../images/projectPics/deque.png'
import twozero from '../images/projectPics/2048.png'
import bioehswebsite from '../images/projectPics/bioehswebsite.png'
import hcc from '../images/projectPics/hcc.jpg'
import teetertoggle from '../images/projectPics/teetertoggle.jpg'
import scheme from '../images/projectPics/scheme.png'
import ants from '../images/projectPics/ants.png'
import cats from '../images/projectPics/cats.png'
import hog from '../images/projectPics/hog.png'
import aps from '../images/projectPics/aps.png'
import touchscreen from '../images/projectPics/touchscreen.jpg'
import imgrecon from '../images/projectPics/imagereconstruction.jpg'
import matlab from '../images/projectPics/matlab.jpg'
import seeingnightmares from '../images/projectPics/seeingnightmares.png'



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
                                <div key={item.column1} className='project-holder'>
                                    
                                    <h2>{item.nameOfProject}</h2>
                                    <div className='info'>
                                        <h3>Task: </h3>
                                        <p>{item.task}</p>
                                    </div>
                                    <img src={item.pictures} alt={item.nameOfProject} className='project-picture'/>
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