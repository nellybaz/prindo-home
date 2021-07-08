import React from 'react';

const AboutUsContent = () => {
    return (
        <>
            <div className="analysis-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="analysis-image">
                                <img src="/images/analysis/analysis.png" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="analysis-item">
                                <div className="analysis-content">
                                    <h3>Over 12 Year Professional Experiences</h3>
                                    <p>Best Strategic planning dolor sit amet consectetur adipiscing elit. Scelerisque amet odio velit  auctor. nam elit nulla eget sodales dui pulvinar. Best Strategic planning dolor sit sectetur morethe Scelerisque amet odio velit eu auctor.</p>
                                </div>

                                <div className="analysis-inner-content">
                                    <img src="/images/analysis/img1.png" alt="image" />
                                    <p>Best Strategic planning dolor sit amet consectetur adipiscing elit. risque amet odio velit eu auctor. Aliquet nam elit nulla eget sodales dui pulvinar. Best eone Strategic planning dolor.</p>
                                </div>

                                <div className="analysis-inner-content">
                                    <img src="/images/analysis/img2.png" alt="image" />
                                    <p>Ozen digital agency for your start  planning dolor sit amet, consectetur adipiscing elit. Scelerisque amet odio velit, eu, auctor. Aliquet nam elit nulla</p>
                                </div>

                                <div className="analysis-inner-content">
                                    <img src="/images/analysis/img3.png" alt="image" />
                                    <p>Best Strategic planning dolor sit amet, consectetur adipiscing elit. Scelerisque amet odio velit, eu, auctor. Aliquet nam elit nulla.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Shape Images */}
                <div className="analysis-shape-1">
                    <img src="/images/analysis/shape-1.png" alt="image" />
                </div>
                <div className="analysis-shape-2">
                    <img src="/images/analysis/shape-2.png" alt="image" />
                </div>
                <div className="analysis-shape-3">
                    <img src="/images/analysis/shape-3.png" alt="image" />
                </div>
                <div className="analysis-shape-4">
                    <img src="/images/analysis/shape-4.png" alt="image" />
                </div>
                <div className="analysis-shape-5">
                    <img src="/images/analysis/shape-5.png" alt="image" />
                </div>
            </div>

            {/* About Us Style */}
            <style jsx>{`
                .analysis-area {
                    position: relative;
                    z-index: 1;
                    overflow: hidden;
                }
                .analysis-item {
                    padding-left: 30px;
                }
                .analysis-item .analysis-content h3 {
                    font-size: 40px;
                    margin-bottom: 20px;
                    line-height: 1.4;
                }
                .analysis-item .analysis-content p {
                    position: relative;
                    z-index: 1;
                }
                .analysis-item .analysis-inner-content {
                    position: relative;
                    margin-top: 30px;
                    padding-left: 80px;
                }
                
                .analysis-item .analysis-inner-content img {
                    position: absolute;
                    left: 0;
                    top: 0;
                }
                .analysis-shape-1 {
                    position: absolute;
                    top: 5%;
                    left: 10%;
                    -webkit-transform: translateY(-5%) translateX(-10%);
                            transform: translateY(-5%) translateX(-10%);
                    max-width: 80px;
                }
                .analysis-shape-2 {
                    position: absolute;
                    top: 5%;
                    left: 30%;
                    -webkit-transform: translateY(-5%) translateX(-30%);
                            transform: translateY(-5%) translateX(-30%);
                    max-width: 45px;
                }
                .analysis-shape-3 {
                    position: absolute;
                    bottom: 15%;
                    left: 34%;
                    -webkit-transform: translateY(-15%) translateX(-34%);
                            transform: translateY(-15%) translateX(-34%);
                }
                .analysis-shape-4 {
                    position: absolute;
                    bottom: 10%;
                    left: 35%;
                    -webkit-transform: translateY(-10%) translateX(-35%);
                            transform: translateY(-10%) translateX(-35%);
                }
                .analysis-shape-5 {
                    position: absolute;
                    bottom: 8%;
                    left: 50%;
                    -webkit-transform: translateY(-8%) translateX(-50%);
                            transform: translateY(-8%) translateX(-50%);
                }
	
                // Responsive Style
                @media only screen and (max-width: 767px) {
                    .analysis-image {
                        text-align: center;
                    }
                    .analysis-item {
                        padding-left: 0;
                        margin-top: 30px;
                    }
                    .analysis-item .analysis-content h3 {
                        font-size: 24px;
                    }
                    .analysis-item .analysis-content p {
                        font-size: 15px;
                    }
                    .analysis-item .analysis-inner-content {
                        padding-left: 0;
                        text-align: center;
                    }
                    .analysis-item .analysis-inner-content img {
                        position: relative;
                        margin-bottom: 15px;
                    }
                    .analysis-shape-1, .analysis-shape-2, .analysis-shape-3, .analysis-shape-4, .analysis-shape-5 {
                        display: none;
                    } 
                }

                @media only screen and (min-width : 768px) and (max-width : 991px) {
                    .analysis-image {
                        text-align: center;
                    }
                    .analysis-item {
                        padding-left: 0;
                        margin-top: 30px;
                    }
                    .analysis-shape-1, .analysis-shape-2, .analysis-shape-3, .analysis-shape-4, .analysis-shape-5 {
                        display: none;
                    }
                }

                @media only screen and (min-width : 992px) and (max-width : 1199px) {
                    .analysis-item .analysis-content h3 {
                        font-size: 25px;
                    }
                    .analysis-item .analysis-content p {
                        font-size: 14px;
                    }
                    .analysis-item .analysis-inner-content p {
                        font-size: 14px;
                    }
                }
            `}</style>
        </>
    )
}

export default AboutUsContent;