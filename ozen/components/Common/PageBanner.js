import React from 'react';
import Link from 'next/link';

const PageBanner = ({pageTitle, homePageUrl, homePageText, activePageText}) => {
    return (
        <>
            <div className="page-banner-area">
                <div className="container">
                    <div className="page-banner-content">
                        <h2>{pageTitle}</h2>
                        <ul>
                            <li>
                                <Link href={homePageUrl}>
                                    <a>{homePageText}</a>
                                </Link>
                            </li>
                            <li className="active">{activePageText}</li>
                        </ul>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="page-banner-shape-1">
                    <img src="/images/page-banner/shape-1.png" alt="image" />
                </div>
                <div className="page-banner-shape-2">
                    <img src="/images/page-banner/shape-2.png" alt="image" />
                </div>
                <div className="page-banner-shape-3">
                    <img src="/images/page-banner/shape-3.png" alt="image" />
                </div>
                <div className="page-banner-shape-4">
                    <img src="/images/page-banner/shape-4.png" alt="image" />
                </div>
            </div>

            {/* PageBanner Style */}
            <style jsx>{`
                .page-banner-area {
                    background-color: #F4F8FC;
                    padding-top: 100px;
                    padding-bottom: 110px;
                    position: relative;
                    z-index: 1;
                }
                .page-banner-content {
                    text-align: center;
                    max-width: 900px;
                    margin: auto;
                }
                .page-banner-content.max-width h2 {
                    line-height: 1.5;
                }
                .page-banner-content h2 {
                    font-size: 45px;
                    margin-bottom: 20px;
                    line-height: 1.4;
                }
                .page-banner-content ul {
                    padding-left: 0;
                    margin-bottom: 0;
                }
                .page-banner-content ul li {
                    display: inline-block;
                    list-style-type: none;
                    font-size: 14px;
                    font-weight: 500;
                    color: #79798D;
                    position: relative;
                    margin-left: 28px;
                }
                .page-banner-content ul li::before {
                    content: '';
                    position: absolute;
                    left: -18px;
                    top: 12px;
                    height: 1px;
                    width: 10px;
                    background: var(--paragraph-color);
                }
                .page-banner-content ul li:first-child {
                    margin-left: 0;
                }
                .page-banner-content ul li:first-child::before {
                    display: none;
                }
                .page-banner-content ul li a {
                    display: block;
                    color: var(--main-color);
                }
                .page-banner-shape-1 {
                    position: absolute;
                    top: 10%;
                    left: 10%;
                    -webkit-transform: translateY(-10%) translateX(-10%);
                            transform: translateY(-10%) translateX(-10%);
                }
                .page-banner-shape-2 {
                    position: absolute;
                    top: 20%;
                    left: 12%;
                    -webkit-transform: translateY(-20%) translateX(-12%);
                            transform: translateY(-20%) translateX(-12%);
                }
                .page-banner-shape-3 {
                    position: absolute;
                    bottom: 5%;
                    left: 30%;
                    -webkit-transform: translateY(-5%) translateX(-30%);
                            transform: translateY(-5%) translateX(-30%);
                }
                .page-banner-shape-4 {
                    position: absolute;
                    bottom: 5%;
                    right: 5%;
                    -webkit-transform: translateY(-5%) translateX(-5%);
                            transform: translateY(-5%) translateX(-5%);
                }
                
                // Responsive Style
                @media only screen and (max-width: 767px) {
                    .page-banner-area {
                        padding-top: 80px;
                        padding-bottom: 80px;
                    }
                    .page-banner-content h2 {
                        font-size: 30px;
                    }
                    .page-banner-shape-1 {
                        display: none;
                    }
                    .page-banner-shape-2 {
                        display: none;
                    }
                    .page-banner-shape-3 {
                        display: none;
                    }
                    .page-banner-shape-4 {
                        display: none;
                    }
                }

                @media only screen and (min-width : 768px) and (max-width : 991px) {
                    .page-banner-content h2 {
                        font-size: 30px;
                    }
                    .page-banner-shape-1 {
                        display: none;
                    }
                    .page-banner-shape-2 {
                        display: none;
                    }
                    .page-banner-shape-3 {
                        display: none;
                    }
                    .page-banner-shape-4 {
                        display: none;
                    }
                }

                @media only screen and (min-width : 992px) and (max-width : 1199px) {
                    
                }
            `}</style>
        </>
    );
}

export default PageBanner;