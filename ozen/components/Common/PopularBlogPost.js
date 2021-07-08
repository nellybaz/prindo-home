import React from 'react';
import Link from 'next/link';

const PopularBlogPost = () => {
    return (
        <>
            <div className="blog-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Popular Blog Post</h2>
                        <p>We are try to Update with Latest Article and Blog Post Best Strategic Planning</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <div className="blog-image">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src="/images/blog/blog-1.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="blog-content">
                                    <ul className="entry-meta">
                                        <li>
                                            <Link href="/blog-details">
                                                <a className="tag">Brandin</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="ri-time-line"></i>
                                            March 14, 2021
                                        </li>
                                        <li>
                                            <i className="ri-message-2-line"></i>
                                            (0) Comment
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Branding Involves Developing a Strategy to Creating a Point of Differentiation.</a>
                                        </Link>
                                    </h3>

                                    <Link href="/blog-details">
                                        <a className="blog-btn">
                                            Read More <i className="ri-arrow-right-line"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <div className="blog-image">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src="/images/blog/blog-2.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="blog-content">
                                    <ul className="entry-meta">
                                        <li>
                                            <Link href="/blog-details">
                                                <a className="tag">Agency</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="ri-time-line"></i>
                                            March 14, 2021
                                        </li>
                                        <li>
                                            <i className="ri-message-2-line"></i>
                                            (0) Comment
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Design is a Plan or Specification For The Construction of an Object.</a>
                                        </Link>
                                    </h3>
                                    
                                    <Link href="/blog-details">
                                        <a className="blog-btn">
                                            Read More <i className="ri-arrow-right-line"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <div className="blog-image">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src="/images/blog/blog-3.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="blog-content">
                                    <ul className="entry-meta">
                                        <li>
                                            <Link href="/blog-details">
                                                <a className="tag">Marketing</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="ri-time-line"></i>
                                            March 14, 2021
                                        </li>
                                        <li>
                                            <i className="ri-message-2-line"></i>
                                            (0) Comment
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Branding Involves Developing the Strategy to Create a Point.</a>
                                        </Link>
                                    </h3>
                                    
                                    <Link href="/blog-details">
                                        <a className="blog-btn">
                                            Read More <i className="ri-arrow-right-line"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="blog-shape-1">
                    <img src="/images/blog/shape-1.png" alt="image" />
                </div>
                <div className="blog-shape-2">
                    <img src="/images/blog/shape-2.png" alt="image" />
                </div>
            </div>
            
            {/* Blog Card Style */}
            <style jsx>{`
                .blog-area {
                    position: relative;
                    z-index: 1;
                    overflow: hidden;
                }
                .single-blog {
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    margin-bottom: 30px;
                }
                .single-blog .blog-content {
                    margin-top: 30px;
                }
                .single-blog .blog-content .entry-meta {
                    padding-left: 0;
                    margin-bottom: 0;
                }
                .single-blog .blog-content .entry-meta .tag {
                    display: inline-block;
                    background-color: #EAF0FF;
                    color: var(--main-color);
                    font-size: 14px;
                    font-weight: 500;
                    padding: 5px 15px;
                    border-radius: 5px;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .single-blog .blog-content .entry-meta .tag:hover, .single-blog .blog-content .entry-meta .tag a:hover {
                    background-color: var(--main-color);
                    color: var(--white-color);
                }
                .single-blog .blog-content .entry-meta li {
                    list-style-type: none;
                    display: inline-block;
                    color: #79798D;
                    font-size: 14px;
                    font-weight: 400;
                    margin-right: 15px;
                    position: relative;
                    padding-left: 18px;
                }
                .single-blog .blog-content .entry-meta li:last-child {
                    margin-right: 0;
                }
                .single-blog .blog-content .entry-meta li:first-child {
                    padding-left: 0;
                }
                .single-blog .blog-content .entry-meta li i {
                    position: absolute;
                    left: 0;
                    top: 50%;
                    -webkit-transform: translateY(-50%);
                            transform: translateY(-50%);
                    color: #36CC72;
                    font-size: 14px;
                }
                .single-blog .blog-content h3 {
                    font-size: 22px;
                    margin-top: 20px;
                    margin-bottom: 15px;
                    line-height: 1.5;
                }
                .single-blog .blog-content h3 a {
                    color: var(--black-color);
                }
                .single-blog .blog-content .blog-btn {
                    font-size: var(--font-size);
                    font-weight: 500;
                    position: relative;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .single-blog .blog-content .blog-btn i {
                    position: absolute;
                    right: -20px;
                    top: 50%;
                    -webkit-transform: translateY(-50%);
                            transform: translateY(-50%);
                    font-size: 15px;
                }
                .single-blog:hover .blog-content h3 a {
                    color: var(--main-color);
                }

                .single-blog:hover .blog-content .blog-btn {
                    letter-spacing: 1px;
                }
                .blog-shape-1 {
                    position: absolute;
                    top: 10%;
                    right: 2%;
                    -webkit-transform: translateY(-10%) translateX(-2%);
                            transform: translateY(-10%) translateX(-2%);
                }
                .blog-shape-2 {
                    position: absolute;
                    top: 10%;
                    left: 2%;
                    -webkit-transform: translateY(-10%) translateX(-2%);
                            transform: translateY(-10%) translateX(-2%);
                }
                    
                // Responsive Style
                @media only screen and (max-width: 767px) {
                    .single-blog .blog-content {
                        margin-top: 20px;
                    }
                    .single-blog .blog-content h3 {
                        font-size: 20px;
                        margin-top: 15px;
                        margin-bottom: 10px;
                    }
                    .single-blog .blog-content .blog-btn {
                        font-size: 14px;
                    }
                    .single-blog .blog-content .entry-meta .tag {
                        font-size: 12px;
                        padding: 5px 8px;
                    }
                    .single-blog .blog-content .entry-meta li {
                        font-size: 12px;
                        margin-right: 5px;
                        padding-left: 20px;
                    }
                    .blog-shape-1 {
                        display: none;
                    }
                    .blog-shape-2 {
                        display: none;
                    }
                }

                @media only screen and (min-width : 768px) and (max-width : 991px) {
                    .single-blog .blog-content .entry-meta .tag {
                        font-size: 12px;
                        padding: 5px 8px;
                    }
                    .single-blog .blog-content .entry-meta li {
                        font-size: 12px;
                        margin-right: 5px;
                        padding-left: 20px;
                    }
                    .blog-shape-1 {
                        display: none;
                    }
                    .blog-shape-2 {
                        display: none;
                    }
                }

                @media only screen and (min-width : 992px) and (max-width : 1199px) {
                    .single-blog .blog-content .entry-meta .tag {
                        font-size: 12px;
                        padding: 5px 8px;
                    }
                    .single-blog .blog-content .entry-meta li {
                        font-size: 12px;
                        margin-right: 5px;
                        padding-left: 20px;
                    }
                }
            `}</style>
        </>
    )
}

export default PopularBlogPost;