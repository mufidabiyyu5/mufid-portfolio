import React from 'react'

import Navbar from '../parts/Navbar'
import Header from '../parts/Header'
import Projects from "../parts/Selected";
import Skills from '../parts/Skills'
import Education from '../parts/Education'
import Footer from '../parts/Footer'

import SelectedProjects from "../json/SelectedProject.json";

export default function LandingPage() {
    return (
        <>
            <Navbar></Navbar>
            <Header></Header>
            <Projects data={SelectedProjects.selected}></Projects>
            <Skills></Skills>
            <Education></Education>
            <Footer></Footer>
        </>
        
    )
}