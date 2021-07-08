import React from 'react';
import NavbarFour from '../components/_App/NavbarFour';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
import OurRespectiveClients from '../components/Common/OurRespectiveClients';
import CTA from '../components/Common/CTA';
import Footer from '../components/_App/Footer';

const Features = () => {
    return (
        <>
			<NavbarFour />
			
			<PageBanner 
                pageTitle="Features" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Features"
            /> 

            <>
                <div className="features-area pt-100 pb-70">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-features">
                                    <Link href="/services-details">
                                        <a>
                                            <img src="/images/features/features-1.png" alt="image" />
                                        </a>
                                    </Link>
                                    <h3>
                                        <Link href="/services-details">
                                            <a>Strategic Planning</a>
                                        </Link>
                                    </h3>
                                    <p>Best Strategic planning dolor sit amet, consectetur adipiscing elit. Scelerisque amet odio velit, eu, auCTAr. Aliquet nam elit nulla eget sodales dui pulvinar.</p>

                                    <div className="features-btn">
                                        <Link href="/services-details">
                                            <a className="default-btn">
                                                Read More 
                                                <i className="ri-arrow-right-line"></i>
                                                <span></span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-features">
                                    <Link href="/services-details">
                                        <a>
                                            <img src="/images/features/features-2.png" alt="image" />
                                        </a>
                                    </Link>
                                    <h3>
                                        <Link href="/services-details">
                                            <a>Research & Development</a>
                                        </Link>
                                    </h3>
                                    <p>Best Strategic planning dolor sit amet, consectetur adipiscing elit. Scelerisque amet odio velit, eu, auCTAr. Aliquet nam elit nulla eget sodales dui pulvinar.</p>

                                    <div className="features-btn">
                                        <Link href="/services-details">
                                            <a className="default-btn">
                                                Read More 
                                                <i className="ri-arrow-right-line"></i>
                                                <span></span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-features">
                                    <Link href="/services-details">
                                        <a>
                                            <img src="/images/features/features-3.png" alt="image" />
                                        </a>
                                    </Link>
                                    <h3>
                                        <Link href="/services-details">
                                            <a>Design & Implimentation</a>
                                        </Link>
                                    </h3>
                                    <p>Best Strategic planning dolor sit amet, consectetur adipiscing elit. Scelerisque amet odio velit, eu, auCTAr. Aliquet nam elit nulla eget sodales dui pulvinar.</p>

                                    <div className="features-btn">
                                        <Link href="/services-details">
                                            <a className="default-btn">
                                                Read More 
                                                <i className="ri-arrow-right-line"></i>
                                                <span></span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-features">
                                    <Link href="/services-details">
                                        <a>
                                            <img src="/images/features/features-4.png" alt="image" />
                                        </a>
                                    </Link>
                                    <h3>
                                        <Link href="/services-details">
                                            <a>Startup Applications</a>
                                        </Link>
                                    </h3>
                                    <p>Best Strategic planning dolor sit amet, consectetur adipiscing elit. Scelerisque amet odio velit, eu, auCTAr. Aliquet nam elit nulla eget sodales dui pulvinar.</p>

                                    <div className="features-btn">
                                        <Link href="/services-details">
                                            <a className="default-btn">
                                                Read More 
                                                <i className="ri-arrow-right-line"></i>
                                                <span></span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-features">
                                    <Link href="/services-details">
                                        <a>
                                            <img src="/images/features/features-5.png" alt="image" />
                                        </a>
                                    </Link>
                                    <h3>
                                        <Link href="/services-details">
                                            <a>SaaS Solutions</a>
                                        </Link>
                                    </h3>
                                    <p>Best Strategic planning dolor sit amet, consectetur adipiscing elit. Scelerisque amet odio velit, eu, auCTAr. Aliquet nam elit nulla eget sodales dui pulvinar.</p>

                                    <div className="features-btn">
                                        <Link href="/services-details">
                                            <a className="default-btn">
                                                Read More 
                                                <i className="ri-arrow-right-line"></i>
                                                <span></span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-features">
                                    <Link href="/services-details">
                                        <a>
                                            <img src="/images/features/features-6.png" alt="image" />
                                        </a>
                                    </Link>
                                    <h3>
                                        <Link href="/services-details">
                                            <a>Software Development</a>
                                        </Link>
                                    </h3>
                                    <p>Best Strategic planning dolor sit amet, consectetur adipiscing elit. Scelerisque amet odio velit, eu, auCTAr. Aliquet nam elit nulla eget sodales dui pulvinar.</p>

                                    <div className="features-btn">
                                        <Link href="/services-details">
                                            <a className="default-btn">
                                                Read More 
                                                <i className="ri-arrow-right-line"></i>
                                                <span></span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Shape Images */}
                    <div className="features-shape-1">
                        <img src="/images/features/shape-1.png" alt="image" />
                    </div>
                    <div className="features-shape-2">
                        <img src="/images/features/shape-2.png" alt="image" />
                    </div>
                </div>

                {/* Features Card Style */}
                <style jsx>{`
                    .features-area {
                        position: relative;
                        z-index: 1;
                    }
                    .single-features {
                        text-align: center;
                        margin-bottom: 30px;
                        -webkit-transition: var(--transition);
                        transition: var(--transition);
                    }
                    .single-features img {
                        -webkit-transition: var(--transition);
                        transition: var(--transition);
                    }
                    .single-features h3 {
                        font-size: 25px;
                        margin-top: 30px;
                        margin-bottom: 15px;
                    }
                    .single-features h3 a {
                        color: var(--black-color);
                    }
                    .single-features h3 a:hover {
                        color: var(--main-color);
                    }
                    .single-features p {
                        -webkit-transition: var(--transition);
                        transition: var(--transition);
                    }
                    .single-features .features-btn {
                        margin-top: 25px;
                    }
                    .single-features .features-btn .default-btn {
                        background-color: #EAF0FF;
                        color: var(--main-color);
                    }
                    .single-features:hover .features-btn .default-btn {
                        background-color: var(--main-color);
                        color: var(--white-color);
                    }
                    .single-features:hover .features-btn .default-btn span {
                        background-color: var(--optional-color);
                    }
                    .features-inner-box {
                        background-color: #F4F8FC;
                        border: 1px solid #E6EDF6;
                        padding-top: 80px;
                        padding-bottom: 50px;
                        padding-left: 45px;
                        padding-right: 45px;
                        border-radius: 5px;
                    }
                    .features-shape-1 {
                        position: absolute;
                        top: 15%;
                        left: 40%;
                        -webkit-transform: translateY(-15%) translateX(-40%);
                                transform: translateY(-15%) translateX(-40%);
                        z-index: 1;
                    }
                    .features-shape-2 {
                        position: absolute;
                        top: 20%;
                        right: 40%;
                        -webkit-transform: translateY(-20%) translateX(-40%);
                                transform: translateY(-20%) translateX(-40%);
                        z-index: 1;
                    }
                    .features-shape-3 {
                        position: absolute;
                        top: 8%;
                        right: 50%;
                        -webkit-transform: translateY(-8%) translateX(-50%);
                                transform: translateY(-8%) translateX(-50%);
                        z-index: 1;
                    }
                    .features-shape-4 {
                        position: absolute;
                        top: 10%;
                        right: 48%;
                        -webkit-transform: translateY(-10%) translateX(-48%);
                                transform: translateY(-10%) translateX(-48%);
                        z-index: 1;
                    }
        
                    // Responsive Style
                    @media only screen and (max-width: 767px) {
                        .single-features h3 {
                            font-size: 22px;
                        }
                        .single-features p {
                            font-size: 15px;
                        }
                        .features-shape-1 {
                            display: none;
                        }
                        .features-shape-2 {
                            display: none;
                        }
                        .features-shape-3 {
                            display: none;
                        }
                        .features-shape-4 {
                            display: none;
                        }
                    }

                    @media only screen and (min-width : 768px) and (max-width : 991px) {
                        .single-features p {
                            font-size: 15px;
                        }
                        .features-shape-1 {
                            display: none;
                        }
                        .features-shape-2 {
                            display: none;
                        }
                        .features-shape-3 {
                            display: none;
                        }
                        .features-shape-4 {
                            display: none;
                        }
                    }

                    @media only screen and (min-width : 992px) and (max-width : 1199px) {
                        .single-features h3 {
                            font-size: 23px;
                        }
                        .single-features p {
                            font-size: 15px;
                        }
                        .features-shape-1 {
                            display: none;
                        }
                        .features-shape-2 {
                            display: none;
                        }
                        .features-shape-3 {
                            display: none;
                        }
                        .features-shape-4 {
                            display: none;
                        }
                    }
                    
                `}</style>
            </>

            <OurRespectiveClients />

            <div className="ptb-100">
                <CTA />
            </div>
		  
			<Footer />
		</>
    )
}

export default Features;