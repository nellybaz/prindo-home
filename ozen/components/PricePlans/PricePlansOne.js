import React from 'react';
import { 
    Tab, 
    Tabs, 
    TabList, 
    TabPanel, 
    resetIdCounter 
} from 'react-tabs';
resetIdCounter(); 

const PricePlansOne = () => {
    return (
        <>
            <div className="plans-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Choose Your Best Plans</h2>
                        <p>Pay by monthly or yearly, you can cancel it anytime whatever you want</p>
                    </div>

                    <div className="price-plans-tab">
                        <Tabs>
                            <TabList>
                                <Tab>Bill Monthly</Tab>
                                <Tab>Bill Yearly</Tab>
                            </TabList>

                            <TabPanel>
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-plans-table">
                                            <div className="plans-header">
                                                <h3>Individual</h3>
                                                <p>Powerful & Awesome Elements</p>
                                            </div>

                                            <div className="price">$49 <span>/Month</span></div>

                                            <div className="plans-btn">
                                                <a href="#" className="default-btn">
                                                    Purchase Now 
                                                    <i className="ri-arrow-right-line"></i>
                                                    <span></span>
                                                </a>
                                            </div>

                                            <ul className="plans-features-list">
                                                <li><i className="ri-check-line"></i> Up to 10 Website</li>
                                                <li><i className="ri-check-line"></i> Lifetime Free Support</li>
                                                <li><i className="ri-check-line"></i> 10 GB Dedicated Hosting Free</li>
                                                <li><i className="ri-check-line"></i> 24/7 Hours Support</li>
                                                <li><i className="ri-check-line"></i> SEO Optimized</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-plans-table active-box">
                                            <div className="plans-header">
                                                <h3>Small Team</h3>
                                                <p>Powerful & Awesome Elements</p>
                                            </div>

                                            <div className="price">$69 <span>/Month</span></div>

                                            <div className="plans-btn">
                                                <a href="#" className="default-btn">
                                                    Purchase Now 
                                                    <i className="ri-arrow-right-line"></i>
                                                    <span></span>
                                                </a>
                                            </div>

                                            <ul className="plans-features-list">
                                                <li><i className="ri-check-line"></i> Up to 15 Website</li>
                                                <li><i className="ri-check-line"></i> Lifetime Free Support</li>
                                                <li><i className="ri-check-line"></i> 15 GB Dedicated Hosting Free</li>
                                                <li><i className="ri-check-line"></i> 24/7 Hours Support</li>
                                                <li><i className="ri-check-line"></i> SEO Optimized</li>
                                            </ul>

                                            <div className="popular-tag">
                                                <span>Most Popular</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-plans-table">
                                            <div className="plans-header">
                                                <h3>Business</h3>
                                                <p>Powerful & Awesome Elements</p>
                                            </div>

                                            <div className="price">$79 <span>/Month</span></div>

                                            <div className="plans-btn">
                                                <a href="#" className="default-btn">
                                                    Purchase Now 
                                                    <i className="ri-arrow-right-line"></i>
                                                    <span></span>
                                                </a>
                                            </div>

                                            <ul className="plans-features-list">
                                                <li><i className="ri-check-line"></i> Up to 20 Website</li>
                                                <li><i className="ri-check-line"></i> Lifetime Free Support</li>
                                                <li><i className="ri-check-line"></i> 20 GB Dedicated Hosting Free</li>
                                                <li><i className="ri-check-line"></i> 24/7 Hours Support</li>
                                                <li><i className="ri-check-line"></i> SEO Optimized</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-plans-table">
                                            <div className="plans-header">
                                                <h3>Individual</h3>
                                                <p>Powerful & Awesome Elements</p>
                                            </div>

                                            <div className="price">$249 <span>/Yearly</span></div>

                                            <div className="plans-btn">
                                                <a href="#" className="default-btn">
                                                    Purchase Now 
                                                    <i className="ri-arrow-right-line"></i>
                                                    <span></span>
                                                </a>
                                            </div>

                                            <ul className="plans-features-list">
                                                <li><i className="ri-check-line"></i> Up to 10 Website</li>
                                                <li><i className="ri-check-line"></i> Lifetime Free Support</li>
                                                <li><i className="ri-check-line"></i> 10 GB Dedicated Hosting Free</li>
                                                <li><i className="ri-check-line"></i> 24/7 Hours Support</li>
                                                <li><i className="ri-check-line"></i> SEO Optimized</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-plans-table active-box">
                                            <div className="plans-header">
                                                <h3>Small Team</h3>
                                                <p>Powerful & Awesome Elements</p>
                                            </div>

                                            <div className="price">$269 <span>/Yearly</span></div>

                                            <div className="plans-btn">
                                                <a href="#" className="default-btn">
                                                    Purchase Now 
                                                    <i className="ri-arrow-right-line"></i>
                                                    <span></span>
                                                </a>
                                            </div>

                                            <ul className="plans-features-list">
                                                <li><i className="ri-check-line"></i> Up to 15 Website</li>
                                                <li><i className="ri-check-line"></i> Lifetime Free Support</li>
                                                <li><i className="ri-check-line"></i> 15 GB Dedicated Hosting Free</li>
                                                <li><i className="ri-check-line"></i> 24/7 Hours Support</li>
                                                <li><i className="ri-check-line"></i> SEO Optimized</li>
                                            </ul>

                                            <div className="popular-tag">
                                                <span>Most Popular</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-plans-table">
                                            <div className="plans-header">
                                                <h3>Business</h3>
                                                <p>Powerful & Awesome Elements</p>
                                            </div>

                                            <div className="price">$279 <span>/Yearly</span></div>

                                            <div className="plans-btn">
                                                <a href="#" className="default-btn">
                                                    Purchase Now 
                                                    <i className="ri-arrow-right-line"></i>
                                                    <span></span>
                                                </a>
                                            </div>

                                            <ul className="plans-features-list">
                                                <li><i className="ri-check-line"></i> Up to 20 Website</li>
                                                <li><i className="ri-check-line"></i> Lifetime Free Support</li>
                                                <li><i className="ri-check-line"></i> 20 GB Dedicated Hosting Free</li>
                                                <li><i className="ri-check-line"></i> 24/7 Hours Support</li>
                                                <li><i className="ri-check-line"></i> SEO Optimized</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="plans-shape-1">
                    <img src="/images/plans/shape-1.png" alt="image" />
                </div>
                <div className="plans-shape-2">
                    <img src="/images/plans/shape-2.png" alt="image" />
                </div>
                <div className="plans-shape-3">
                    <img src="/images/plans/shape-3.png" alt="image" />
                </div>
            </div>

            {/* Price Plans Style */}
            <style jsx>{`
                .plans-area {
                    position: relative;
                    z-index: 1;
                }
                .plans-area::before {
                    position: absolute;
                    content: "";
                    left: 0;
                    right: 0;
                    bottom: 0;
                    height: 50%;
                    width: 100%;
                    background-color: #F4F8FC;
                    z-index: -1;
                    max-width: 1690px;
                    margin: auto;
                    border-radius: 5px;
                }
 
                // single-plans-table
                .single-plans-table {
                    background-color: var(--white-color);
                    border: 1px solid #E6EDF7;
                    padding: 50px 45px;
                    border-radius: 5px;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    margin-bottom: 30px;
                    position: relative;
                }
                .single-plans-table.active-box {
                    border: 1px solid #36CC72;
                    -webkit-box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
                            box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
                }
                .single-plans-table.active-box .plans-btn .default-btn {
                    background-color: #36CC72;
                }
                .single-plans-table .plans-header h3 {
                    font-size: 25px;
                    margin-bottom: 10px;
                }
                .single-plans-table .plans-header p {
                    font-size: 15px;
                    margin-bottom: 0;
                }
                .single-plans-table .price {
                    font-size: 50px;
                    font-weight: 500;
                    margin-top: 18px;
                }
                .single-plans-table .price span {
                    font-size: 15px;
                    font-weight: 500;
                    color: var(--paragraph-color);
                }
                .single-plans-table .plans-btn {
                    margin-top: 22px;
                }
                .single-plans-table .plans-btn .default-btn {
                    width: 100%;
                    -webkit-box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
                            box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
                }
                .single-plans-table .plans-btn .default-btn i {
                    position: relative;
                    right: 0;
                    top: 2px;
                    -webkit-transform: translateY(-2px);
                            transform: translateY(-2px);
                    margin-left: 5px;
                }
                .single-plans-table .plans-btn .default-btn:hover {
                    -webkit-transform: unset;
                            transform: unset;
                }
                .single-plans-table .plans-features-list {
                    padding-left: 0;
                    margin-top: 30px;
                    margin-bottom: 0;
                }
                .single-plans-table .plans-features-list li {
                    font-size: var(--font-size);
                    font-weight: 500;
                    list-style-type: none;
                    position: relative;
                    padding-left: 25px;
                    margin-bottom: 15px;
                }
                .single-plans-table .plans-features-list li:last-child {
                    margin-bottom: 0;
                }
                .single-plans-table .plans-features-list li i {
                    position: absolute;
                    left: 0;
                    top: 50%;
                    -webkit-transform: translateY(-50%);
                            transform: translateY(-50%);
                    color: #36CC72;
                }
                .single-plans-table .popular-tag {
                    position: absolute;
                    right: 30px;
                    top: 20px;
                }
                .single-plans-table .popular-tag span {
                    font-size: 15px;
                    color: #36CC72;
                    font-weight: 500;
                }
                .single-plans-table:hover {
                    -webkit-transform: translateY(-10px);
                            transform: translateY(-10px);
                    border: 1px solid #36CC72;
                    -webkit-box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
                            box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
                }
                .single-plans-table:hover .plans-btn .default-btn {
                    background-color: #36CC72;
                }

                // view-all-plans-btn
                .view-all-plans-btn {
                    text-align: center;
                    margin-top: 15px;
                }
                .view-all-plans-btn .plans-btn-one {
                    font-size: 15px;
                    font-weight: 500;
                    color: var(--main-color);
                    border-bottom: 1px solid var(--main-color);
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .view-all-plans-btn .plans-btn-one:hover {
                    letter-spacing: 1px;
                }
                
                // shape
                .plans-shape-1 {
                    position: absolute;
                    top: 40%;
                    left: 58%;
                    -webkit-transform: translateY(-40%) translateX(-58%);
                            transform: translateY(-40%) translateX(-58%);
                }
                .plans-shape-2 {
                    position: absolute;
                    top: 45%;
                    left: 60%;
                    -webkit-transform: translateY(-45%) translateX(-60%);
                            transform: translateY(-45%) translateX(-60%);
                }
                .plans-shape-3 {
                    position: absolute;
                    bottom: 22%;
                    left: 60%;
                    -webkit-transform: translateY(-22%) translateX(-56%);
                            transform: translateY(-22%) translateX(-56%);
                }
                .plans-shape-4 {
                    position: absolute;
                    top: 12%;
                    left: 30%;
                    -webkit-transform: translateY(-12%) translateX(-30%);
                            transform: translateY(-12%) translateX(-30%);
                    z-index: -1;
                }
                .plans-shape-5 {
                    position: absolute;
                    top: 15%;
                    left: 32%;
                    -webkit-transform: translateY(-15%) translateX(-32%);
                            transform: translateY(-15%) translateX(-32%);
                    z-index: -1;
                }
	
                // Responsive Style
                @media only screen and (max-width: 767px) {
                    .single-plans-table {
                        padding: 30px 20px;
                        text-align: center;
                    }
                    .single-plans-table .popular-tag {
                        right: 10px;
                        top: 10px;
                    }
                    .single-plans-table .popular-tag span {
                        font-size: 12px;
                    }
                    .single-plans-table .plans-features-list li {
                        font-size: 15px;
                        padding: 0;
                    }
                    .single-plans-table .plans-features-list li i {
                        position: relative;
                        top: 2px;
                    }
                    .view-all-plans-btn {
                        margin-top: 0;
                    }
                    .plans-shape-1 {
                        display: none;
                    }
                    .plans-shape-2 {
                        display: none;
                    }
                    .plans-shape-3 {
                        display: none;
                    }
                    .plans-shape-4 {
                        display: none;
                    }
                    .plans-shape-5 {
                        display: none;
                    }
                }

                @media only screen and (min-width : 768px) and (max-width : 991px) {
                    .single-plans-table {
                        padding: 35px 25px;
                    }
                    .single-plans-table .popular-tag {
                        right: 10px;
                        top: 10px;
                    }
                    .single-plans-table .popular-tag span {
                        font-size: 12px;
                    }
                    .single-plans-table .plans-features-list li {
                        font-size: 15px;
                    }
                    .view-all-plans-btn {
                        margin-top: 0;
                    }
                    .plans-shape-1 {
                        display: none;
                    }
                    .plans-shape-2 {
                        display: none;
                    }
                    .plans-shape-3 {
                        display: none;
                    }
                    .plans-shape-4 {
                        display: none;
                    }
                    .plans-shape-5 {
                        display: none;
                    }
                }

                @media only screen and (min-width : 992px) and (max-width : 1199px) {
                    .single-plans-table {
                        padding: 35px 20px;
                    }
                    .single-plans-table .plans-features-list li {
                        font-size: 15px;
                    }
                    .single-plans-table .popular-tag {
                        right: 10px;
                        top: 10px;
                    }
                    .plans-shape-1 {
                        display: none;
                    }
                    .plans-shape-2 {
                        display: none;
                    }
                    .plans-shape-3 {
                        display: none;
                    }
                    .plans-shape-4 {
                        display: none;
                    }
                    .plans-shape-5 {
                        display: none;
                    }
                }
            `}</style>
        </>
    )
}

export default PricePlansOne;