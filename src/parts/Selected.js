import React from 'react'

import Notes from '../assets/icon/note.svg'


export default function Selected(props){
    return(
        <main className="container">
            <section className="content-section" id="projects">
                <h2 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000" data-aos-delay="300" data-aos-offset="0">
                    My Portfolio
                </h2>
                <p data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="300" data-aos-delay="600" data-aos-offset="0">
                    Here are some of my creative portfolios. Before reading, <br/> 
                    don't forget to prepare coffee to be more relaxed
                </p>
                {
                    props.data.map((item, index) => {
                        return(
                            <div key={item._id} className="card-project" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="300" data-aos-delay="900" data-aos-offset="0">
                                <img src={item.image} className="card-img-top" alt={item._id}/>
                                <div className="card-project-body">
                                    <h3>
                                        {item.titleName + " " + item.projectName}
                                    </h3>
                                    <div className="d-flex">
                                        <img src={Notes} alt="note"/>
                                        <a href={`/${item._id}`}>
                                            <span className="card-text">View Case Study</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
                
            </section>
        </main>
    );
}