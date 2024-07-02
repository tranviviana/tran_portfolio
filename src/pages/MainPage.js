import React from "react"
import FlipImage from "../components/FlipImage"
import {Link} from "react-router-dom"
export default function MainPage() {
    return (
        <>
        <div className="hero-section">
            <div className='hero-left'>
            <div className='name-container'>
                    <h1 className='special-txt'>I'm </h1>
                    <h1> Viviana</h1>
                </div>
                <h3>Student | Front-End Developer | Programmer | Electrical Engineer</h3>
                <Link to="/resume" className="navbar_txt outline">Resume</Link>
                <h6 style={{fontStyle: 'italic', fontWeight: '400'}}>Update: Developing Software for ECG Analysis, Exploring the Vast Field of Technology, and Continuing Work at theCoderSchool</h6>
            </div>
            <div className='hero-right'>
                <FlipImage/>
            </div>
        </div>
        </>
    )
}