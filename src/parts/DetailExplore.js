import React from 'react'
import { useParams } from 'react-router-dom'

export default function DetailExplore(props){

    const {id} = useParams();
    const explore = props.data.find((explore) => explore._id === id)

    console.log(id);

    return(
        <section className="container">
            <div className='text-center' key={explore._id} data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="300" data-aos-delay="1200" data-aos-offset="0" data-aos-anchor-placement="center-bottom">
                <img src={explore.image} alt={explore.name} className='img-fluid img-explore'></img>
            </div>
        </section>
    );
}