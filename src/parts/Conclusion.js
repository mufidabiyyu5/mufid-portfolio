import React from 'react'
import { useParams } from 'react-router-dom'


export default function Conclusion(props){
    const {id} = useParams();

    const project = props.data.find((project) => project._id === id)

    return(
        <section className="container">
            <div className='default-section'>
                <h2 data-aos="fade-zoom-in" data-aos-easing="ease-in-out" data-aos-duration="300" data-aos-delay="300" data-aos-offset="0">
                    Results
                </h2>
                <p data-aos="fade-zoom-in" data-aos-easing="ease-in-out" data-aos-duration="300" data-aos-delay="600" data-aos-offset="0">
                    {project.conclusion}
                </p>
            </div>
        </section>
    );
}