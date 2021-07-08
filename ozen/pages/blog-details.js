import React from 'react';
import NavbarFour from '../components/_App/NavbarFour';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import BlogSidebar from '../components/Blog/BlogSidebar';

const BlogDetails = () => {
    return (
        <>
			<NavbarFour />
			
			<PageBanner 
                pageTitle="Branding Involves Developing Strategy to Create a Point of Differentiation" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Branding Involves Developing Strategy to Create a Point of Differentiation"
            /> 
            
            <div className="blog-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <img src="/images/blog/blog-large-1.jpg" alt="image" />
                                </div>

                                <div className="article-content">
                                    <ul className="entry-meta">
                                        <li>
                                            <i className="ri-user-line"></i>
                                            <a href="/blog">Admin</a>
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

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                                    <h3>Branding Involves Developing Strategy to Create a Point</h3>
                                    <p>The IT industry offers a sea of options from platforms programming languages methodologies technologies tools and more. IT consulting services are important because they play a vital role in businesses by covering the management implementation deployment and maintenance of an IT infrastructure. IT industry offers a sea of options, from platforms programming languages methodologies technologies tools and more. Consulting services are important because.</p>

                                    <ul className="features-list">
                                        <li>
                                            <i className="ri-check-line"></i> 
                                            Nunc, mauris ut in vestibulum. Consectetur phasellus ultrices fusce nibh justo, venenatis, amet. Lectus quam in lobortis
                                        </li>
                                        <li>
                                            <i className="ri-check-line"></i> 
                                            Most of the designer are very creative to do something , mauris ut in vestibulum. Consectetur phasellus ultrices fusce nibh justo, venenatis, amet. Lectus quam in lobortis
                                        </li>
                                        <li>
                                            <i className="ri-check-line"></i> 
                                            There are two thing is very important in Consectetur phasellus ultrices fusce nibh justo, venenatis, amet. Lectus quam in lobortis
                                        </li>
                                        <li>
                                            <i className="ri-check-line"></i> 
                                            Web design and development very creative to do something , mauris ut in vestibulum. Consectetur phasellus ultrices fusce nibh justo, venenatis, amet to all design and development.
                                        </li>
                                    </ul>

                                    <ul className="wp-block-gallery columns-3">
                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src="/images/blog/blog-7.jpg" alt="image" />
                                            </figure>
                                        </li>

                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src="/images/blog/blog-8.jpg" alt="image" />
                                            </figure>
                                        </li>

                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src="/images/blog/blog-9.jpg" alt="image" />
                                            </figure>
                                        </li>
                                    </ul>

                                    <p>The IT industry offers a sea of options from platforms programming languages methodologies technologies tools and more. IT consulting services are important because they play a vital role in businesses by covering the management implementation deployment and maintenance of an IT infrastructure. IT industry offers a sea of options, from platforms programming languages methodologies technologies tools and more. Consulting services are important because.</p>
                                </div>

                                <div className="article-author">
                                    <img src="/images/clients/clients-4.png" alt="image" />
                                    <p>The IT industry offers a sea of options, from platforms, programming the languages, methodologies, technologies, tools, and more. IT consulting services are portant for because the sea of options, from platforms</p>
                                    <span>Emma Kemeliy</span>
                                </div>

                                <div className="article-footer">
                                    <div className="article-tags">
                                        <a href="#">Agency</a>
                                        <a href="#">Branding</a>
                                    </div>

                                    <div className="article-share">
                                        <ul className="social">
                                            <li><span>Share On:</span></li>
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
                                </div>
 
                                <div className="article-comments">
                                    <h4>2 Comments</h4>
                                    
                                    <div className="comments-list">
                                        <img src="/images/clients/clients-1.png" alt="image" />

                                        <h5>Steven Smith</h5>
                                        <span>April 24, 2021 at 10:59 AM</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                        <a href="#" className="reply-btn">
                                            <i className="ri-reply-fill"></i>
                                        </a>
                                    </div>

                                    <div className="comments-list">
                                        <img src="/images/clients/clients-3.png" alt="image" />

                                        <h5>James Anderson</h5>
                                        <span>April 24, 2021 at 10:59 AM</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                        <a href="#" className="reply-btn">
                                            <i className="ri-reply-fill"></i>
                                        </a>
                                    </div>
                                </div>

                                <div className="article-leave-comment">
                                    <h4>Leave a Comment</h4>
                                    
                                    <form>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Name*" />
                                                </div>

                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Email*" />
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-12">
                                                <div className="form-group">
                                                    <textarea name="message" className="form-control" placeholder="Your Message"></textarea>
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <button type="submit" className="default-btn">
                                                    Post A Comment 
                                                    <i className="ri-arrow-right-line"></i>
                                                    <span></span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="pl-15">
                                <BlogSidebar />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Blog Details Style */}
                <style jsx>{`
                    .blog-details-desc .article-content {
                        margin-top: 30px;
                    }
                    .blog-details-desc .article-content .entry-meta {
                        padding-left: 0;
                        margin-bottom: 20px;
                    }
                    .blog-details-desc .article-content .entry-meta li {
                        list-style-type: none;
                        display: inline-block;
                        color: #79798D;
                        font-size: 14px;
                        font-weight: 400;
                        margin-right: 20px;
                        position: relative;
                        padding-left: 20px;
                    }
                    .blog-details-desc .article-content .entry-meta li:last-child {
                        margin-right: 0;
                    }
                    .blog-details-desc .article-content .entry-meta li a {
                        color: #79798D;
                    }
                    .blog-details-desc .article-content .entry-meta li i {
                        position: absolute;
                        left: 0;
                        top: 50%;
                        -webkit-transform: translateY(-50%);
                                transform: translateY(-50%);
                        color: #36CC72;
                        font-size: 14px;
                    }
                    .blog-details-desc .article-content p {
                        font-size: 15px;
                    }
                    .blog-details-desc .article-content h3 {
                        font-size: 28px;
                        font-weight: 500;
                        margin-top: 30px;
                        margin-bottom: 25px;
                    }
                    .blog-details-desc .article-content .features-list {
                        padding-left: 15px;
                        margin-top: 25px;
                        margin-bottom: 0;
                    }
                    .blog-details-desc .article-content .features-list li {
                        list-style-type: none;
                        font-size: 15px;
                        color: var(--paragraph-color);
                        position: relative;
                        padding-left: 25px;
                        margin-bottom: 15px;
                        line-height: 1.6;
                    }
                    .blog-details-desc .article-content .features-list li:last-child {
                        margin-bottom: 0;
                    }
                    .blog-details-desc .article-content .features-list li i {
                        font-size: 18px;
                        color: #36CC72;
                        position: absolute;
                        left: 0;
                        top: 4px;
                    }
                    .blog-details-desc .article-content .wp-block-gallery.columns-3 {
                        padding-left: 0;
                        list-style-type: none;
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: flex;
                        -ms-flex-wrap: wrap;
                            flex-wrap: wrap;
                        margin-right: -10px;
                        margin-left: -10px;
                        margin-bottom: 30px;
                        margin-top: 35px;
                    }
                    .blog-details-desc .article-content .wp-block-gallery.columns-3 li {
                        -webkit-box-flex: 0;
                            -ms-flex: 0 0 33.3333%;
                                flex: 0 0 33.3333%;
                        max-width: 33.3333%;
                        padding-right: 10px;
                        padding-left: 10px;
                    }
                    .blog-details-desc .article-content .wp-block-gallery.columns-3 li figure {
                        margin-bottom: 0;
                    }

                    // article-author
                    .blog-details-desc .article-author {
                        background-color: #F4F8FC;
                        padding: 50px 50px 50px 180px;
                        border-radius: 5px;
                        margin-top: 30px;
                        position: relative;
                    }
                    .blog-details-desc .article-author img {
                        position: absolute;
                        left: 55px;
                        top: 50%;
                        -webkit-transform: translateY(-50%);
                                transform: translateY(-50%);
                        border-radius: 50%;
                    }
                    .blog-details-desc .article-author p {
                        font-size: var(--font-size);
                        margin-bottom: 20px;
                    }
                    .blog-details-desc .article-author span {
                        color: var(--black-color);
                        font-size: 18px;
                        font-weight: 500;
                    }

                    // article-footer
                    .blog-details-desc .article-footer {
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: flex;
                        -ms-flex-wrap: wrap;
                            flex-wrap: wrap;
                        margin-top: 30px;
                    }
                    .blog-details-desc .article-footer .article-tags {
                        -webkit-box-flex: 0;
                            -ms-flex: 0 0 50%;
                                flex: 0 0 50%;
                        max-width: 50%;
                        color: var(--optional-color);
                    }
                    .blog-details-desc .article-footer .article-tags a {
                        display: inline-block;
                        background-color: #EAF0FF;
                        color: var(--main-color);
                        padding: 5px 15px;
                        margin-right: 5px;
                        font-size: 14px;
                        border-radius: 5px;
                    }
                    .blog-details-desc .article-footer .article-tags a:last-child {
                        margin-right: 0;
                    }
                    
                    .blog-details-desc .article-footer .article-tags a:hover {
                        background-color: var(--main-color);
                        color: var(--white-color);
                    }
                    .blog-details-desc .article-footer .article-share {
                        -webkit-box-flex: 0;
                            -ms-flex: 0 0 50%;
                                flex: 0 0 50%;
                        max-width: 50%;
                    }
                    .blog-details-desc .article-footer .article-share .social {
                        padding-left: 0;
                        list-style-type: none;
                        text-align: right;
                        margin-bottom: 0;
                    }
                    .blog-details-desc .article-footer .article-share .social li {
                        display: inline-block;
                        margin-left: 8px;
                    }
                    .blog-details-desc .article-footer .article-share .social li span {
                        display: inline-block;
                        font-size: 15px;
                        font-weight: 500;
                        position: relative;
                        top: -1px;
                    }
                    .blog-details-desc .article-footer .article-share .social li a i {
                        display: inline-block;
                        height: 35px;
                        width: 35px;
                        line-height: 35px;
                        background-color: #EAF0FF;
                        color: var(--main-color);
                        border-radius: 50px;
                        text-align: center;
                        font-size: var(--font-size);
                        -webkit-transition: var(--transition);
                        transition: var(--transition);
                    }
                    .blog-details-desc .article-footer .article-share .social li a i:hover {
                        background-color: var(--main-color);
                        color: var(--white-color);
                        -webkit-transform: translateY(-5px);
                                transform: translateY(-5px);
                    }

                    // article-tag 
                    .blog-details-desc .article-tag {
                        margin-top: 45px;
                    }
                    .blog-details-desc .article-tag h4 {
                        margin-bottom: 35px;
                        position: relative;
                        padding-bottom: 15px;
                        font-size: 20px;
                    }
                    .blog-details-desc .article-tag h4::before {
                        content: '';
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: 50px;
                        height: 1px;
                        bottom: -1px;
                        background-color: var(--main-color);
                    }

                    // article-comments
                    .blog-details-desc .article-comments {
                        margin-top: 30px;
                    }
                    .blog-details-desc .article-comments h4 {
                        margin-bottom: 35px;
                        position: relative;
                        padding-bottom: 15px;
                        font-size: 20px;
                    }
                    .blog-details-desc .article-comments h4::before {
                        content: '';
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: 50px;
                        height: 1px;
                        bottom: -1px;
                        background-color: var(--main-color);
                    }
                    .blog-details-desc .article-comments .comments-list {
                        position: relative;
                        padding-left: 110px;
                        margin-bottom: 45px;
                    }
                    .blog-details-desc .article-comments .comments-list:last-child {
                        margin-bottom: 0;
                    }
                    .blog-details-desc .article-comments .comments-list img {
                        position: absolute;
                        left: 0;
                        top: 0;
                    }
                    .blog-details-desc .article-comments .comments-list h5 {
                        font-size: 20px;
                        margin-bottom: 10px;
                    }
                    .blog-details-desc .article-comments .comments-list span {
                        display: inline-block;
                        margin-bottom: 10px;
                        font-size: 14px;
                        color: var(--paragraph-color);
                    }
                    .blog-details-desc .article-comments .comments-list p {
                        font-size: 15px;
                    }
                    .blog-details-desc .article-comments .comments-list .reply-btn {
                        font-size: 20px;
                        color: var(--black-color);
                        position: absolute;
                        right: 0;
                        top: 0;
                        -webkit-transition: var(--transition);
                        transition: var(--transition);
                    }
                    .blog-details-desc .article-comments .comments-list .reply-btn:hover {
                        color: var(--main-color);
                        -webkit-transform: translateY(-5px);
                                transform: translateY(-5px);
                    }

                    // article-leave-comment
                    .blog-details-desc .article-leave-comment {
                        margin-top: 45px;
                    }
                    .blog-details-desc .article-leave-comment h4 {
                        margin-bottom: 35px;
                        position: relative;
                        padding-bottom: 15px;
                        font-size: 20px;
                    }
                    .blog-details-desc .article-leave-comment h4::before {
                        content: '';
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: 50px;
                        height: 1px;
                        bottom: -1px;
                        background-color: var(--main-color);
                    }
                    .blog-details-desc .article-leave-comment form .form-group {
                        margin-bottom: 20px;
                    }
                    .blog-details-desc .article-leave-comment form .form-group .form-control {
                        height: 60px;
                        color: #79798D;
                        border: 1px solid #F4F8FC;
                        background-color: #F4F8FC;
                        display: block;
                        width: 100%;
                        border-radius: 5px;
                        padding: 15px;
                        -webkit-transition: var(--transition);
                        transition: var(--transition);
                        font-size: 15px;
                        font-weight: 400;
                        outline: 0;
                    }
                    .blog-details-desc .article-leave-comment form .form-group .form-control::-webkit-input-placeholder {
                        color: var(--paragraph-color);
                        -webkit-transition: var(--transition);
                        transition: var(--transition);
                    }
                    .blog-details-desc .article-leave-comment form .form-group .form-control:-ms-input-placeholder {
                        color: var(--paragraph-color);
                        -webkit-transition: var(--transition);
                        transition: var(--transition);
                    }
                    .blog-details-desc .article-leave-comment form .form-group .form-control::-ms-input-placeholder {
                        color: var(--paragraph-color);
                        -webkit-transition: var(--transition);
                        transition: var(--transition);
                    }
                    .blog-details-desc .article-leave-comment form .form-group .form-control::placeholder {
                        color: var(--paragraph-color);
                        -webkit-transition: var(--transition);
                        transition: var(--transition);
                    }
                    .blog-details-desc .article-leave-comment form .form-group .form-control:focus {
                        -webkit-box-shadow: none;
                                box-shadow: none;
                        background-color: transparent;
                        border: 1px solid var(--main-color);
                    }
                    .blog-details-desc .article-leave-comment form .form-group .form-control:focus::-webkit-input-placeholder {
                        color: transparent;
                    }
                    .blog-details-desc .article-leave-comment form .form-group .form-control:focus:-ms-input-placeholder {
                        color: transparent;
                    }
                    .blog-details-desc .article-leave-comment form .form-group .form-control:focus::-ms-input-placeholder {
                        color: transparent;
                    }
                    .blog-details-desc .article-leave-comment form .form-group .form-control:focus::placeholder {
                        color: transparent;
                    }
                    .blog-details-desc .article-leave-comment form .form-group textarea.form-control {
                        min-height: 135px;
                    }
                    .blog-details-desc .article-leave-comment form .default-btn {
                        margin-top: 5px;
                        -webkit-transform: unset;
                                transform: unset;
                    }

                    // Responsive Style
                    @media only screen and (max-width: 767px) {
                        .blog-details-desc .article-content .entry-meta li {
                            font-size: 12px;
                            margin-right: 5px;
                        }
                        .blog-details-desc .article-content .features-list {
                            padding-left: 0;
                        }
                        .blog-details-desc .article-author {
                            padding: 30px;
                        }
                        .blog-details-desc .article-author img {
                            position: relative;
                            left: 0;
                            top: unset;
                            -webkit-transform: unset;
                                    transform: unset;
                            margin-bottom: 20px;
                        }
                        .blog-details-desc .article-footer .article-tags {
                            -webkit-box-flex: unset;
                                -ms-flex: unset;
                                    flex: unset;
                            max-width: unset;
                        }
                        .blog-details-desc .article-footer .article-share {
                            -webkit-box-flex: unset;
                                -ms-flex: unset;
                                    flex: unset;
                            max-width: unset;
                        }
                        .blog-details-desc .article-review {
                            margin-top: 30px;
                        }
                        .blog-details-desc .article-review .review-list {
                            padding-left: 100px;
                            margin-bottom: 25px;
                        }
                        .blog-details-desc .article-review .review-list .reply-btn {
                            position: relative;
                        }
                        .blog-details-desc .article-comment {
                            margin-top: 30px;
                        }
                        .blog-details-desc .article-comment form .form-group {
                            margin-bottom: 20px;
                        }
                        .blog-details-desc .article-content h3 {
                            font-size: 25px;
                            line-height: 1.4;
                        }
                        .blog-details-desc .article-comments .comments-list {
                            padding-left: 100px;
                        }
                        .blog-details-desc .article-comments .comments-list h5 {
                            font-size: 17px;
                        }
                        .blog-details-desc .article-footer {
                            display: block;
                            text-align: center;
                        }
                        .blog-details-desc .article-footer .article-share .social {
                            text-align: center;
                            margin-top: 25px;
                        }
                    }

                    @media only screen and (min-width : 768px) and (max-width : 991px) {
                        .blog-details-desc .article-leave-comment form .form-group {
                            margin-bottom: 15px;
                        }
                    }

                    @media only screen and (min-width : 992px) and (max-width : 1199px) {
                        .blog-details-desc .article-comment form .form-group {
                            margin-bottom: 15px;
                        }
                    }
                `}</style>
            </div>

			<Footer />
		</>
    )
}

export default BlogDetails;