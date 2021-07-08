import React from 'react';
import Link from 'next/link';

const ServicesDetailsSidebar = () => {
    return (
        <>
            <div className="services-details-information">
                <ul className="services-list">
                    <li>
                        <Link href="/services-details">
                            <a>Brand Identity Design</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/services-details">
                            <a>Digital Marketing</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/services-details">
                            <a className="active">Web Design and Development</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/services-details">
                            <a>IT anad Startup Consulting</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/services-details">
                            <a>Cloud Computing Service</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/services-details">
                            <a>Domain and Hosting</a>
                        </Link>
                    </li>
                </ul>

                <div className="services-contact-info">
                    <h3>Let's Make Something Amazing Together!</h3>

                    <div className="info-box-one">
                        <i className="ri-customer-service-line"></i>
                        <a href="tel:3128959800">(312) 895-9800</a>
                    </div>

                    <div className="info-box-two">
                        <i className="ri-earth-line"></i>
                        <a href="mailto:hello.me@ozen.com">hello.me@ozen.com</a>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .services-details-information .services-list {
                    border: 1px solid #eceeef;
                }
                .services-details-information .services-list {
                    padding-left: 0;
                    margin-bottom: 0;
                    background-color: #F4F8FC;
                }
                .services-details-information .services-list li {
                    list-style-type: none;
                    border-bottom: 1px solid #eceeef;
                }
                .services-details-information .services-list li:last-child {
                    border-bottom: none;
                }
                .services-details-information .services-list li a {
                    display: inline-block;
                    padding: 20px 35px;
                    font-size: var(--font-size);
                    width: 100%;
                    font-weight: 500;
                }
                .services-details-information .services-list li a:hover, .services-details-information .services-list li a.active {
                    background-color: var(--white-color);
                    color: var(--main-color);
                }
                .services-details-information .services-list li:last-child a {
                    border-bottom: none;
                }
                .services-details-information .services-contact-info {
                    background-color: #F4F8FC;
                    padding: 40px 35px;
                    margin-top: 30px;
                    text-align: center;
                }
                .services-details-information .services-contact-info h3 {
                    font-size: 22px;
                    font-weight: 500;
                    margin-bottom: 0;
                    line-height: 1.5;
                }
                .services-details-information .services-contact-info .info-box-one {
                    background-color: var(--main-color);
                    padding: 30px;
                    border-radius: 5px;
                    margin-top: 25px;
                }
                .services-details-information .services-contact-info .info-box-one i {
                    display: block;
                    color: var(--white-color);
                    font-size: 30px;
                    margin-bottom: 15px;
                }
                .services-details-information .services-contact-info .info-box-one a {
                    color: var(--white-color);
                    font-size: var(--font-size);
                    font-weight: 500;
                }
                .services-details-information .services-contact-info .info-box-two {
                    background-color: #36CC72;
                    padding: 30px;
                    border-radius: 5px;
                    margin-top: 25px;
                }
                .services-details-information .services-contact-info .info-box-two i {
                    display: block;
                    color: var(--white-color);
                    font-size: 30px;
                    margin-bottom: 15px;
                }
                .services-details-information .services-contact-info .info-box-two a {
                    color: var(--white-color);
                    font-size: var(--font-size);
                    font-weight: 500;
                }
                    
                // Responsive Style
                @media only screen and (max-width: 767px) {
                    .services-details-information .services-list li a {
                        padding: 20px 25px;
                    }
                }

                @media only screen and (min-width : 768px) and (max-width : 991px) {
                    
                }

                @media only screen and (min-width : 992px) and (max-width : 1199px) {
                    .services-details-information .services-list li a {
                        padding: 10px 20px;
                        font-size: 14px;
                    }
                    .services-details-information .services-contact-info {
                        padding: 25px 15px;
                    }
                    .services-details-information .services-contact-info .info-box-one {
                        padding: 20px;
                    }
                    .services-details-information .services-contact-info .info-box-one a {
                        font-size: 14px;
                    }
                    .services-details-information .services-contact-info .info-box-two {
                        padding: 20px;
                    }
                    .services-details-information .services-contact-info .info-box-two a {
                        font-size: 14px;
                    }
                    .services-details-information .services-contact-info h3 {
                        font-size: 19px;
                    }

                    .services-details-overview-content h3 {
                        font-size: 26px;
                    }
                }
            `}</style>
        </>
    )
}

export default ServicesDetailsSidebar;