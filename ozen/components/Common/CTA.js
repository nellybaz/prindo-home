import React from 'react';
import Link from 'next/link';

const CTA = () => {
    return (
        <>
            <div className="overview-area">
                <div className="container">
                    <div className="overview-box">
                        <div className="overview-content">
                            <h3>Let's Make Something Amazing Together</h3>

                            <div className="overview-btn">
                                <Link href="/contact">
                                    <a className="overview-btn-one">Get Started</a>
                                </Link>
                                <img src="/images/overview/bar.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="overview-shape-1">
                    <img src="/images/overview/shape-1.png" alt="image" />
                </div>
                <div className="overview-shape-2">
                    <img src="/images/overview/shape-2.png" alt="image" />
                </div>
                <div className="overview-shape-3">
                    <img src="/images/overview/shape-3.png" alt="image" />
                </div>
                <div className="overview-shape-4">
                    <img src="/images/overview/shape-4.png" alt="image" />
                </div>
                <div className="overview-shape-5">
                    <img src="/images/overview/shape-5.png" alt="image" />
                </div>
            </div>

            {/* CTA Style */}
            <style jsx>{`
                .overview-area {
                    position: relative;
                    z-index: 1;
                    overflow: hidden;
                }
                .overview-box {
                    background-color: var(--main-color);
                    border-radius: 5px;
                    padding-top: 85px;
                    padding-bottom: 85px;
                    padding-left: 50px;
                    padding-right: 50px;
                }
                .overview-content {
                    text-align: center;
                }
                .overview-content h3 {
                    font-size: 36px;
                    margin-bottom: 0;
                    color: var(--white-color);
                }
                .overview-content .overview-btn {
                    margin-top: 30px;
                }
                .overview-content .overview-btn .overview-btn-one {
                    font-size: 22px;
                    font-weight: 400;
                    color: var(--white-color);
                }
                .overview-content .overview-btn img {
                    display: block;
                    margin: auto;
                }
                .overview-shape-1 {
                    position: absolute;
                    top: 50%;
                    left: 20%;
                    -webkit-transform: translateY(-50%) translateX(-25%);
                            transform: translateY(-50%) translateX(-25%);
                } 
                .overview-shape-2 {
                    position: absolute;
                    top: 70%;
                    left: 25%;
                    -webkit-transform: translateY(-55%) translateX(-28%);
                            transform: translateY(-55%) translateX(-28%);
                } 
                .overview-shape-3 {
                    position: absolute;
                    top: 10%;
                    left: 50%;
                    -webkit-transform: translateY(-10%) translateX(-50%);
                            transform: translateY(-10%) translateX(-50%);
                } 
                .overview-shape-4 {
                    position: absolute;
                    bottom: 35%;
                    right: 20%;
                    -webkit-transform: translateY(-35%) translateX(-20%);
                            transform: translateY(-35%) translateX(-20%);
                }
                .overview-shape-5 {
                    position: absolute;
                    bottom: 15%;
                    right: 22%;
                    -webkit-transform: translateY(-15%) translateX(-22%);
                            transform: translateY(-15%) translateX(-22%);
                }
                
                // Responsive Style
                @media only screen and (max-width: 767px) {
                    .overview-box {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        padding-left: 20px;
                        padding-right: 20px;
                    }
                    .overview-shape-1 {
                        display: none;
                    }
                    .overview-shape-2 {
                        display: none;
                    }
                    .overview-shape-3 {
                        display: none;
                    }
                    .overview-shape-4 {
                        display: none;
                    }
                    .overview-shape-5 {
                        display: none;
                    }
                    .overview-content h3 {
                        font-size: 22px;
                        line-height: 1.5;
                    }
                    .overview-content .overview-btn .overview-btn-one {
                        font-size: 18px;
                    }
                }

                @media only screen and (min-width : 768px) and (max-width : 991px) {
                    .overview-box {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        padding-left: 20px;
                        padding-right: 20px;
                    }
                    .overview-shape-1 {
                        display: none;
                    }
                    .overview-shape-2 {
                        display: none;
                    }
                    .overview-shape-3 {
                        display: none;
                    }
                    .overview-shape-4 {
                        display: none;
                    }
                    .overview-shape-5 {
                        display: none;
                    }
                    .overview-content h3 {
                        font-size: 30px;
                    }
                    .overview-content .overview-btn .overview-btn-one {
                        font-size: 18px;
                    }
                }

                @media only screen and (min-width : 992px) and (max-width : 1199px) {
                    
                }
                
            `}</style>
        </>
    )
}

export default CTA;