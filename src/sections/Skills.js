import figma from '../images/skills/figma.png';
import github from '../images/skills/github.png';
import java from '../images/skills/java.png';
import python from '../images/skills/python.png';
import react from '../images/skills/react.png';
import riscv from '../images/skills/risc-v.png';
import './Skills.css';

const images = [figma, github, java, python, react, riscv];

export default function Skills() {
    return (
        <div className="skills-container">
            <div><h1>Skills</h1></div>
            <div id='skill-images-container'>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt="Skill" className='skill-images' />
                </div>
            ))}
            </div>
        </div>
    )
}

