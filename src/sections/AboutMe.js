import projectdata from '../data/projectdata.json'
import cs from '../images/aboutMe/CS.png'
import ee from '../images/aboutMe/EE.png'
import frontend from '../images/aboutMe/frontend.png'
import innovator from '../images/aboutMe/Innovator.png'
import HandleCardBody from '../components/HandleCardBody'
export default function AboutMe() {
    return (
        <div>
        <h1>About Me</h1>
        <div>
        <HandleCardBody items={projectdata} image={cs} name='Software'/>
        <HandleCardBody items={projectdata} image={ee} name='Electrical Engineering'/>
        <HandleCardBody items={projectdata} image={frontend} name='Front-End Developer'/>
        <HandleCardBody items={projectdata} image={innovator} name='Innovator'/>
        </div>
        </div>
    )
}