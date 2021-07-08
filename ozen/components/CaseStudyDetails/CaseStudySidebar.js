import React from 'react';

const CaseStudySidebar = () => {
    return (
        <>
            <div className="case-details-information">
                <ul className="information-list">
                    <li>
                        <span>Share On :</span>
                        <a href="#" target="_blank">
                            <i className="ri-facebook-fill"></i>
                        </a>
                        <a href="#" target="_blank">
                            <i className="ri-twitter-fill"></i>
                        </a>
                        <a href="#" target="_blank">
                            <i className="ri-linkedin-fill"></i>
                        </a>
                        <a href="#" target="_blank">
                            <i className="ri-messenger-fill"></i>
                        </a>
                    </li>

                    <li>
                        <span>Category :</span> Finance & Management
                    </li>

                    <li>
                        <span>Client :</span> <a href="#" target="_blank">ThemeForest.com</a>
                    </li>

                    <li>
                        <span>Website :</span> <a href="https://envytheme.com/" target="_blank">EnvyTheme.com</a>
                    </li>

                    <li>
                        <span>Date :</span> 24 March 2021
                    </li>
                </ul>

                <div className="case-contact-info">
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
                .case-details-information .information-list {
                    padding-left: 0;
                    margin-bottom: 0;
                }
                .case-details-information .information-list li {
                    list-style-type: none;
                    font-size: 15px;
                    font-weight: 400;
                    color: #79798D;
                    margin-bottom: 20px;
                }
                .case-details-information .information-list li:last-child {
                    margin-bottom: 0;
                }
                .case-details-information .information-list li span {
                    font-size: var(--font-size);
                    font-weight: 500;
                    color: var(--paragraph-color);
                    margin-right: 15px;
                }
                .case-details-information .information-list li a {
                    color: #79798D;
                    margin-right: 5px;
                }
                .case-details-information .information-list li a:last-child {
                    margin-right: 0;
                }
                .case-details-information .information-list li a:hover {
                    color: var(--main-color);
                    letter-spacing: 1px;
                }
                .case-details-information .information-list li a i {
                    display: inline-block;
                    height: 30px;
                    width: 30px;
                    line-height: 30px;
                    background-color: #eeeeee;
                    color: var(--main-color);
                    border-radius: 50px;
                    text-align: center;
                    font-size: 13px;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .case-details-information .information-list li a i:hover {
                    background-color: var(--main-color);
                    color: var(--white-color);
                    -webkit-transform: translateY(-5px);
                            transform: translateY(-5px);
                }
                .case-details-information .case-contact-info {
                    background-color: #F4F8FC;
                    padding: 40px 35px;
                    margin-top: 30px;
                    text-align: center;
                }
                .case-details-information .case-contact-info h3 {
                    font-size: 22px;
                    font-weight: 400;
                    margin-bottom: 0;
                    line-height: 1.5;
                }
                .case-details-information .case-contact-info .info-box-one {
                    background-color: var(--main-color);
                    padding: 30px;
                    border-radius: 5px;
                    margin-top: 25px;
                }
                .case-details-information .case-contact-info .info-box-one i {
                    display: block;
                    color: var(--white-color);
                    font-size: 30px;
                    margin-bottom: 15px;
                }
                .case-details-information .case-contact-info .info-box-one a {
                    color: var(--white-color);
                    font-size: var(--font-size);
                    font-weight: 500;
                }
                .case-details-information .case-contact-info .info-box-two {
                    background-color: #36CC72;
                    padding: 30px;
                    border-radius: 5px;
                    margin-top: 25px;
                }
                .case-details-information .case-contact-info .info-box-two i {
                    display: block;
                    color: var(--white-color);
                    font-size: 30px;
                    margin-bottom: 15px;
                }
                .case-details-information .case-contact-info .info-box-two a {
                    color: var(--white-color);
                    font-size: var(--font-size);
                    font-weight: 500;
                }
	
                // Responsive Style
                @media only screen and (max-width: 767px) {
                    .case-details-information {
                        margin-top: 30px;
                    }
                    .case-details-information .information-list {
                        border: 1px solid #eee;
                        padding: 10px 15px;
                    }
                    .case-details-information .information-list li {
                        font-size: 14px;
                        margin-bottom: 15px; 
                    }
                }

                @media only screen and (min-width : 768px) and (max-width : 991px) {
                    .case-details-information {
                        margin-top: 30px;
                    }
                    .case-details-information .information-list {
                        border: 1px solid #eee;
                        padding: 30px 35px;
                    }
                    .case-details-information .information-list li {
                        margin-bottom: 20px; 
                    }
                }

                @media only screen and (min-width : 992px) and (max-width : 1199px) {
                    .case-details-information .case-contact-info {
                        padding: 25px 15px;
                    }
                    .case-details-information .information-list li {
                        font-size: 14px;
                        margin-bottom: 10px;
                    }
                    .case-details-information .information-list li span {
                        margin-right: 5px;
                    }
                    .case-details-information .case-contact-info .info-box-one {
                        padding: 20px;
                    }
                    .case-details-information .case-contact-info .info-box-one a {
                        font-size: 14px;
                    }
                    .case-details-information .case-contact-info .info-box-two {
                        padding: 20px;
                    }
                    .case-details-information .case-contact-info .info-box-two a {
                        font-size: 14px;
                    }
                    .case-details-information .information-list li a i {
                        height: 28px;
                        width: 28px;
                        line-height: 28px;
                        font-size: 12px;
                    }
                    
                }
            `}</style>
        </>
    )
}

export default CaseStudySidebar;