import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const MainBanner = () => {
    return (
        <>
            <div className="main-banner-box-area">
                <div className="container">
                    <div className="main-banner-inner-box">
                        <div className="main-banner-box-content">
                            <ScrollAnimation animateIn="fadeInUp" delay={100} animateOnce={true}>
                                <div className="tag">
                                    <img src="/images/main-banner/banner-three/tag-icon.png" alt="image" />
                                    # Ozen Best Startup Company
                                </div>
                            </ScrollAnimation>

                            <ScrollAnimation animateIn="fadeInDown" delay={100} animateOnce={true}>
                                <h1>Ozen, Best IT & Technology Consulting Service in Your Area</h1>
                            </ScrollAnimation>
                        </div>

                        <div className="main-banner-box-image">
                            <ScrollAnimation animateIn="fadeInUp" delay={100} animateOnce={true}>
                                <img src="/images/main-banner/banner-three/main-pic.png" alt="Main Pic" />
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .main-banner-box-area {
                    padding-top: 100px;
                    padding-bottom: 100px;
                }
                .main-banner-inner-box {
                    max-width: 885px;
                    margin: auto;
                    text-align: center;
                }
                .main-banner-box-content {
                    position: relative;
                }
                .main-banner-box-content .tag {
                    display: inline-block;
                    background-color: #F4F8FC;
                    padding: 12px 25px 12px 55px;
                    border-radius: 50px;
                    font-size: 14px;
                    font-weight: 500;
                    position: relative;
                }
                .main-banner-box-content .tag img {
                    position: absolute;
                    left: 25px;
                    top: 50%;
                    -webkit-transform: translateY(-50%);
                            transform: translateY(-50%);
                }
                .main-banner-box-content h1 {
                    font-size: 48px;
                    margin-top: 35px;
                    margin-bottom: 0;
                    line-height: 1.4;
                }
                .main-banner-box-image {
                    margin-top: 50px;
                }
                
                // Responsive Style
                @media only screen and (max-width: 767px) {
                    .main-banner-box-area {
                        padding-top: 60px;
                        padding-bottom: 60px;
                    }
                    .main-banner-box-content h1 {
                        font-size: 30px;
                    }
                    .main-banner-box-image {
                        margin-top: 30px;
                        -webkit-animation: unset;
                                animation: unset;
                    }
                }

                @media only screen and (min-width : 768px) and (max-width : 991px) {
                    .main-banner-box-area {
                        padding-top: 80px;
                        padding-bottom: 80px;
                    }
                    .main-banner-box-content h1 {
                        font-size: 45px;
                    }
                    .main-banner-box-image {
                        margin-top: 30px;
                        -webkit-animation: unset;
                                animation: unset;
                    }
                }

                @media only screen and (min-width : 992px) and (max-width : 1199px) {
                    
                }
            `}</style>
        </>
    )
}

export default MainBanner;