import React from "react"
import HeroSection from "../sections/HeroSection"
import ContactMe from "../sections/ContactMe"
import Skills from "../sections/Skills"
import AboutMe from "../sections/AboutMe"

export default function MainPage() {
    return (
        <>
        <HeroSection/>
        <AboutMe/>
        <Skills/>
        <ContactMe/>
        </>
    )
}