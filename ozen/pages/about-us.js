import React from 'react';
import NavbarFour from '../components/_App/NavbarFour';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import FeaturesCard from '../components/HomeDemoOne/FeaturesCard';
import FunFacts from '../components/Common/FunFacts';
import TechSupport from '../components/Common/TechSupport';
import Team from '../components/Common/Team';
import OurRespectiveClients from '../components/Common/OurRespectiveClients';
import Faqs from '../components/Common/Faqs';

const AboutUs = () => {
    return (
        <>
			<NavbarFour />
			
			<PageBanner 
                pageTitle="About Us" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="About Us"
            /> 

            <FeaturesCard />
            
            <>
                <div className="about-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="about-image">
                                    <img src="/images/about/about.png" alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="about-item">
                                    <div className="about-content">
                                        <div className="tag">
                                            <img src="/images/about/tag-icon.png" alt="image" />
                                        </div>
                                        <h3>Over 12 Year Professional Experiences</h3>
                                        <p>Best Strategic planning dolor sit amet consectetur adipiscing elit. Scelerisque amet odio velit  auctor. nam elit nulla eget sodales dui pulvinar. Best Strategic planning dolor sit sectetur morethe Scelerisque amet odio velit eu auctor.</p>
                                    </div>

                                    <div className="about-inner-content">
                                        <img src="/images/about/img1.png" alt="image" />
                                        <p>Best Strategic planning dolor sit amet consectetur adipiscing elit. risque amet odio velit eu auctor. Aliquet nam elit nulla eget sodales dui pulvinar. Best eone Strategic planning dolor.</p>
                                    </div>

                                    <div className="about-inner-content">
                                        <img src="/images/about/img2.png" alt="image" />
                                        <p>Ozen digital agency for your start  planning dolor sit amet consectetur adipiscing elit. Scelerisque amet odio velit eu auctor. Aliquet nam elit nulla eget sodales dui pulvinar. Best Strategic planning.</p>
                                    </div>

                                    <div className="about-inner-content">
                                        <img src="/images/about/img3.png" alt="image" />
                                        <p>Best Strategic planning dolor sit amet consectetur adipiscing elit. risque amet odio velit eu auctor. Aliquet nam elit nulla eget sodales dui pulvinar. Best eone Strategic planning dolor.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Shape Images */}
                    <div className="about-shape-1">
                        <img src="/images/about/shape-1.png" alt="image" />
                    </div>
                    <div className="about-shape-2">
                        <img src="/images/about/shape-2.png" alt="image" />
                    </div>
                    <div className="about-shape-3">
                        <img src="/images/about/shape-3.png" alt="image" />
                    </div>
                    <div className="about-shape-4">
                        <img src="/images/about/shape-4.png" alt="image" />
                    </div>
                    <div className="about-shape-5">
                        <img src="/images/about/shape-5.png" alt="image" />
                    </div>
                    <div className="about-shape-6">
                        <img src="/images/about/shape-4.png" alt="image" />
                    </div>
                    <div className="about-shape-7">
                        <img src="/images/about/shape-5.png" alt="image" />
                    </div>
                </div>

                {/* About Us Style */}
                <style jsx>{`
                    .about-area {
                        position: relative;
                        z-index: 1;
                        overflow: hidden;
                    }
                    .about-area::before {
                        position: absolute;
                        content: "";
                        height: 100%;
                        width: 50%;
                        background-color: #F4F8FC;
                        left: 0;
                        top: 0;
                        z-index: -1;
                    }
                    .about-area::after {
                        position: absolute;
                        content: "";
                        height: 100%;
                        width: 50%;
                        background-color: var(--white-color);
                        right: 0;
                        top: 0;
                        z-index: -1;
                    }

                    .about-image {
                        padding-top: 75px;
                        padding-bottom: 75px;
                        padding-right: 30px;
                    }
                    .about-item {
                        padding-left: 50px;
                    }
                    .about-item .about-content .tag {
                        display: inline-block;
                        height: 50px;
                        width: 50px;
                        line-height: 50px;
                        background-color: var(--white-color);
                        text-align: center;
                        border-radius: 50px;
                        -webkit-box-shadow: 0 0 1.25rem rgba(108, 118, 134, 0.1);
                                box-shadow: 0 0 1.25rem rgba(108, 118, 134, 0.1);
                    }
                    .about-item .about-content h3 {
                        font-size: 40px;
                        margin-top: 25px;
                        margin-bottom: 20px;
                        line-height: 1.4;
                    }
                    .about-item .about-content p {
                        position: relative;
                        z-index: 1;
                    }
                    .about-item .about-inner-content {
                        position: relative;
                        margin-top: 30px;
                        padding-left: 80px;
                    }
                    .about-item .about-inner-content img {
                        position: absolute;
                        left: 0;
                        top: 0;
                    }
                    .about-item .about-inner-content h4 {
                        font-size: 22px;
                        margin-bottom: 12px;
                        font-weight: 500;
                    }
                    .about-item .about-btn {
                        margin-top: 30px;
                        padding-left: 85px;
                    }
                    .about-item .about-btn .default-btn {
                        background-color: var(--optional-color);
                    }
                    .about-item .about-btn .default-btn span {
                        background-color: var(--main-color);
                    }
                    
                    // shape
                    .about-shape-1 {
                        position: absolute;
                        top: 8%;
                        left: 10%;
                        -webkit-transform: translateY(-8%) translateX(-10%);
                                transform: translateY(-8%) translateX(-10%);
                    }
                    .about-shape-2 {
                        position: absolute;
                        bottom: 2%;
                        left: 5%;
                        -webkit-transform: translateY(-2%) translateX(-5%);
                                transform: translateY(-2%) translateX(-5%);
                    }
                    .about-shape-3 {
                        position: absolute;
                        top: 5%;
                        right: 15%;
                        -webkit-transform: translateY(-5%) translateX(-15%);
                                transform: translateY(-5%) translateX(-15%);
                    }
                    .about-shape-4 {
                        position: absolute;
                        top: 30%;
                        left: 50%;
                        -webkit-transform: translateY(-30%) translateX(-50%);
                                transform: translateY(-30%) translateX(-50%);
                    }
                    .about-shape-5 {
                        position: absolute;
                        top: 35%;
                        left: 50%;
                        -webkit-transform: translateY(-35%) translateX(-50%);
                                transform: translateY(-35%) translateX(-50%);
                    }
                    .about-shape-6 {
                        position: absolute;
                        bottom: 10%;
                        right: 20%;
                        -webkit-transform: translateY(-10%) translateX(-20%);
                                transform: translateY(-10%) translateX(-20%);
                    }
                    .about-shape-7 {
                        position: absolute;
                        bottom: 5%;
                        right: 18%;
                        -webkit-transform: translateY(-5%) translateX(-18%);
                                transform: translateY(-5%) translateX(-18%);
                    }

                    // Responsive Style
                    @media only screen and (max-width: 767px) {
                        .about-area {
                            padding-bottom: 50px;
                        }
                        .about-area::after {
                            background-color: #F4F8FC;
                        }
                        .about-image {
                            padding-top: 50px;
                            padding-bottom: 50px;
                            padding-right: 0;
                            text-align: center;
                        }
                        .about-item {
                            padding-left: 0;
                        }
                        .about-item .about-content h3 {
                            font-size: 24px;
                        }
                        .about-item .about-content p {
                            font-size: 15px;
                        }
                        .about-item .about-inner-content {
                            padding-left: 0;
                            text-align: center;
                        }
                        .about-item .about-inner-content img {
                            position: relative;
                            margin-bottom: 15px;
                        }
                        .about-item .about-btn {
                            padding-left: 0;
                            text-align: center;
                        }
                        .about-shape-1 {
                            display: none;
                        }
                        .about-shape-2 {
                            display: none;
                        }
                        .about-shape-3 {
                            display: none;
                        }
                        .about-shape-4 {
                            display: none;
                        }
                        .about-shape-5 {
                            display: none;
                        }
                        .about-shape-6 {
                            display: none;
                        }
                        .about-shape-7 {
                            display: none;
                        }
                    }

                    @media only screen and (min-width : 768px) and (max-width : 991px) {
                        .about-area {
                            padding-bottom: 70px;
                        }
                        .about-area::after {
                            background-color: #F4F8FC;
                        }
                        .about-image {
                            padding-top: 50px;
                            padding-bottom: 50px;
                            padding-right: 0;
                            text-align: center;
                        }
                        .about-item {
                            padding-left: 0;
                        }
                        .about-shape-1 {
                            display: none;
                        }
                        .about-shape-2 {
                            display: none;
                        }
                        .about-shape-3 {
                            display: none;
                        }
                        .about-shape-4 {
                            display: none;
                        }
                        .about-shape-5 {
                            display: none;
                        }
                        .about-shape-6 {
                            display: none;
                        }
                        .about-shape-7 {
                            display: none;
                        }
                    }

                    @media only screen and (min-width : 992px) and (max-width : 1199px) {
                        .about-image {
                            padding-top: 0;
                            padding-bottom: 0;
                            padding-right: 0;
                        }
                        .about-item {
                            padding-left: 15px;
                        }
                        .about-item .about-content p {
                            font-size: 14px;
                        }
                        .about-item .about-inner-content p {
                            font-size: 14px;
                        }
                    }
                `}</style>
            </>

            <div className="ptb-100">
                <FunFacts />
            </div>

            <TechSupport />

            <Team />

            <OurRespectiveClients />

            <Faqs />

			<Footer />
		</>
    )
}

export default AboutUs;