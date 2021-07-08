import React from 'react';
import Link from 'next/link';

const RecentCaseStudiesCard = () => {
    return (
        <>
            <div className="projects-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Recent Case Studies</h2>
                        <p>Best Strategic planning dolor sit amet consectetur adipiscing elit. Scelerisque amet odio velit auctor. nam elit nulla eget sodales dui pulvina</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-projects-box">
                                <div className="projects-image">
                                    <Link href="/case-study-details">
                                        <a><img src="/images/projects/projects-1.jpg" alt="image" /></a>
                                    </Link>
                                </div>

                                <div className="projects-content">
                                    <h3>
                                        <Link href="/case-study-details">
                                            <a>Business Consulting</a>
                                        </Link>
                                    </h3>
                                    <p>Best Strategic planning dolor sit amet consectetur adipiscing elit. Scelerisque amet odio velit eu auctor. Aliquet nam elit nulla eget sodales dui pulvinar.</p>

                                    <Link href="/case-study-details">
                                        <a className="projects-btn">
                                            Read More <i className="ri-arrow-right-line"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-projects-box">
                                <div className="projects-image">
                                    <Link href="/case-study-details">
                                        <a><img src="/images/projects/projects-2.jpg" alt="image" /></a>
                                    </Link>
                                </div>

                                <div className="projects-content">
                                    <h3>
                                        <Link href="/case-study-details">
                                            <a>Financial Consulting for Ozen</a>
                                        </Link>
                                    </h3>
                                    <p>Best Strategic planning dolor sit amet consectetur adipiscing elit. Scelerisque amet odio velit eu auctor. Aliquet nam elit nulla eget sodales dui pulvinar.</p>
                                    
                                    <Link href="/case-study-details">
                                        <a className="projects-btn">
                                            Read More <i className="ri-arrow-right-line"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-projects-box">
                                <div className="projects-image">
                                    <Link href="/case-study-details">
                                        <a><img src="/images/projects/projects-3.jpg" alt="image" /></a>
                                    </Link>
                                </div>

                                <div className="projects-content">
                                    <h3>
                                        <Link href="/case-study-details">
                                            <a>Social Media Marketing</a>
                                        </Link>
                                    </h3>
                                    <p>Best Strategic planning dolor sit amet consectetur adipiscing elit. Scelerisque amet odio velit eu auctor. Aliquet nam elit nulla eget sodales dui pulvinar.</p>
                                    
                                    <Link href="/case-study-details">
                                        <a className="projects-btn">
                                            Read More <i className="ri-arrow-right-line"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-projects-box">
                                <div className="projects-image">
                                    <Link href="/case-study-details">
                                        <a><img src="/images/projects/projects-4.jpg" alt="image" /></a>
                                    </Link>
                                </div>

                                <div className="projects-content">
                                    <h3>
                                        <Link href="/case-study-details">
                                            <a>SEO Optimization</a>
                                        </Link>
                                    </h3>
                                    <p>Best Strategic planning dolor sit amet consectetur adipiscing elit. Scelerisque amet odio velit eu auctor. Aliquet nam elit nulla eget sodales dui pulvinar.</p>
                                    
                                    <Link href="/case-study-details">
                                        <a className="projects-btn">
                                            Read More <i className="ri-arrow-right-line"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-projects-box">
                                <div className="projects-image">
                                    <Link href="/case-study-details">
                                        <a><img src="/images/projects/projects-5.jpg" alt="image" /></a>
                                    </Link>
                                </div>

                                <div className="projects-content">
                                    <h3>
                                        <Link href="/case-study-details">
                                            <a>Advanced Analytics</a>
                                        </Link>
                                    </h3>
                                    <p>Best Strategic planning dolor sit amet consectetur adipiscing elit. Scelerisque amet odio velit eu auctor. Aliquet nam elit nulla eget sodales dui pulvinar.</p>
                                    
                                    <Link href="/case-study-details">
                                        <a className="projects-btn">
                                            Read More <i className="ri-arrow-right-line"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-projects-box">
                                <div className="projects-image">
                                    <Link href="/case-study-details">
                                        <a><img src="/images/projects/projects-6.jpg" alt="image" /></a>
                                    </Link>
                                </div>

                                <div className="projects-content">
                                    <h3>
                                        <Link href="/case-study-details">
                                            <a>Email Marketing</a>
                                        </Link>
                                    </h3>
                                    <p>Best Strategic planning dolor sit amet consectetur adipiscing elit. Scelerisque amet odio velit eu auctor. Aliquet nam elit nulla eget sodales dui pulvinar.</p>
                                    
                                    <Link href="/case-study-details">
                                        <a className="projects-btn">
                                            Read More <i className="ri-arrow-right-line"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>          
                    </div>
                </div>

                {/* Shape Images */}
                <div className="projects-shape-1">
                    <img src="/images/projects/shape-1.png" alt="image" />
                </div>
                <div className="projects-shape-2">
                    <img src="/images/projects/shape-2.png" alt="image" />
                </div>
                <div className="projects-shape-3">
                    <img src="/images/projects/shape-3.png" alt="image" />
                </div>
                <div className="projects-shape-4">
                    <img src="/images/projects/shape-4.png" alt="image" />
                </div>
                <div className="projects-shape-5">
                    <img src="/images/projects/shape-5.png" alt="image" />
                </div>
            </div>

            <style jsx>{`
                .projects-area {
                    position: relative;
                    z-index: 1;
                    overflow: hidden;
                }
                .single-projects-box {
                    margin-bottom: 30px;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .single-projects-box .projects-image {
                    overflow: hidden;
                }
                .single-projects-box .projects-image img {
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    display: inline-block;
                }
                .single-projects-box .projects-content {
                    margin-top: 25px;
                }
                .single-projects-box .projects-content h3 {
                    font-size: 25px;
                    margin-bottom: 15px;
                }
                .single-projects-box .projects-content h3 a {
                    color: var(--black-color);
                }
                .single-projects-box .projects-content p {
                    margin-bottom: 15px;
                }
                .single-projects-box .projects-content .projects-btn {
                    color: var(--paragraph-color);
                    position: relative;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    font-weight: 500;
                }
                .single-projects-box .projects-content .projects-btn i {
                    position: absolute;
                    right: -20px;
                    top: 58%;
                    -webkit-transform: translateY(-58%);
                            transform: translateY(-58%);
                    font-size: 14px;
                }
                .single-projects-box:hover {
                    -webkit-transform: translateY(-10px);
                            transform: translateY(-10px);
                }
                .single-projects-box:hover .projects-image img {
                    -webkit-transform: scale(1.1);
                            transform: scale(1.1);
                }
                .single-projects-box:hover .projects-content h3 a {
                    color: var(--main-color);
                }
                .single-projects-box:hover .projects-content .projects-btn {
                    letter-spacing: 1px;
                    color: var(--main-color);
                }

                // Projects shape
                .projects-shape-1 {
                    position: absolute;
                    top: 25%;
                    left: 0;
                    -webkit-transform: translateY(-25%);
                            transform: translateY(-25%);
                }
                .projects-shape-2 {
                    position: absolute;
                    top: 20%;
                    left: 30%;
                    -webkit-transform: translateY(-20%) translateX(-30%);
                            transform: translateY(-20%) translateX(-30%);
                    z-index: -1;
                }
                .projects-shape-3 {
                    position: absolute;
                    top: 10%;
                    right: 15%;
                    -webkit-transform: translateY(-10%) translateX(-15%);
                            transform: translateY(-10%) translateX(-15%);
                }
                .projects-shape-4 {
                    position: absolute;
                    bottom: 15%;
                    right: 15%;
                    -webkit-transform: translateY(-15%) translateX(-15%);
                            transform: translateY(-15%) translateX(-15%);
                }
                .projects-shape-5 {
                    position: absolute;
                    bottom: 10%;
                    right: 12%;
                    -webkit-transform: translateY(-10%) translateX(-12%);
                            transform: translateY(-10%) translateX(-12%);
                }
	
                // Responsive Style
                @media only screen and (max-width: 767px) {
                    .projects-shape-1, .projects-shape-2, .projects-shape-3, .projects-shape-4, .projects-shape-5 {
                        display: none;
                    }
                    .single-projects-box .projects-content h3 {
                        font-size: 21px;
                        margin-bottom: 15px;
                    }
                }

                @media only screen and (min-width : 768px) and (max-width : 991px) {
                    .projects-shape-1, .projects-shape-2, .projects-shape-3, .projects-shape-4, .projects-shape-5 {
                        display: none;
                    }
                    .single-projects-box .projects-content h3 {
                        font-size: 22px;
                        margin-bottom: 15px;
                    }
                }

                @media only screen and (min-width : 992px) and (max-width : 1199px) {
                    .projects-shape-1, .projects-shape-2, .projects-shape-3, .projects-shape-4, .projects-shape-5 {
                        display: none;
                    }
                    .single-projects-box .projects-content h3 {
                        font-size: 20px;
                        margin-bottom: 15px;
                    }
                }
            `}</style>
        </>
    )
}

export default RecentCaseStudiesCard;