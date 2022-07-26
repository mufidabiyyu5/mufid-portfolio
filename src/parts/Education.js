import React from 'react'

import Upi from '../assets/images/upi.png'
import Binar from '../assets/images/binar.png'

export default function ProcessSection(props){

    return(
        <section className="container">
            <div className="content-section">
                <h2 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000" data-aos-delay="1000" data-aos-offset="0" data-aos-anchor-placement="center-bottom">
                    Education &#38; Courses
                </h2>
                <div className='row education'>
                    <div className='col-lg-6 card-education' data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000" data-aos-delay="1200" data-aos-offset="0" data-aos-anchor-placement="center-bottom">
                        <div className='d-flex align-items-start'>
                            <img src={Upi} alt='Universitas Pendidikan Indonesia' className='img-fluid'></img>
                            <div className='d-block'>
                                <h4>Computer Science</h4>
                                <h4>Universitas Pendidikan Indonesia</h4>
                                <span>2019 - Present</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 card-education' data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000" data-aos-delay="1400" data-aos-offset="0" data-aos-anchor-placement="center-bottom">
                        <div className='d-flex align-items-start'>
                            <img src={Binar} alt='Binar Academy' className='img-fluid'></img>
                            <div className='d-block'>
                                <h4>UI/UX Design Bootcamp</h4>
                                <h4>Binar Academy</h4>
                                <span>February 2022 - July 2022</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}