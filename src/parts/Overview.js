import React from 'react'
import { useParams } from 'react-router-dom'


export default function Overview(props){
    const {id} = useParams();

    const project = props.data.find((project) => project._id === id)

    return(
        <section className="desc-section container" data-aos="fade-zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="300" data-aos-offset="0" data-aos-anchor-placement="center-bottom">
            <p>
                {project.overview}
            </p>
        </section>
    );
}