import React from 'react'

import Arrow from '../assets/icon/Arrow.svg'
import Eye from '../assets/icon/Eye.svg'

let i = 0;
const items = [];

function itemsExplore(explore) {
    while(i < 6){
        items.push(
            <div key={explore[i]._id} className='col-lg-4 exploration' data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="300" data-aos-delay="600" data-aos-offset="0" data-aos-anchor-placement="center-bottom">
                <a href={`/explore/${explore[i]._id}`} target='_blank' rel='noreferrer'>
                    <img src={explore[i].image} alt={explore[i].name} className='img-fluid img-explore'></img>
                    <div className='middle'>
                        <img src={Eye} alt='visible' className='img-fluid icon-visible'></img>
                    </div>
                </a>
            </div>
        )
        i++
    }
}

export default function Exploration(props){

    itemsExplore(props.data)

    return(
        <section className="container">
            <div className="content-section">
                <div className='title align-items-center justify-content-center d-flex' data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="300" data-aos-delay="300" data-aos-offset="0" data-aos-anchor-placement="center-bottom">
                    <h2>
                        Design Exploration
                    </h2>
                    <a href={`/explore`} className='btn see-more ms-auto align-items-center justify-content-center'> 
                        <span>See More</span> 
                        <img src={Arrow} alt='See More' className='img-fluid'></img>
                    </a>
                </div>
                <div className='row'>
                    {
                        items
                    }
                </div>
            </div>
        </section>
    );
}