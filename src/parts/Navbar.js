import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/images/Mufid_logo.png'


export default function Navbar(props){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark my-3">
            <div className="container" data-aos="fade-zoom-in" data-aos-easing="ease-in-out" data-aos-delay="300" data-aos-offset="0">
                <Link className="navbar-brand" to={'/'}>
                    <img src={Logo} alt="Logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href={`/#projects`}>Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://drive.google.com/file/d/1NhEZw5w1Q93xilekN4HbfOE60YpMMvT6/view?usp=sharing" target="_blank">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="mailto:mochamadmufidabiyyu@gmail.com">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
