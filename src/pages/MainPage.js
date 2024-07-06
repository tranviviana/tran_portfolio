import React from "react"
import HeroSection from "../sections/HeroSection"
import ContactMe from "../sections/ContactMe"
import Skills from "../sections/Skills"
import AboutMe from "../sections/AboutMe"
import Experience from "../sections/Experience"

export default function MainPage() {
    return (
        <>
        <div className="sections">
        <HeroSection/>
        <AboutMe />
        <Skills/>
        <Experience/>
        <ContactMe/>
        </div>
        </>
    )
}