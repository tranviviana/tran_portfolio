import './CardBody.css';
export default function CardBody({image, name}){
    return(
        <div className='project-card'>
            <img src={image} alt={name} className='project-card-images'/>
            <h3>{name}</h3>
        </div>
    )
}