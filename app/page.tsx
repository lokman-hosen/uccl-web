import Image from 'next/image'
import bg from '/public/img/slider-2.png'

function Home() {
    return (
        <div>
            <section className="home-slider owl-carousel">
                <div className="slider-item" style={{backgroundImage: `url(${bg.src})`}}>
                    <div className="container">
                        <div className="row slider-text align-items-center justify-content-center text-center">
                            <div className="col-md-7 col-sm-12">
                                <h1 className="mb-4"> Fastest-Growing Construction Company</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 pr-lg-5 mb-5 mb-md-0">
                            <div className="pr-lg-5">
                                <h2 className="text-uppercase heading border-bottom mb-4 text-left">UCCL<br/>THE UNITED
                                    CONSTRUCTION COMPANY LIMITED</h2>
                                <p><b>THE UNITED CONSTRUCTION CO.</b>was established in 1976 as a proprietorship
                                    construction company. Due to the situation's demand and the expansion of the
                                    business manifold, the management feels the necessity to convert the
                                    proprietorship to a limited company. To achieve this goal, The United
                                    Construction Company converted to The United Construction Company Limited
                                    in 2017 followed by due procedure and later in the year 2023, NDE Infrastructure
                                    has taken over the ownership of UCCL The United Construction Company Ltd.</p>
                                <p>From the inception of the company, it has undertaken various Governments,
                                    Semi-Government and private Construction work and completed all the works
                                    very successfully and in time. The company is technically and financially very
                                    sound and equipped with modern construction equipment.</p>

                                <p>As of today, the
                                    company have completed more than 60 Nos. of projects under Government and
                                    Semi-Governments which includes hi-rise commercial, residential, institutional
                                    and factory buildings, roads, bridges, culverts, warehouse <a href="about.html">Read more
                                        ....</a></p>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <img src="/img/work_thumb_1.jpg" alt="" className="img-fluid"/>
                        </div>
                    </div>

                    <div className="row section-gap text-center">
                        <div className="col-md-8">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5>Our Mission</h5>
                                    <p>Our mission is to perform for our customers the highest level of quality
                                        construction services at fair and satisfaction in all areas including timeliness,
                                        attention to detail, and service-minded attitudes.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5>Our Vision</h5>
                                    <p>Quality comes first and profit is its logical sequence</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section border-t">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-8 text-center">
                            <h2 className="text-uppercase heading border-bottom mb-4">Projects</h2>
                            <p className="mb-3 lead">Some completed projects are given below. Browse more projects from <a
                                href="project.html">Here</a></p>
                        </div>
                    </div>
                    <div className="row no-gutters" id="remarkableProject">
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;
