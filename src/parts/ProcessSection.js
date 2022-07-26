import React from 'react'
import { useParams } from 'react-router-dom'


export default function ProcessSection(props){
    const {id} = useParams();

    const project = props.data.find((project) => project._id === id)

    return(
        <section className="process-section container">
        <div className="wrapper" data-aos="fade-zoom-in" data-aos-easing="ease-in-out" data-aos-duration="300" data-aos-delay="300" data-aos-offset="0">
            <h2>
                Design Process
            </h2>
            <div className="process-wrapper" data-aos="fade-zoom-in" data-aos-easing="ease-in-out" data-aos-duration="300" data-aos-delay="600" data-aos-offset="0">
                {
                    project.process.map((item, index) => {
                        if (item.link == null) {
                            return(
                                <span>
                                    {item.title}
                                </span>
                            );
                        } else {
                            return(
                                <span><a href={item.link} target="_blank" rel="noreferrer">{item.title}</a> -</span>
                            );
                            
                        }
                    })
                }
            </div>
        </div>
    </section>
    );
}