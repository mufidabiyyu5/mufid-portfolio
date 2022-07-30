import React from 'react'

import Navbar from '../parts/Navbar'
import Content from '../parts/ExploreContent'
import Footer from '../parts/Footer'

import DataExplore from '../json/DesignExploration.json'

export default function Explore() {
    return (
        <>
            <Navbar></Navbar>
            <Content data={DataExplore.explore}></Content>
            <Footer></Footer>
        </>
        
    )
}