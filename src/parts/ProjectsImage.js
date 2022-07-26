import React from 'react'
import { useParams } from 'react-router-dom'


export default function ProjectsImage(props){
    const {id} = useParams();
    const project = props.data.find((project) => project._id === id)

    return(
        <section className="title-img container container-fluid" data-aos="fade-zoom-in" data-aos-easing="ease-in-out" data-aos-delay="900" data-aos-offset="0">
            <div className="row">
                <img src={project.image} alt={project.image}/>
            </div>
        </section>
    );
}