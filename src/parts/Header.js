import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';

import Hello from '../assets/images/hello.png'

export default function Header(props){
    return(
        <header className="container">
            <div className="hero d-none d-lg-block">
                <span data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="300" data-aos-delay="300" data-aos-offset="0">Hello <img src={Hello} alt="Hello"/>, my name is</span>
                <h1 className="name" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="300" data-aos-delay="600" data-aos-offset="0">Mochamad <label>Mufid</label> Abiyyu</h1>
                <h1 className="occupation" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="300" data-aos-delay="900" data-aos-offset="0">
                    <TypeWriterEffect
                    textStyle={{
                        fontFamily: 'Inter',
                        color: '#FFD369',
                        fontWeight: 700,
                        fontSize: '3.5rem',
                        marginBottom: '1rem',
                    }}
                    cursorColor="#3F3D56"
                    multiText={[
                        'Loving User Experience Design',
                        'Designing Wonderful Products',
                        'Here is My UX Portfolio Page',
                        'UI/UX Enthusiast',
                    ]}
                    multiTextDelay={1000}
                    typeSpeed={100}
                    />
                </h1>
                <p data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="300" data-aos-delay="1200" data-aos-offset="0">I am a computer science student who is enthusiastic about
                    <br/> user experience design</p>
            </div>
            <div className="hero d-lg-none">
                <span data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="300" data-aos-delay="300" data-aos-offset="0">Hello <img src={Hello} alt="Hello"/>, my name is</span>
                <h1 className="name" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="300" data-aos-delay="600" data-aos-offset="0">Mochamad <label>Mufid</label> Abiyyu</h1>
                <h1 className="occupation" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="300" data-aos-delay="900" data-aos-offset="0">
                    UI/UX Enthusiast
                </h1>
                <p data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="300" data-aos-delay="1200" data-aos-offset="0">I am a computer science student who is 
                <br/> enthusiastic about user experience design</p>
            </div>
        </header>
    );
}