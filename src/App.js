import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './assets/scss/bootstrap.css'
import './css/style.css';
import { useEffect } from "react";
import AOS from "aos";
import "./elements/TypeWriter"

import Landing from './scenes/LandingPage'
import Projects from './scenes/Projects'
import Explore from './scenes/Explore'
import DetailExplore from './scenes/DetailExplore'

function App() {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/:id" element={<Projects/>} />
      <Route path="/explore" element={<Explore/>}/>
      <Route path="/explore/:id" element={<DetailExplore/>}/>
    </Routes>
  );
}
 
export default App;