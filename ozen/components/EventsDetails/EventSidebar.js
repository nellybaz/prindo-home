import React from 'react';
import Link from 'next/link';

const EventSidebar = () => {
    return (
        <>
            <div className="events-details-info">
                <ul className="info">
                    <li className="price">
                        <div className="d-flex justify-content-between align-items-center">
                            <span>Cost</span>
                            $149
                        </div>
                    </li>
                    <li>
                        <div className="d-flex justify-content-between align-items-center">
                            <span>Total Slot</span>
                            1500
                        </div>
                    </li>
                    <li>
                        <div className="d-flex justify-content-between align-items-center">
                            <span>Booked Slot</span>
                            350
                        </div>
                    </li>
                    <li>
                        <div className="d-flex justify-content-between align-items-center">
                            <span>Pay With</span>
                            <div className="payment-method">
                                <img src="/images/payment/img1.png" className="shadow" alt="image" />
                                <img src="/images/payment/img2.png" className="shadow" alt="image" />
                                <img src="/images/payment/img3.png" className="shadow" alt="image" />
                            </div>
                        </div>
                    </li>
                </ul>

                <div className="events-btn-box">
                    <a href="#" className="default-btn">
                        Book Now 
                        <i className="ri-arrow-right-line"></i> 
                        <span></span>
                    </a>
                    <p>You must <Link href="/profile-authentication"><a>login</a></Link> before register event.</p>
                </div>

                <div className="events-share">
                    <div className="share-info">
                        <span>Share</span>

                        <ul className="social-link">
                            <li><a href="#" target="_blank"><i className="ri-facebook-fill"></i></a></li>
                            <li><a href="#" target="_blank"><i className="ri-twitter-fill"></i></a></li>
                            <li><a href="#" target="_blank"><i className="ri-instagram-fill"></i></a></li>
                            <li><a href="#" target="_blank"><i className="ri-linkedin-fill"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .events-details-info {
                    background-color: #f8f9f8;
                    border-radius: 5px;
                    padding: 35px 30px;
                }
                .events-details-info .info {
                    margin-bottom: 0;
                    list-style-type: none;
                    padding-left: 0;
                }
                .events-details-info .info li {
                    border-bottom: 1px solid #e5e5e7;
                    color: var(--paragraph-color);
                    font-size: var(--font-size);
                    font-weight: 600;
                    padding-top: 15px;
                    padding-bottom: 15px;
                }
                .events-details-info .info li span {
                    font-weight: bold;
                    color: var(--black-color);
                    position: relative;
                }
                .events-details-info .info li.price {
                    padding-bottom: 10px;
                    color: var(--main-color);
                    font-size: 28px;
                    font-weight: bold;
                }
                .events-details-info .info li.price span {
                    color: var(--black-color);
                    font-size: var(--font-size);
                    font-weight: bold;
                }
                .events-details-info .info li:first-child {
                    padding-top: 0;
                }
                .events-details-info .info li .payment-method img {
                    margin-left: 5px;
                }
                .events-details-info .events-btn-box {
                    text-align: center;
                    margin-top: 30px;
                }
                .events-details-info .events-btn-box p {
                    margin-top: 20px;
                    font-weight: 600;
                }
                .events-details-info .events-btn-box p a {
                    color: var(--main-color);
                }
                .events-details-info .events-btn-box p a:hover {
                    text-decoration: underline;
                }
                .events-details-info .events-share {
                    text-align: center;
                    margin-top: 20px;
                }
                .events-details-info .events-share .share-info {
                    display: inline-block;
                    position: relative;
                    cursor: pointer;
                }
                .events-details-info .events-share .share-info span {
                    display: inline-block;
                    color: var(--main-color);
                    line-height: 1;
                    font-size: var(--font-size);
                    font-weight: bold;
                }
                .events-details-info .events-share .share-info .social-link {
                    padding-left: 0;
                    list-style-type: none;
                    margin-bottom: 0;
                    margin-top: 12px;
                }
                .events-details-info .events-share .share-info .social-link li {
                    display: inline-block;
                    margin-right: 5px;
                }
                .events-details-info .events-share .share-info .social-link li:last-child {
                    margin-right: 0;
                }
                .events-details-info .events-share .share-info .social-link li a i {
                    display: inline-block;
                    width: 40px;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    background-color: #e1e1e1;
                    font-size: 18px;
                    color: var(--black-color);
                    position: relative;
                    border-radius: 50px;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .events-details-info .events-share .share-info .social-link li a i:hover {
                    background-color: var(--main-color);
                    color: var(--white-color);
                    -webkit-transform: translateY(-5px);
                            transform: translateY(-5px);
                }

                // Responsive Style
                @media only screen and (max-width: 767px) {
                    .events-details-info {
                        padding: 25px;
                        margin-top: 30px;
                    }
                }

                @media only screen and (min-width : 768px) and (max-width : 991px) {
                    .events-details-info {
                        padding: 25px;
                        margin-top: 30px;
                    }
                }

                @media only screen and (min-width : 992px) and (max-width : 1199px) {
                    
                }
            `}</style>
        </>
    )
}

export default EventSidebar;