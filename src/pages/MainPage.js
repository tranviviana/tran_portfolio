import React from "react"
import HeroSection from "../sections/HeroSection"
import ContactMe from "../sections/ContactMe"
import Skills from "../sections/Skills"
import AboutMe from "../sections/AboutMe"

export default function MainPage() {
    return (
        <>
        <div className="sections">
        <HeroSection/>
        <AboutMe />
        <Skills/>
        <ContactMe/>
        </div>
        </>
    )
}