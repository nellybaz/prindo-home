import React from 'react';
import Link from 'next/link';

const EventSpeakers = () => {
    return (
        <>
            <div className="team-area pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Event Speakers</h2>
                        <p>Which peoples loves us a lot, please check out what about says about us</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-team-box">
                                <div className="image">
                                    <img src="/images/team/team-1.jpg" alt="image" />

                                    <ul className="social">
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="ri-facebook-fill"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="ri-twitter-fill"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="ri-linkedin-fill"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="ri-messenger-fill"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <h3>Oliver Watson</h3>
                                    <span>Senior IT Consultant</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-team-box">
                                <div className="image">
                                    <img src="/images/team/team-2.jpg" alt="image" />

                                    <ul className="social">
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="ri-facebook-fill"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="ri-twitter-fill"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="ri-linkedin-fill"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="ri-messenger-fill"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <h3>Leah Chatman</h3>
                                    <span>Financial Consultant</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-team-box">
                                <div className="image">
                                    <img src="/images/team/team-3.jpg" alt="image" />

                                    <ul className="social">
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="ri-facebook-fill"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="ri-twitter-fill"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="ri-linkedin-fill"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="ri-messenger-fill"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <h3>Louis Agassiz</h3>
                                    <span>Web Developer</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-team-box">
                                <div className="image">
                                    <img src="/images/team/team-4.jpg" alt="image" />

                                    <ul className="social">
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="ri-facebook-fill"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="ri-twitter-fill"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="ri-linkedin-fill"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="ri-messenger-fill"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <h3>Carl Anderson</h3>
                                    <span>Web Designer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .single-team-box {
                    margin-bottom: 30px;
                    text-align: center;
                }
                .single-team-box.with-border-radius .image img {
                    border-radius: 10px;
                }
                .single-team-box.with-border-radius:hover .image img {
                    -webkit-transform: unset;
                            transform: unset;
                }
                .single-team-box .image {
                    position: relative;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    overflow: hidden;
                }
                .single-team-box .image img {
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .single-team-box .image .social {
                    padding-left: 0;
                    list-style-type: none;
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 45px;
                    margin-left: auto;
                    margin-right: auto;
                    margin-bottom: 0;
                }
                .single-team-box .image .social li {
                    display: inline-block;
                    -webkit-transform: translateY(30px);
                            transform: translateY(30px);
                    -webkit-transition: all 0.3s ease-in-out 0s;
                    transition: all 0.3s ease-in-out 0s;
                    opacity: 0;
                    visibility: hidden;
                    margin-left: 2px;
                    margin-right: 2px;
                }

                .single-team-box .image .social li a i {
                    display: inline-block;
                    width: 38px;
                    height: 38px;
                    line-height: 38px;
                    background-color: var(--white-color);
                    text-align: center;
                    position: relative;
                    font-size: var(--font-size);
                    color: var(--main-color);
                    border-radius: 50px;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .single-team-box .image .social li a i:hover {
                    color: var(--white-color);
                    background-color: var(--main-color);
                    -webkit-transform: translateY(-5px);
                            transform: translateY(-5px);
                }
                .single-team-box .image .social li:nth-child(1) {
                    -webkit-transition-delay: 0.1s;
                            transition-delay: 0.1s;
                }
                .single-team-box .image .social li:nth-child(2) {
                    -webkit-transition-delay: 0.2s;
                            transition-delay: 0.2s;
                }
                .single-team-box .image .social li:nth-child(3) {
                -webkit-transition-delay: 0.3s;
                        transition-delay: 0.3s;
                }
                .single-team-box .image .social li:nth-child(4) {
                -webkit-transition-delay: 0.4s;
                        transition-delay: 0.4s;
                }
                .single-team-box .content {
                    margin-top: 25px;
                }
                .single-team-box .content h3 {
                    margin-bottom: 0;
                    font-size: 22px;
                    font-weight: 500;
                }
                .single-team-box .content span {
                    display: block;
                    color: #79798D;
                    font-size: 14px;
                    margin-top: 8px;
                }
                .single-team-box:hover .image img {
                    -webkit-transform: scale(1.1);
                            transform: scale(1.1);
                }
                .single-team-box:hover .image .social li {
                    -webkit-transform: translateY(0);
                            transform: translateY(0);
                    opacity: 1;
                    visibility: visible;
                }
                    
                // Responsive Style
                @media only screen and (max-width: 767px) {
                  
                }

                @media only screen and (min-width : 768px) and (max-width : 991px) {
                    
                }

                @media only screen and (min-width : 992px) and (max-width : 1199px) {
                    
                }
            `}</style>
        </>
    )
}

export default EventSpeakers;