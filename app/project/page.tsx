'use client';

//import Image from 'next/image'
import React, { useState, useEffect } from 'react';

import bg from '/public/img/slider-2.png'
import Image from "next/image";

 function Project() {
     const allProjects = allProjects

     const [projects, setProjects] = useState([]);

     useEffect(() => {
        loadCompletedProject()

     },[]);

     function loadCompletedProject(){
         //setProjects(allProjects)
         const completedProjects = allProjects.filter((project) => {
              return project.type == 'completed';
          });
          setProjects(completedProjects);
     }
     function loadCurrentProject(){
         const currentProjects = allProjects.filter((project) => {
             return project.type == 'current';
         });
         setProjects(currentProjects);
     }
    
    return (
        <div>
            <section className="home-slider inner-page owl-carousel">
                <div className="slider-item"  style={{backgroundImage: `url(${bg.src})`}}>
                    <div className="container">
                        <div className="row slider-text align-items-center justify-content-center text-center">
                            <div className="col-md-7 col-sm-12 element-animate">
                                <h1>Completed and Ongoing Major Projects</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" data-toggle="tab"
                                           type="button" role="tab"
                                            aria-selected="true"
                                            onClick={loadCompletedProject}>
                                        <h4>Completed Projects</h4>
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link"  data-toggle="tab"
                                            type="button" role="tab"
                                            aria-selected="false"
                                            onClick={loadCurrentProject}
                                    >
                                        <h4>Current Projects</h4>
                                    </button>
                                </li>
                            </ul>

                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="completed-project" role="tabpanel"
                                     aria-labelledby="completed-project-tab">
                                    <div className="row" id="completedProject">
                                        { projects.length > 0 && projects.map((project)=>
                                            <div key={project.id} className="col-lg-4 col-md-6 element-animate fadeInUp element-animated">
                                                <div className="media d-block media-custom text-left">
                                                    <div style={{width: '100%', height: 280, position: 'relative'}}>
                                                        <Image
                                                            className="img-fluid"
                                                            src="/img/projects/default.png"
                                                            alt="Image Placeholder"
                                                            layout='fill'
                                                        />
                                                    </div>
                                                    {/*<img src="/img/projects/default.png" alt="Image Placeholder" className="img-fluid"*/}
                                                    {/*     style={{height: 280}}/>*/}
                                                    <div className="media-body">
                                                        <h3 className="mt-0 text-black"></h3><h5 className="mb-1">Project Name:</h5>
                                                        <a href="#" className="text-black">{project.name}</a>

                                                        <h6 className="mb-1 mt-3 bold-text">Client/Employer:</h6>
                                                        <p>{project.client_name}</p>
                                                        <p><b className="bold-text">Description: </b>{project.work_detail}</p>
                                                        <p className="clearfix">
                                                            <a href="project-detail.html?id=12" className="float-left">Read more</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Project;
