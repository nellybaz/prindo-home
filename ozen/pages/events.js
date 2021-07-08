import React from 'react';
import NavbarFour from '../components/_App/NavbarFour';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
import Footer from '../components/_App/Footer';

const Events = () => {
    return (
        <>
			<NavbarFour />
			
			<PageBanner 
                pageTitle="Events" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Events"
            /> 
			
            <>
                <div className="events-area pt-100 pb-100">
                    <div className="container">
                        <div className="plod-grid-sorting row align-items-center">
                            <div className="col-lg-8 col-md-6 result-count">
                                <p>We found <span className="count">10</span> products available for you</p>
                            </div>

                            <div className="col-lg-4 col-md-6 ordering">
                                <div className="select-box">
                                    <select className="form-select">
                                        <option>All</option>
                                        <option>Happening</option>
                                        <option>Upcoming</option>
                                        <option>Expired</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-events-box">
                                    <div className="image">
                                        <Link href="/events-details">
                                            <a>
                                                <img src="/images/events/events-1.jpg" alt="image" />
                                            </a>
                                        </Link>
                                        <span className="date">Wed, 20 May 2021</span>
                                    </div>

                                    <div className="content">
                                        <h3>
                                            <Link href="/events-details">
                                                <a>Global Conference on Business Management</a>
                                            </Link>
                                        </h3>
                                        <span className="location">
                                            <i className="ri-map-pin-line"></i> 
                                            Vancover, Canada
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-events-box">
                                    <div className="image">
                                        <Link href="/events-details">
                                            <a>
                                                <img src="/images/events/events-2.jpg" alt="image" />
                                            </a>
                                        </Link>
                                        <span className="date">Tue, 19 May 2021</span>
                                    </div>

                                    <div className="content">
                                        <h3>
                                            <Link href="/events-details">
                                                <a>International Conference on Teacher Education</a>
                                            </Link>
                                        </h3>
                                        <span className="location">
                                            <i className="ri-map-pin-line"></i>
                                            Sydney, Australia
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-events-box">
                                    <div className="image">
                                        <Link href="/events-details">
                                            <a>
                                                <img src="/images/events/events-3.jpg" alt="image" />
                                            </a>
                                        </Link>
                                        <span className="date">Mon, 18 May 2021</span>
                                    </div>

                                    <div className="content">
                                        <h3>
                                            <Link href="/events-details">
                                                <a>International Conference on Special Needs Education</a>
                                            </Link>
                                        </h3>
                                        <span className="location">
                                            <i className="ri-map-pin-line"></i>
                                            Istanbul, Turkey
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-events-box">
                                    <div className="image">
                                        <Link href="/events-details">
                                            <a>
                                                <img src="/images/events/events-4.jpg" alt="image" />
                                            </a>
                                        </Link>
                                        <span className="date">Sun, 17 May 2021</span>
                                    </div>

                                    <div className="content">
                                        <h3>
                                            <Link href="/events-details">
                                                <a>International Conference on Literacy Teaching</a>
                                            </Link>
                                        </h3>
                                        <span className="location">
                                            <i className="ri-map-pin-line"></i>
                                            Athens, Greece
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-events-box">
                                    <div className="image">
                                        <Link href="/events-details">
                                            <a>
                                                <img src="/images/events/events-5.jpg" alt="image" />
                                            </a>
                                        </Link>
                                        <span className="date">Sat, 16 May 2021</span>
                                    </div>

                                    <div className="content">
                                        <h3>
                                            <Link href="/events-details">
                                                <a>International Conference on Educational Administration</a>
                                            </Link>
                                        </h3>
                                        <span className="location">
                                            <i className="ri-map-pin-line"></i>
                                            Rome, Italy
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-events-box">
                                    <div className="image">
                                        <Link href="/events-details">
                                            <a>
                                                <img src="/images/events/events-6.jpg" alt="image" />
                                            </a>
                                        </Link>
                                        <span className="date">Fri, 15 May 2021</span>
                                    </div>

                                    <div className="content">
                                        <h3>
                                            <Link href="/events-details">
                                                <a>International Conference on Education and Pedagogy</a>
                                            </Link>
                                        </h3>
                                        <span className="location">
                                            <i className="ri-map-pin-line"></i>
                                            Athens, Greece
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-events-box">
                                    <div className="image">
                                        <Link href="/events-details">
                                            <a>
                                                <img src="/images/events/events-7.jpg" alt="image" />
                                            </a>
                                        </Link>
                                        <span className="date">Thu, 14 May 2021</span>
                                    </div>

                                    <div className="content">
                                        <h3>
                                            <Link href="/events-details">
                                                <a>Research Conference Aims and Objectives</a>
                                            </Link>
                                        </h3>
                                        <span className="location">
                                            <i className="ri-map-pin-line"></i>
                                            Tokyo, Japan
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-events-box">
                                    <div className="image">
                                        <Link href="/events-details">
                                            <a>
                                                <img src="/images/events/events-8.jpg" alt="image" />
                                            </a>
                                        </Link>
                                        <span className="date">Wed, 13 May 2021</span>
                                    </div>

                                    <div className="content">
                                        <h3>
                                            <Link href="/events-details">
                                                <a>Conference on Gender Discrimination in Education</a>
                                            </Link>
                                        </h3>
                                        <span className="location">
                                            <i className="ri-map-pin-line"></i>
                                            Oslo, Norway
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-events-box">
                                    <div className="image">
                                        <Link href="/events-details">
                                            <a>
                                                <img src="/images/events/events-9.jpg" alt="image" />
                                            </a>
                                        </Link>
                                        <span className="date">Tue, 12 May 2021</span>
                                    </div>

                                    <div className="content">
                                        <h3>
                                            <Link href="/events-details">
                                                <a>Quality and Improvement in Education Conference</a>
                                            </Link>
                                        </h3>
                                        <span className="location">
                                            <i className="ri-map-pin-line"></i>
                                            Tokyo, Japan
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="pagination-area">
                                    <a href="#" className="prev page-numbers">
                                        <i className="ri-arrow-left-line"></i>
                                    </a>
                                    <span className="page-numbers current" aria-current="page">1</span>
                                    <a href="#" className="page-numbers">2</a>
                                    <a href="#" className="page-numbers">3</a>
                                    <a href="#" className="page-numbers">4</a>
                                    <a href="#" className="next page-numbers">
                                        <i className="ri-arrow-right-line"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .plod-grid-sorting {
                        margin-bottom: 30px;
                    }
                    .plod-grid-sorting .result-count p .count {
                        font-weight: 600;
                        color: var(--black-color);
                    }
                    .plod-grid-sorting .ordering {
                        text-align: right;
                    }
                    .plod-grid-sorting .ordering label {
                        display: inline-block;
                        margin-bottom: 0;
                        color: var(--paragraph-color);
                        margin-right: 5px;
                        font-weight: 500;
                        font-size: 15px;
                    }
                    .plod-grid-sorting .ordering .nice-select {
                        display: inline-block;
                        width: 215px;
                        background: #f8f8f8;
                        border-color: #eeeeee;
                        color: var(--black-color);
                        -webkit-transition: var(--transition);
                        transition: var(--transition);
                        padding: 0 0 0 12px;
                        height: 50px;
                        line-height: 50px;
                        font-weight: bold;
                        border-radius: 5px;
                    }
                    .plod-grid-sorting .ordering .nice-select .list {
                        background-color: var(--white-color);
                        border-radius: 0;
                        -webkit-box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                        list-style-type: none;
                        border: none;
                        width: 100%;
                        margin-top: 0;
                        margin-bottom: 0;
                        padding-left: 0;
                        padding-top: 10px;
                        padding-bottom: 10px;
                    }
                    .plod-grid-sorting .ordering .nice-select .list .option {
                        line-height: 38px;
                        min-height: 38px;
                        color: var(--black-color);
                        position: relative;
                        -webkit-transition: var(--transition);
                        transition: var(--transition);
                        padding-left: 15px;
                        padding-right: 25px;
                        font-weight: 600;
                    }
                    .plod-grid-sorting .ordering .nice-select .list .option.selected.focus {
                        color: var(--main-color);
                        background-color: var(--white-color);
                    }
                    .plod-grid-sorting .ordering .nice-select .list .option:hover {
                        background-color: var(--main-color);
                        color: var(--white-color);
                    }
                    .plod-grid-sorting .ordering .nice-select:after {
                        border-color: var(--black-color);
                        height: 8px;
                        width: 8px;
                        margin-top: -5px;
                    }
                    .plod-grid-sorting .ordering .nice-select:hover {
                        border-color: var(--main-color);
                        background-color: transparent;
                    }
                    
                    .single-events-box {
                        -webkit-transition: var(--transition);
                        transition: var(--transition);
                        background-color: var(--white-color);
                        margin-bottom: 30px;
                    }
                    .single-events-box .image {
                        position: relative;
                        overflow: hidden;
                    }
                    .single-events-box .image .date {
                        position: absolute;
                        right: 10px;
                        bottom: 10px;
                        display: inline-block;
                        background-color: var(--white-color);
                        color: var(--paragraph-color);
                        padding: 8px 20px;
                        border-radius: 5px;
                        font-size: 14px;
                        font-weight: 500;
                    }
                    .single-events-box .image img {
                        border-radius: 5px 5px 0 0;
                        -webkit-transition: var(--transition);
                        transition: var(--transition);
                    }
                    .single-events-box .content {
                        padding: 25px 20px;
                        position: relative;
                        background-color: #f3f3f3;
                        border-radius: 0 0 5px 5px;
                    }
                    .single-events-box .content h3 {
                        margin-bottom: 0;
                        line-height: 1.5;
                        font-size: 25px;
                    }
                    .single-events-box .content h3 a {
                        display: inline-block;
                    }
                    .single-events-box .content .location {
                        display: block;
                        color: var(--paragraph-color);
                        margin-top: 20px;
                        position: relative;
                        padding-left: 22px;
                        font-size: 14px;
                        font-weight: 500;
                    }
                    .single-events-box .content .location i {
                        color: var(--main-color);
                        position: absolute;
                        left: 0;
                        top: 50%;
                        -webkit-transform: translateY(-50%);
                                transform: translateY(-50%);
                        font-size: var(--font-size);
                    }
                    .single-events-box:hover .image img {
                        -webkit-transform: scale(1.1);
                                transform: scale(1.1);
                    }
                    
                    // Responsive Style
                    @media only screen and (max-width: 767px) {
                        .plod-grid-sorting {
                            text-align: center;
                        }
                        .plod-grid-sorting .ordering {
                            text-align: center;
                            margin-top: 25px;
                        }
                        .plod-grid-sorting .ordering label {
                            margin-bottom: 10px;
                            margin-right: 0;
                        }
                        .single-events-box .content h3 {
                            font-size: 20px;
                        }
                    }

                    @media only screen and (min-width : 768px) and (max-width : 991px) {
                        .single-events-box .content h3 {
                            font-size: 20px;
                        }
                    }

                    @media only screen and (min-width : 992px) and (max-width : 1199px) {
                        .single-events-box .content h3 {
                            font-size: 20px;
                        }
                    }
                `}</style>
            </>

			<Footer />
		</>
    )
}

export default Events;