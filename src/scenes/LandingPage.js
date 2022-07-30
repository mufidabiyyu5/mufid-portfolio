import React from 'react'

import Navbar from '../parts/Navbar'
import Header from '../parts/Header'
import Projects from "../parts/Selected";
import Explore from '../parts/Exploration'
import Skills from '../parts/Skills'
import Education from '../parts/Education'
import Footer from '../parts/Footer'

import SelectedProjects from "../json/SelectedProject.json";
import DataExplore from '../json/DesignExploration.json'

export default function LandingPage() {
    return (
        <>
            <Navbar></Navbar>
            <Header></Header>
            <Projects data={SelectedProjects.selected}></Projects>
            <Explore data={DataExplore.explore}></Explore>
            <Skills></Skills>
            <Education></Education>
            <Footer></Footer>
        </>
        
    )
}