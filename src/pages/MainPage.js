import React from "react"
import FlipImage from "../components/FlipImage"
import {Link} from "react-router-dom"
export default function MainPage() {
    return (
        <>
        <div className="hero-section">
            <div className='hero-left'>
                <h1>I'm Viviana</h1>
                <h3>Student | Front-End Developer | Programmer | Electrical Engineer</h3>
                <Link to="/resume" className="navbar_txt">Resume</Link>
            </div>
            <div className='hero-right'>
                <FlipImage/>
            </div>
        </div>
        </>
    )
}