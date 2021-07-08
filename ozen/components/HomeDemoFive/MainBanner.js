import React from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

const MainBanner = () => {
    return (
        <>
            <div className="main-banner-with-large-shape-area without-banner-animation">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="main-banner-white-content">
                                <ScrollAnimation animateIn="fadeInLeft" delay={50} animateOnce={true}>
                                    <div className="tag">
                                        <img src="/images/main-banner/banner-two/tag-icon.png" alt="image" />
                                        # Ozen Best Startup Company
                                    </div>
                                </ScrollAnimation>

                                <ScrollAnimation animateIn="fadeInLeft" delay={100} animateOnce={true}>
                                    <h1 className="wow fadeInLeft">Ozen, Best IT Startup Consulting Company</h1>
                                </ScrollAnimation>

                                <ScrollAnimation animateIn="fadeInLeft" delay={150} animateOnce={true}>
                                    <p>Ozen is a digital marketing agency sit amet consectetur adipiscing elit. Odio at ut tincidunt porttitor molestie aliquet quam cursus. Rhoncus donec libero et volutpat erat posuere sagittis cursus posuere.</p>
                                </ScrollAnimation>

                                <ScrollAnimation animateIn="fadeInRight" delay={150} animateOnce={true}>
                                    <div className="banner-btn">
                                        <Link href="/about-us">
                                            <a className="default-btn">
                                                Read More 
                                                <i className="ri-arrow-right-line"></i>
                                                <span></span>
                                            </a>
                                        </Link>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="main-banner-image-wrap">
                                <ScrollAnimation animateIn="fadeInUp" delay={150} animateOnce={true}>
                                    <img src="/images/main-banner/banner-two/main-pic.png" alt="image" />
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="main-banner-shape-5">
                    <img src="/images/main-banner/banner-two/shape-1.png" alt="image" />
                </div>
                <div className="main-banner-shape-6">
                    <img src="/images/main-banner/banner-two/shape-2.png" alt="image" />
                </div>
                <div className="main-banner-shape-7">
                    <img src="/images/main-banner/banner-two/shape-3.png" alt="image" />
                </div>
                <div className="main-banner-shape-8">
                    <img src="/images/main-banner/banner-two/shape-4.png" alt="image" />
                </div>
                <div className="main-banner-large-shape">
                    <img src="/images/main-banner/banner-two/large-shape.png" alt="image" />
                </div>
            </div>


            <style jsx>{`
                .main-banner-with-large-shape-area {
                    padding-top: 265px;
                    padding-bottom: 180px;
                    position: relative;
                    z-index: 1;
                    overflow: hidden;
                    background: var(--main-gradient-color);
                }
                .main-banner-image-wrap {
                    text-align: right;
                }
                .main-banner-white-content .tag {
                    display: inline-block;
                    background: rgba(244, 248, 252, 0.3);
                    padding: 12px 25px 12px 55px;
                    border-radius: 50px;
                    font-size: 14px;
                    font-weight: 500;
                    position: relative;
                    color: var(--white-color);
                }
                .main-banner-white-content .tag img {
                    position: absolute;
                    left: 25px;
                    top: 50%;
                    -webkit-transform: translateY(-50%);
                            transform: translateY(-50%);
                }
                .main-banner-white-content h1 {
                    font-size: 60px;
                    margin-top: 30px;
                    margin-bottom: 20px;
                    font-weight: bold;
                    color: var(--white-color);
                }
                .main-banner-white-content p {
                    margin-bottom: 0;
                    color: var(--white-color);
                }
                .main-banner-white-content .banner-btn {
                    margin-top: 30px;
                }
                .main-banner-white-content .banner-btn .default-btn {
                    background-color: #2E2F46;
                }
                .main-banner-white-content .banner-btn .default-btn span {
                    background-color: var(--main-color);
                }
                .main-banner-white-content .banner-btn .default-btn:hover {
                    color: var(--white-color);
                }
  
                // Shape
                .main-banner-large-shape {
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: -1;
                }
                .main-banner-large-shape img {
                    width: 100%;
                }
                .main-banner-shape-5 {  
                    position: absolute;
                    top: 20%;
                    left: 35%;
                    -webkit-transform: translateY(-20%) translateX(-35%);
                            transform: translateY(-20%) translateX(-35%);
                }
                .main-banner-shape-6 {
                    position: absolute;
                    top: 25%;
                    left: 40%;
                    -webkit-transform: translateY(-25%) translateX(-40%);
                            transform: translateY(-25%) translateX(-40%);
                }
                .main-banner-shape-7 {
                    position: absolute;
                    top: 20%;
                    right: 15%;
                    -webkit-transform: translateY(-20%) translateX(-15%);
                            transform: translateY(-20%) translateX(-15%);
                }
                .main-banner-shape-8 {
                    position: absolute;
                    bottom: 20%;
                    left: 38%;
                    -webkit-transform: translateY(-20%) translateX(-38%);
                            transform: translateY(-20%) translateX(-38%);
                }
                    
                // Responsive Style
                @media only screen and (max-width: 767px) {
                    .main-banner-with-large-shape-area.without-banner-animation {
                        padding-top: 200px;
                        padding-bottom: 60px;
                    }
                    .main-banner-white-content {
                        text-align: center;
                    }
                    .main-banner-white-content h1 {
                        font-size: 30px;
                    }
                    .main-banner-white-content p {
                        font-size: 15px;
                    }
                    .main-banner-image-wrap {
                        text-align: center;
                        margin-top: 30px;
                    }
                    
                    .main-banner-image {
                        margin-top: 35px;
                        text-align: center;
                    }
                    .main-banner-image div {
                        position: relative;
                    }
                    .main-banner-image div:nth-child(1) {
                        display: none;
                    }
                    .main-banner-image div:nth-child(2) {
                        display: none;
                    }
                    .main-banner-image div:nth-child(3) {
                        display: none;
                    }
                    .main-banner-image div:nth-child(4) {
                        display: none;
                    }
                    .main-banner-image div:nth-child(5) {
                        display: none;
                    }
                    .main-banner-image div:nth-child(6) {
                        display: none;
                    }
                    .main-banner-image div:nth-child(7) {
                        display: none;
                    }
                    .main-banner-image div:nth-child(8) {
                        display: none;
                    }
                    .main-banner-image div:nth-child(9) {
                        display: none;
                    }
                    .main-banner-image div:last-child {
                        display: block;
                    }

                    .main-banner-large-shape {
                        display: none;
                    }

                    // Shape
                    .main-banner-shape-5 {
                        display: none;
                    }
                    .main-banner-shape-6 {
                        display: none;
                    }
                    .main-banner-shape-7 {
                        display: none;
                    }
                    .main-banner-shape-8 {
                        display: none;
                    }
                }

                @media only screen and (min-width : 768px) and (max-width : 991px) {
                    .main-banner-with-large-shape-area {
                        padding-top: 200px;
                        padding-bottom: 70px;
                    }

                    .main-banner-white-content {
                        text-align: center;
                    }
                    .main-banner-white-content h1 {
                        font-size: 50px;
                    }
                    .main-banner-image-wrap {
                        text-align: center;
                        margin-top: 60px;
                    }

                    .main-banner-image {
                        margin-top: 35px;
                        text-align: center;
                    }
                    .main-banner-image div {
                        position: relative;
                    }
                    .main-banner-image div:nth-child(1) {
                        display: none;
                    }
                    .main-banner-image div:nth-child(2) {
                        display: none;
                    }
                    .main-banner-image div:nth-child(3) {
                        display: none;
                    }
                    .main-banner-image div:nth-child(4) {
                        display: none;
                    }
                    .main-banner-image div:nth-child(5) {
                        display: none;
                    }
                    .main-banner-image div:nth-child(6) {
                        display: none;
                    }
                    .main-banner-image div:nth-child(7) {
                        display: none;
                    }
                    .main-banner-image div:nth-child(8) {
                        display: none;
                    }
                    .main-banner-image div:nth-child(9) {
                        display: none;
                    }
                    .main-banner-image div:last-child {
                        display: block;
                    }

                    .main-banner-large-shape {
                        display: none;
                    }

                    // Shape
                    .main-banner-shape-5 {
                        display: none;
                    }
                    .main-banner-shape-6 {
                        display: none;
                    }
                    .main-banner-shape-7 {
                        display: none;
                    }
                    .main-banner-shape-8 {
                        display: none;
                    }
                }

                @media only screen and (min-width : 992px) and (max-width : 1199px) {
                    .main-banner-with-large-shape-area {
                        padding-top: 230px;
                        padding-bottom: 110px;
                    }

                    .main-banner-white-content h1 {
                        font-size: 30px;
                    }
                    .main-banner-white-content p {
                        font-size: 14px;
                    }

                    .main-banner-image {
                        text-align: center;
                    }
                    .main-banner-image div {
                        position: relative;
                    }
                    .main-banner-image div:nth-child(1) {
                        display: none;
                    }
                    .main-banner-image div:nth-child(2) {
                        display: none;
                    }
                    .main-banner-image div:nth-child(3) {
                        display: none;
                    }
                    .main-banner-image div:nth-child(4) {
                        display: none;
                    }
                    .main-banner-image div:nth-child(5) {
                        display: none;
                    }
                    .main-banner-image div:nth-child(6) {
                        display: none;
                    }
                    .main-banner-image div:nth-child(7) {
                        display: none;
                    }
                    .main-banner-image div:nth-child(8) {
                        display: none;
                    }
                    .main-banner-image div:nth-child(9) {
                        display: none;
                    }
                    .main-banner-image div:last-child {
                        display: block;
                    }
                }

                @media only screen and (min-width: 1200px) and (max-width: 1399px) {
                    .main-banner-with-large-shape-area {
                        padding-top: 310px;
                        padding-bottom: 220px;
                    }
                    .main-banner-white-content h1 {
                        font-size: 45px;
                    }
                    .main-banner-white-content p {
                        font-size: 15px;
                    }
                    
                    .main-banner-image div:nth-child(4) {
                        left: 270px;
                        top: -5px;
                    }
                    .main-banner-image div:nth-child(5) {
                        bottom: -145px;
                        right: 100px;
                    }
                    .main-banner-image div:nth-child(6) {
                        right: 90px;
                        top: 200px;
                    }
                    .main-banner-image div:nth-child(7) {
                        top: -185px;
                        right: 50px;
                    }
                    .main-banner-image div:nth-child(8) {
                        right: 0;
                        top: 0;
                    }
                    .main-banner-image div:nth-child(9) {
                        top: 85px;
                    }
                }

                @media only screen and (min-width: 1400px) and (max-width: 1449px) {
                    .main-banner-white-content h1 {
                        font-size: 55px;
                    }
                    .main-banner-white-content p {
                        font-size: 15px;
                    }
                }
            `}</style>
        </>
    )
}

export default MainBanner;