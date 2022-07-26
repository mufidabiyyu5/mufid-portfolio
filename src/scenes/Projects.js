import React from 'react'

import Navbar from '../parts/Navbar'
import Title from '../parts/Title'
import Images from '../parts/ProjectsImage'
import Overview from '../parts/Overview'
import DefaultSection from '../parts/DefaultSection'
import Process from '../parts/ProcessSection'
import Conclusion from '../parts/Conclusion'
import Footer from '../parts/Footer'

import ProjectData from '../json/DetailProject.json'

export default function LandingPage() {
    return (
        <>
            <Navbar></Navbar>
            <Title data={ProjectData.projects}></Title>
            <Images data={ProjectData.projects}></Images>
            <Overview data={ProjectData.projects}></Overview>
            <DefaultSection data={ProjectData.projects}></DefaultSection>
            <Process data={ProjectData.projects}></Process>
            <Conclusion data={ProjectData.projects}></Conclusion>
            <Footer></Footer>
        </>
        
    )
}