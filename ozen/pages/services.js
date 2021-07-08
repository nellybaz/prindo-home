import React from 'react';
import NavbarFour from '../components/_App/NavbarFour';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
import WorkProcess from '../components/Common/WorkProcess';
import TechSupport from '../components/Common/TechSupport';
import OurRespectiveClients from '../components/Common/OurRespectiveClients';
import CTA from '../components/Common/CTA';
import Footer from '../components/_App/Footer';

const Services = () => {
    return (
        <>
			<NavbarFour />
			
			<PageBanner 
                pageTitle="Services One" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Services One"
            /> 
             
            <div className="services-area pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services-item">
                                <div className="icon">
                                    <i className="ri-quill-pen-line"></i>
                                </div>
                                <h3>
                                    <Link href="/services-details">
                                        <a>Brand Identity Design</a>
                                    </Link>
                                </h3>
                                <p>Branding just like your personal identity makes you uniquely you your brand identity is the special sauce of your business that sets you apart from every other Tom Dick and Harry Inc.</p>

                                <Link href="/services-details">
                                    <a className="services-btn">
                                        Read More <i className="ri-arrow-right-line"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services-item">
                                <div className="icon bg-36CC72">
                                    <i className="ri-pie-chart-line"></i>
                                </div>
                                <h3>
                                    <Link href="/services-details">
                                        <a>Digital Marketing</a>
                                    </Link>
                                </h3>
                                <p>Ozen offering you the best digital marketing services to just like your personal identity makes you uniquely you, your brand identity is the special sauce of your to our customer.</p>
                                
                                <Link href="/services-details">
                                    <a className="services-btn">
                                        Read More <i className="ri-arrow-right-line"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services-item">
                                <div className="icon bg-FF414B">
                                    <i className="ri-lightbulb-line"></i>
                                </div>
                                <h3>
                                    <Link href="/services-details">
                                        <a>Design and Development</a>
                                    </Link>
                                </h3>
                                <p>Ozen offering you the best digital marketing services to just like your personal identity makes you uniquely you, your brand identity is the special sauce of your to our customer.</p>

                                <Link href="/services-details">
                                    <a className="services-btn">
                                        Read More <i className="ri-arrow-right-line"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services-item">
                                <div className="icon bg-FF6D3D">
                                    <i className="ri-customer-service-2-line"></i>
                                </div>
                                <h3>
                                    <Link href="/services-details">
                                        <a>IT Consulting Service</a>
                                    </Link>
                                </h3>
                                <p>Ozen offering you the best digital marketing services to just like your personal identity makes you uniquely you, your brand identity is the special sauce of your to our customer.</p>
                                
                                <Link href="/services-details">
                                    <a className="services-btn">
                                        Read More <i className="ri-arrow-right-line"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services-item">
                                <div className="icon bg-8932F8">
                                    <i className="ri-cloud-line"></i>
                                </div>
                                <h3>
                                    <Link href="/services-details">
                                        <a>Cloud Computing</a>
                                    </Link>
                                </h3>
                                <p>Ozen offering you the best digital marketing services to just like your personal identity makes you uniquely you, your brand identity is the special sauce of your to our customer.</p>
                                
                                <Link href="/services-details">
                                    <a className="services-btn">
                                        Read More <i className="ri-arrow-right-line"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services-item">
                                <div className="icon bg-FFCA40">
                                    <i className="ri-layout-row-line"></i>
                                </div>
                                <h3>
                                    <Link href="/services-details">
                                        <a>Domain and Hosting</a>
                                    </Link>
                                </h3>
                                <p>Ozen offering you the best digital marketing services to just like your personal identity makes you uniquely you, your brand identity is the special sauce of your to our customer.</p>
                                
                                <Link href="/services-details">
                                    <a className="services-btn">
                                        Read More <i className="ri-arrow-right-line"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="services-shape-1">
                    <img src="/images/services/shape-1.png" alt="image" />
                </div>
                <div className="services-shape-2">
                    <img src="/images/services/shape-2.png" alt="image" />
                </div>
                <div className="services-shape-3">
                    <img src="/images/services/shape-3.png" alt="image" />
                </div>
                <div className="services-shape-4">
                    <img src="/images/services/shape-4.png" alt="image" />
                </div>

                {/* Services Card Style */}
                <style jsx>{`
                    .services-area {
                        position: relative;
                        z-index: 1;
                        overflow: hidden;
                    }
                    .single-services-item {
                        margin-bottom: 30px;
                        padding: 35px;
                        border-radius: 5px;
                        -webkit-transition: var(--transition);
                        transition: var(--transition);
                        border: 1px solid #eeeeee;
                        text-align: center;
                    }
                    .single-services-item .icon {
                        margin-bottom: 30px;
                    }
                    .single-services-item .icon i {
                        display: inline-block;
                        height: 80px;
                        width: 80px;
                        line-height: 80px;
                        background-color: #E5F0FF;
                        color: var(--main-color);
                        text-align: center;
                        font-size: 45px;
                        border-radius: 5px;
                        -webkit-transition: var(--transition);
                        transition: var(--transition);
                    }
                    .single-services-item .icon.bg-36CC72 i {
                        background-color: #EBFAF1;
                        color: #36CC72;
                    }
                    .single-services-item .icon.bg-FF414B i {
                        background-color: #FFECED;
                        color: #FF414B;
                    }
                    .single-services-item .icon.bg-FF6D3D i {
                        background-color: #FFF0EC;
                        color: #FF6D3D;
                    }
                    .single-services-item .icon.bg-8932F8 i {
                        background-color: #F3EBFE;
                        color: #8932F8;
                    }
                    .single-services-item .icon.bg-FFCA40 i {
                        background-color: #FFFAEC;
                        color: #FFCA40;
                    }
                    .single-services-item h3 {
                        margin-bottom: 15px;
                        font-size: 25px;
                    }
                    .single-services-item h3 a {
                        color: var(--black-color);
                        -webkit-transition: var(--transition);
                        transition: var(--transition);
                    }
                    .single-services-item p {
                        margin-bottom: 15px;
                        font-size: 15px;
                    }
                    .single-services-item .services-btn {
                        font-size: 15px;
                        font-weight: 500;
                        position: relative;
                        -webkit-transition: var(--transition);
                        transition: var(--transition);
                    }
                    .single-services-item .services-btn i {
                        position: absolute;
                        right: -20px;
                        top: 50%;
                        -webkit-transform: translateY(-50%);
                                transform: translateY(-50%);
                        font-size: 15px;
                    }
                    .single-services-item:hover {
                        background-color: var(--white-color);
                        -webkit-box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
                                box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
                        -webkit-transform: translateY(-10px);
                                transform: translateY(-10px);
                    }
                    .single-services-item:hover .icon i {
                        background-color: var(--main-color);
                        color: var(--white-color);
                    }
                    .single-services-item:hover .icon.bg-36CC72 i {
                        background-color: #36CC72;
                    }
                    .single-services-item:hover .icon.bg-FF414B i {
                        background-color: #FF414B;
                    }
                    .single-services-item:hover .icon.bg-FF6D3D i {
                        background-color: #FF6D3D;
                    }
                    .single-services-item:hover .icon.bg-8932F8 i {
                        background-color: #8932F8;
                    }
                    .single-services-item:hover .icon.bg-FFCA40 i {
                        background-color: #FFCA40;
                    }
                    .single-services-item:hover h3 a {
                        color: var(--main-color);
                    }
                    .single-services-item:hover .services-btn {
                        color: var(--main-color);
                        letter-spacing: 1px;
                    }

                    // shape
                    .services-shape-1 {
                        position: absolute;
                        top: 20%;
                        left: 45%;
                        -webkit-transform: translateY(-20%) translateX(-45%);
                                transform: translateY(-20%) translateX(-45%);
                        z-index: 1;
                    }
                    .services-shape-2 {
                        position: absolute;
                        top: 15%;
                        left: 45%;
                        -webkit-transform: translateY(-15%) translateX(-45%);
                                transform: translateY(-15%) translateX(-45%);
                        z-index: 1;
                    }
                    .services-shape-3 {
                        position: absolute;
                        top: 45%;
                        left: 2%;
                        -webkit-transform: translateY(-45%) translateX(-2%);
                                transform: translateY(-45%) translateX(-2%);
                        z-index: -1;
                    }
                    .services-shape-4 {
                        position: absolute;
                        top: 45%;
                        right: 0%;
                        -webkit-transform: translateY(-45%) translateX(-5%);
                                transform: translateY(-45%) translateX(-5%);
                        z-index: -1;
                    }
                    .services-shape-5 {
                        position: absolute;
                        bottom: 0;
                        left: 35%;
                        -webkit-transform: translateY(-10%) translateX(-35%);
                                transform: translateY(-10%) translateX(-35%);
                        z-index: 1;
                    }
        
                    // Responsive Style
                    @media only screen and (max-width: 767px) {
                        .single-services-item {
                            padding: 30px 20px;
                        }
                        .single-services-item .icon {
                            margin-bottom: 25px;
                        }
                        .single-services-item h3 {
                            font-size: 20px;
                            margin-bottom: 10px;
                        }
                        .single-services-item p {
                            margin-bottom: 12px;
                        }
                        .services-shape-1, .services-shape-2, .services-shape-3, .services-shape-4, .services-shape-5 {
                            display: none;
                        }
                    }

                    @media only screen and (min-width : 768px) and (max-width : 991px) {
                        .single-services-item {
                            padding: 30px 20px;
                        }
                        .single-services-item .icon {
                            margin-bottom: 25px;
                        }
                        .single-services-item h3 {
                            font-size: 20px;
                            margin-bottom: 15px;
                        }
                        .services-shape-1, .services-shape-2, .services-shape-3, .services-shape-4, .services-shape-5 {
                            display: none;
                        }
                    }

                    @media only screen and (min-width : 992px) and (max-width : 1199px) {
                        .single-services-item {
                            padding: 35px 15px;
                        }
                        .single-services-item h3 {
                            font-size: 20px;
                        }
                    }

                    @media only screen and (min-width : 1200px) and (max-width : 1399px) {
                        .single-services-item {
                            padding: 30px;
                        }
                        .single-services-item h3 a {
                            font-size: 24px;
                        }
                    }
                `}</style>
            </div> 

            <div className="pb-100">
                <WorkProcess />
            </div>
            
            <TechSupport />

            <OurRespectiveClients />
            
            <div className="ptb-100">
                <CTA />
            </div>

			<Footer />
		</>
    )
}

export default Services;