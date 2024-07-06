import projectdata from '../data/projectdata.json'
import cs from '../images/aboutMe/CS.png'
import ee from '../images/aboutMe/EE.png'
import frontend from '../images/aboutMe/frontend.png'
import innovator from '../images/aboutMe/Innovator.png'
import HandleCardBody from '../components/HandleCardBody.js'
import './AboutMe.css'
export default function AboutMe() {
    return (
        <div className='about-me-styling'>
        <h1>About Me</h1>
        <div className='about-me-cards'>
        <HandleCardBody items={projectdata} image={cs} name='Software Engineer (General)'/>
        <HandleCardBody items={projectdata} image={ee} name='Electrical Engineer'/>
        <HandleCardBody items={projectdata} image={frontend} name='Front-End Developer'/>
        <HandleCardBody items={projectdata} image={innovator} name='Innovator'/>
        </div>
        <h4>Click for related projects!</h4>
        </div>
    )
}