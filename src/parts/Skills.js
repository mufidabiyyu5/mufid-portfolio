import React from 'react'

import Figma from '../assets/images/figma.png'
import AdobeXd from '../assets/images/adobe_xd.png'
import Invision from '../assets/images/invision.png'
import Photoshop from '../assets/images/adobe_photoshop.png'
import Html from '../assets/images/html_5.png'
import Css from '../assets/images/css_3.png'
import Wordpress from '../assets/images/wordpress.png'


export default function ProcessSection(props){

    return(
        <section className="container">
            <div className="content-section text-center">
                <h2 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="300" data-aos-delay="300" data-aos-offset="0" data-aos-anchor-placement="center-bottom">
                    Tools &#38; Skills
                </h2>
                <div className='row text-center align-items-center justify-content-center skills' data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="300" data-aos-delay="600" data-aos-offset="0" data-aos-anchor-placement="center-bottom">
                    <div className='col-lg col-3'>
                        <img src={Figma} alt='Figma' className='img-fluid'></img>
                    </div>
                    <div className='col-lg col-3'>
                        <img src={AdobeXd} alt='Adobe Xd' className='img-fluid'></img>
                    </div>
                    <div className='col-lg col-3'>
                        <img src={Invision} alt='Invision' className='img-fluid'></img>
                    </div>
                    <div className='col-lg col-3'>
                        <img src={Photoshop} alt='Photoshop' className='img-fluid'></img>
                    </div>
                    <div className='col-lg col-3'>
                        <img src={Html} alt='HTML' className='img-fluid'></img>
                    </div>
                    <div className='col-lg col-3'>
                        <img src={Css} alt='CSS' className='img-fluid'></img>
                    </div>
                    <div className='col-lg col-3'>
                        <img src={Wordpress} alt='Wordpress' className='img-fluid'></img>
                    </div>
                </div>
            </div>
        </section>
    );
}