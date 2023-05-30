'use client';

import bg from '/public/img/slider-1.jpg'
 function ProjectDetail() {
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
                            <img src="" alt="Image placeholder" className="img-fluid" id="imagePath"/>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-12">
                            <h2 className="heading">Project title: </h2>
                            <p className="heading mb-4" id="projectTitle"></p>
                            <h5 className="heading mb-4"><b>Client/Employer : </b><span id="clientName"></span></h5>
                            <p><b>Description:</b> <span id="projectDetail"></span></p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default ProjectDetail;
