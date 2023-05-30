'use client';
import bg from '/public/img/slider-1.jpg'
import {projectList} from '/app/projectList'
import React, {useEffect, useState} from "react";
import Image from "next/image";

function ProjectDetail({ params }) {
    let projectId = params.id;
    console.log(params.id);

    const allProjects:object = projectList
    const [project, setProject] = useState({
        name: '',
        client_name: '',
        work_detail: '',
    });

    useEffect(() => {
        loadSingleProject(projectId)
    },[projectId]);

    function loadSingleProject(projectId){
        let project = allProjects.find(function(singleProject) {
            return singleProject.id == projectId;
        });
        setProject(project);
    }
    return (
        <div>
            <section className="home-slider  inner-page owl-carousel">
                <div className="slider-item" style={{backgroundImage: `url(${bg.src})`}}>
                    <div className="container">
                        <div className="row slider-text align-items-center justify-content-center text-center">
                            <div className="col-md-7 col-sm-12 element-animate">
                                <h1>House Renovation</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-12">
                            <div style={{width: '100%', height:600, position: 'relative'}}>
                                <Image
                                    className="img-fluid"
                                    src="/img/projects/default.png"
                                    alt="Image Placeholder"
                                    layout='fill'
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-12">
                            <h2 className="heading">Project title: </h2>
                            <p className="heading mb-4">{project.name}</p>
                            <h5 className="heading mb-4"><b>Client/Employer : </b><span id="clientName">{project.client_name}</span></h5>
                            <p><b>Description:</b> {project.work_detail}</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default ProjectDetail;
