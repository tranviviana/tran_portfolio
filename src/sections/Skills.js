import figma from '../images/skills/figma.png';
import github from '../images/skills/github.png';
import java from '../images/skills/java.png';
import python from '../images/skills/python.png';
import react from '../images/skills/react.png';
import riscv from '../images/skills/risc-v.png';
import arduino from '../images/skills/arduino.png';
import c from '../images/skills/c.png';
import empty from '../images/skills/empty.png';
import logism from '../images/skills/logism.png';
import './Skills.css';
import vscode from '../images/skills/vscode.png';
import intellij from '../images/skills/intellij.png';

const images = [figma, github, java, python, react, riscv, arduino, c, logism, vscode, intellij];

export default function Skills() {
    return (
        <div className="skills-container">
            <div><h1>Skills</h1></div>
            <div className='skill-images-container'>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt="Skill" className='skill-images' />
                </div>
            ))}
            <h3 style={{ fontWeight: 'lighter' }} className='skill-images'>+Others</h3>
            </div>
        </div>
    )
}

