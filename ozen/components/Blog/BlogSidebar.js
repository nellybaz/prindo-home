import React from 'react';
import Link from 'next/link';

const BlogSidebar = () => {
    return (
        <>
            <div className="widget-area">
                <div className="widget widget_search">
                    <form className="search-form">
                        <input type="search" className="search-field" placeholder="Search Something" />
                        <button type="submit">
                            <i className="ri-search-line"></i>
                        </button>
                    </form>
                </div>

                <div className="widget widget_categories">
                    <h3 className="widget-title">Post Categories</h3>

                    <ul>
                        <li>
                            <Link href="/blog-details">
                                <a>Brand Identity Design <span>(20)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog-details">
                                <a>Digital Marketing <span>(08)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog-details">
                                <a>Design and Development <span>(15)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog-details">
                                <a>IT Startup Consulting <span>(22)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog-details">
                                <a>Cloud Computing Service <span>(12)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog-details">
                                <a>Domain and Hosting <span>(06)</span></a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="widget widget_posts_thumb">
                    <h3 className="widget-title">Popular Posts</h3>

                    <article className="item">
                        <Link href="/blog-details">
                            <a className="thumb">
                                <span className="fullimage cover bg1" role="img"></span>
                            </a>
                        </Link>

                        <div className="info">
                            <h4 className="title usmall">
                                <Link href="/blog-details">
                                    <a>Design is a Plan or Specification for the Construction.</a>
                                </Link>
                            </h4>

                            <span><i className="ri-time-line"></i> March 14, 2021</span>
                        </div>
                    </article>

                    <article className="item">
                        <Link href="/blog-details">
                            <a className="thumb">
                                <span className="fullimage cover bg2" role="img"></span>
                            </a>
                        </Link>

                        <div className="info">
                            <h4 className="title usmall">
                                <Link href="/blog-details">
                                    <a>Branding Involves Developing Strategy to Create a Point.</a>
                                </Link>
                            </h4>

                            <span><i className="ri-time-line"></i> March 14, 2021</span>
                        </div>
                    </article>

                    <article className="item">
                        <Link href="/blog-details">
                            <a className="thumb">
                                <span className="fullimage cover bg3" role="img"></span>
                            </a>
                        </Link>

                        <div className="info">
                            <h4 className="title usmall">
                                <Link href="/blog-details">
                                    <a>Digital Marketing is Tatally Different From Tradetion Marketing</a>
                                </Link>
                            </h4>

                            <span><i className="ri-time-line"></i> March 14, 2021</span>
                        </div>
                    </article>

                    <article className="item">
                        <Link href="/blog-details">
                            <a className="thumb">
                                <span className="fullimage cover bg4" role="img"></span>
                            </a>
                        </Link>

                        <div className="info">
                            <h4 className="title usmall">
                                <Link href="/blog-details">
                                    <a>The Data-Driven Approach to Understanding</a>
                                </Link>
                            </h4>

                            <span><i className="ri-time-line"></i> March 14, 2021</span>
                        </div>
                    </article>
                </div>

                <div className="widget widget_tag_cloud">
                    <h3 className="widget-title">Popular Tags</h3>

                    <div className="tagcloud">
                        <Link href="/blog">
                            <a>Agency</a>
                        </Link>

                        <Link href="/blog">
                            <a>Branding</a>
                        </Link>

                        <Link href="/blog">
                            <a>Marketing</a>
                        </Link>

                        <Link href="/blog">
                            <a>Design</a>
                        </Link>

                        <Link href="/blog">
                            <a>Development</a>
                        </Link>

                        <Link href="/blog">
                            <a>Consulting</a>
                        </Link>

                        <Link href="/blog">
                            <a>Startup</a>
                        </Link>

                        <Link href="/blog">
                            <a>Popular</a>
                        </Link>

                        <Link href="/blog">
                            <a>WordPress</a>
                        </Link>

                        <Link href="/blog">
                            <a>Financial</a>
                        </Link>

                        <Link href="/blog">
                            <a>Branding</a>
                        </Link>
                    </div>
                </div>
            </div>
        
            <style jsx>{`
                .widget-area .widget {
                    margin-bottom: 30px;
                }
                .widget-area .widget:last-child {
                    margin-bottom: 0;
                }
                .widget-area .widget .widget-title {
                    margin-bottom: 25px;
                    position: relative;
                    padding-bottom: 15px;
                    font-size: 20px;
                }
                .widget-area .widget .widget-title::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 50px;
                    height: 1px;
                    bottom: -1px;
                    background-color: var(--main-color);
                }
                .widget-area .widget_search form {
                    position: relative;
                }
                .widget-area .widget_search form .search-field {
                    height: 60px;
                    color: var(--black-color);
                    border: 1px solid #E6EDF6;
                    display: block;
                    width: 100%;
                    border-radius: 5px;
                    padding: 0 0 0 15px;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    font-size: 15px;
                    font-weight: 400;
                    outline: 0;
                }
                .widget-area .widget_search form .search-field::-webkit-input-placeholder {
                    color: var(--paragraph-color);
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .widget-area .widget_search form .search-field:-ms-input-placeholder {
                    color: var(--paragraph-color);
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .widget-area .widget_search form .search-field::-ms-input-placeholder {
                    color: var(--paragraph-color);
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .widget-area .widget_search form .search-field::placeholder {
                    color: var(--paragraph-color);
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .widget-area .widget_search form .search-field:focus::-webkit-input-placeholder {
                    color: transparent;
                }
                .widget-area .widget_search form .search-field:focus:-ms-input-placeholder {
                    color: transparent;
                }
                .widget-area .widget_search form .search-field:focus::-ms-input-placeholder {
                    color: transparent;
                }
                .widget-area .widget_search form .search-field:focus::placeholder {
                    color: transparent;
                }
                .widget-area .widget_search form button {
                    border: none;
                    background-color: var(--main-color);
                    color: var(--white-color);
                    height: 60px;
                    width: 60px;
                    position: absolute;
                    right: 0;
                    padding: 0;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    top: 0;
                    font-size: 20px;
                }
                .widget-area .widget_search form button i {
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 50%;
                    -webkit-transform: translateY(-50%);
                            transform: translateY(-50%);
                }
                .widget-area .widget_search form button:hover, .widget-area .widget_search form button:focus {
                    background-color: var(--optional-color);
                    color: var(--white-color);
                }
                .widget-area .widget_categories {
                    border: 1px solid #E6EDF6;
                    padding: 35px 30px;
                    border-radius: 5px;
                }
                .widget-area .widget_categories ul {
                    padding-left: 0;
                    margin-bottom: 0;
                    list-style-type: none;
                }
                .widget-area .widget_categories ul li {
                    margin-bottom: 18px;
                    overflow: hidden;
                    color: #79798D;
                    font-weight: 500;
                    font-size: 16px;
                }
                .widget-area .widget_categories ul li:last-child {
                    margin-bottom: 0;
                }
                .widget-area .widget_categories ul li a {
                    color: #79798D;
                    display: block;
                }
                .widget-area .widget_categories ul li a:hover {
                    color: var(--main-color);
                }
                .widget-area .widget_categories ul li a span {
                    float: right;
                }
                .widget-area .widget_posts_thumb {
                    position: relative;
                    overflow: hidden;
                    border: 1px solid #E6EDF6;
                    padding: 35px 30px;
                    border-radius: 5px;
                }
                .widget-area .widget_posts_thumb .item {
                    overflow: hidden;
                    margin-bottom: 20px;
                }
                .widget-area .widget_posts_thumb .item:last-child {
                    margin-bottom: 0;
                }
                .widget-area .widget_posts_thumb .item .thumb {
                    float: left;
                    height: 80px;
                    overflow: hidden;
                    display: block;
                    position: relative;
                    width: 80px;
                    margin-right: 15px;
                    z-index: 1;
                }
                .widget-area .widget_posts_thumb .item .thumb .fullimage {
                    width: 80px;
                    height: 80px;
                    display: inline-block;
                    border-radius: 5px;
                    background-size: cover !important;
                    background-repeat: no-repeat;
                    background-position: center center !important;
                }
                .widget-area .widget_posts_thumb .item .thumb .fullimage.bg1 {
                    background-image: url(/images/blog/blog-4.jpg);
                }
                .widget-area .widget_posts_thumb .item .thumb .fullimage.bg2 {
                    background-image: url(/images/blog/blog-5.jpg);
                }
                .widget-area .widget_posts_thumb .item .thumb .fullimage.bg3 {
                    background-image: url(/images/blog/blog-6.jpg);
                }
                .widget-area .widget_posts_thumb .item .thumb .fullimage.bg4 {
                    background-image: url(/images/blog/blog-7.jpg);
                }
                .widget-area .widget_posts_thumb .item .thumb::before, .widget-area .widget_posts_thumb .item .thumb::after {
                    -webkit-transition: all 0.8s cubic-bezier(0.2, 1, 0.22, 1);
                    transition: all 0.8s cubic-bezier(0.2, 1, 0.22, 1);
                    content: '';
                    background-color: var(--white-color);
                    position: absolute;
                    z-index: 1;
                    top: 50%;
                    left: 50%;
                    opacity: 0;
                    -webkit-transform: translate(-50%, -50%);
                            transform: translate(-50%, -50%);
                }
                .widget-area .widget_posts_thumb .item .thumb::before {
                    width: 40px;
                    height: 1px;
                    left: 100%;
                }
                .widget-area .widget_posts_thumb .item .thumb::after {
                    height: 40px;
                    width: 1px;
                    top: 0;
                }
                .widget-area .widget_posts_thumb .item .info {
                    overflow: hidden;
                }
                .widget-area .widget_posts_thumb .item .info span {
                    display: block;
                    color: #79798D;
                    margin-top: 8px;
                    font-size: 14px;
                    font-weight: 400;
                    position: relative;
                    padding-left: 20px;
                }
                .widget-area .widget_posts_thumb .item .info span i {
                    color: #36CC72;
                    position: absolute;
                    top: 50%;
                    -webkit-transform: translateY(-50%);
                            transform: translateY(-50%);
                    left: 0;
                }
                .widget-area .widget_posts_thumb .item .info .title {
                    margin-bottom: 0;
                    line-height: 1.5;
                    font-size: var(--font-size);
                    font-weight: 500;
                }
                .widget-area .widget_posts_thumb .item .info .title a {
                    display: inline-block;
                }
                .widget-area .widget_posts_thumb .item:hover .thumb::before, .widget-area .widget_posts_thumb .item:hover .thumb::after {
                    opacity: 1;
                    top: 50%;
                    left: 50%;
                }
                .widget-area .widget_tag_cloud {
                    border: 1px solid #E6EDF6;
                    padding: 35px 30px;
                    border-radius: 5px;
                }
                .widget-area .widget_tag_cloud .widget-title {
                    margin-bottom: 18px;
                }
                .widget-area .tagcloud a {
                    display: inline-block;
                    background: #f9f9f9;
                    color: #79798D;
                    padding: 8px 15px;
                    border: none;
                    border-radius: 3px;
                    font-size: 15px;
                    font-weight: 400;
                    margin-top: 8px;
                    margin-right: 5px;
                }
                .widget-area .tagcloud a:hover, .widget-area .tagcloud a:focus {
                    color: var(--white-color);
                    background-color: var(--main-color);
                }
                .widget-area .widget_recent_courses {
                    position: relative;
                    overflow: hidden;
                    border: 1px solid #E6EDF6;
                    padding: 35px 30px;
                    border-radius: 5px;
                }
                .widget-area .widget_recent_courses .item {
                    overflow: hidden;
                    margin-bottom: 20px;
                    border-bottom: 1px solid #eeeeee;
                    padding-bottom: 20px;
                }
                .widget-area .widget_recent_courses .item:last-child {
                    margin-bottom: 0;
                    border-bottom: none;
                    padding-bottom: 0;
                }
                .widget-area .widget_recent_courses .item .thumb {
                    float: left;
                    height: 80px;
                    overflow: hidden;
                    display: block;
                    position: relative;
                    width: 80px;
                    margin-right: 15px;
                    z-index: 1;
                }
                .widget-area .widget_recent_courses .item .thumb .fullimage {
                    width: 80px;
                    height: 80px;
                    display: inline-block;
                    border-radius: 3px;
                    background-size: cover !important;
                    background-repeat: no-repeat;
                    background-position: center center !important;
                }
                .widget-area .widget_recent_courses .item .thumb .fullimage.bg1 {
                    background-image: url(/images/courses/courses-1.jpg);
                }
                .widget-area .widget_recent_courses .item .thumb .fullimage.bg2 {
                    background-image: url(/images/courses/courses-2.jpg);
                }
                .widget-area .widget_recent_courses .item .thumb .fullimage.bg3 {
                    background-image: url(/images/courses/courses-3.jpg);
                }
                .widget-area .widget_recent_courses .item .thumb::before, .widget-area .widget_recent_courses .item .thumb::after {
                    -webkit-transition: all 0.8s cubic-bezier(0.2, 1, 0.22, 1);
                    transition: all 0.8s cubic-bezier(0.2, 1, 0.22, 1);
                    content: '';
                    background-color: var(--white-color);
                    position: absolute;
                    z-index: 1;
                    top: 50%;
                    left: 50%;
                    opacity: 0;
                    -webkit-transform: translate(-50%, -50%);
                            transform: translate(-50%, -50%);
                }
                .widget-area .widget_recent_courses .item .thumb::before {
                    width: 40px;
                    height: 1px;
                    left: 100%;
                }
                .widget-area .widget_recent_courses .item .thumb::after {
                    height: 40px;
                    width: 1px;
                    top: 0;
                }
                .widget-area .widget_recent_courses .item .info {
                    overflow: hidden;
                    margin-top: 5px;
                }
                .widget-area .widget_recent_courses .item .info span {
                    display: block;
                    color: var(--main-color);
                    text-transform: uppercase;
                    margin-bottom: 5px;
                    margin-top: -5px;
                    font-size: 18px;
                    font-weight: 500;
                    font-style: italic;
                }
                .widget-area .widget_recent_courses .item .info .title {
                    margin-bottom: 0;
                    line-height: 1.5;
                    font-size: var(--font-size);
                    font-weight: 600;
                }
                .widget-area .widget_recent_courses .item .info .title a {
                    display: inline-block;
                }
                .widget-area .widget_recent_courses .item:hover .thumb::before, .widget-area .widget_recent_courses .item:hover .thumb::after {
                    opacity: 1;
                    top: 50%;
                    left: 50%;
                }
                .widget-area .widget_insight ul {
                    padding-left: 0;
                    margin-bottom: 0;
                    list-style-type: none;
                }
                .widget-area .widget_insight ul li {
                    margin-bottom: -1px;
                }
                .widget-area .widget_insight ul li a {
                    position: relative;
                    display: block;
                    padding: 15px 25px 15px 40px;
                    color: var(--paragraph-color);
                    border: 1px solid #eeeeee;
                    font-size: 15px;
                    font-weight: 500;
                }
                .widget-area .widget_insight ul li a::before {
                    width: 5px;
                    height: 5px;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    background-color: var(--main-color);
                    content: '';
                    position: absolute;
                    left: 25px;
                    top: 50%;
                    -webkit-transform: translateY(-50%);
                            transform: translateY(-50%);
                    border-radius: 50%;
                }
                .widget-area .widget_insight ul li a:hover, .widget-area .widget_insight ul li a.active {
                    border-color: var(--main-color);
                    background-color: var(--main-color);
                    color: var(--white-color);
                }
                .widget-area .widget_insight ul li a:hover::before, .widget-area .widget_insight ul li a.active::before {
                    background-color: var(--white-color);
                }
                .widget-area .widget_insight ul li.active a {
                    border-color: var(--main-color);
                    background-color: var(--main-color);
                    color: var(--white-color);
                }
                .widget-area .widget_insight ul li.active a::before {
                    background-color: var(--white-color);
                }
	
                // Responsive Style
                @media only screen and (max-width: 767px) {
                    .widget-area {
                        margin-top: 35px;
                    }
                    .widget-area .widget_categories {
                        padding: 25px 20px;
                    }
                    .widget-area .widget_posts_thumb {
                        padding: 25px 20px;
                    }
                    .widget-area .widget_tag_cloud {
                        padding: 25px 20px;
                    }
                }

                @media only screen and (min-width : 768px) and (max-width : 991px) {
                    .widget-area {
                        margin-top: 35px;
                    }
                }

                @media only screen and (min-width : 992px) and (max-width : 1199px) {
                    .widget-area .widget_categories {
                        padding: 25px 20px;
                    }
                    .widget-area .widget_posts_thumb {
                        padding: 25px 20px;
                    }
                    .widget-area .widget_tag_cloud {
                        padding: 25px 20px;
                    }
                }
            `}</style>
        </>
    )
}

export default BlogSidebar;