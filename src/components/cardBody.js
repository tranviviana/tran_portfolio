import './CardBody.css';
export default function CardBody({image, name}){
    return(
        <div className='project-card'>
            <img src={image} alt={name}/>
            <h3>{name}</h3>
        </div>
    )
}