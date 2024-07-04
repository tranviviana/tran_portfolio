import react from 'react';
import './cardBody.css';
export default function cardBody({image, name}){
    return(
        <div className='project-card'>
            <img src={image} alt={name}/>
            <h3>{name}</h3>
        </div>
    )
}