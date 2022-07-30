import React from 'react'

import Eye from '../assets/icon/Eye.svg'

export default function ExploreContent(props){

    return(
        <section className="container">
            <div className="content-section">
                <div className='title align-items-center text-center justify-content-center d-flex'>
                    <h2 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="300" data-aos-delay="300" data-aos-offset="0" data-aos-anchor-placement="center-bottom">
                        Design Exploration
                    </h2>
                </div>
                <div className='row align-items-center text-center justify-content-center'>
                    {
                        props.data.map((items, index) => {
                            return(
                                <div key={items._id} className='col-lg-4 exploration' data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="300" data-aos-delay="600" data-aos-offset="0" data-aos-anchor-placement="center-bottom">
                                    <a href={`/explore/${items._id}`} target='_blank' rel='noreferrer'>
                                        <img src={items.image} alt={items.name} className='img-fluid img-explore'></img>
                                        <div className='middle'>
                                            <img src={Eye} alt='visible' className='img-fluid icon-visible'></img>
                                        </div>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}