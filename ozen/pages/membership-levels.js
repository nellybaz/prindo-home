import React from 'react';
import NavbarFour from '../components/_App/NavbarFour';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';

const MembershipLevels = () => {
    return (
        <>
			<NavbarFour />
			
			<PageBanner 
                pageTitle="Membership Levels" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Membership Levels"
            /> 

            <div className="membership-levels-area ptb-100">
                <div className="container">
                    <div className="membership-levels-table table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>
                                        <span className="desc-1">$500</span>
                                        <span className="desc-2">Silver Membership</span>
                                        <span className="desc-3">You can view few features</span>
                                    </th>
                                    <th>
                                        <span className="desc-1">$1,000</span>
                                        <span className="desc-2">Gold Membership</span>
                                        <span className="desc-3">You can view most features</span>
                                    </th>
                                    <th>
                                        <span className="desc-1">$1,500</span>
                                        <span className="desc-2">Diamond Membership</span>
                                        <span className="desc-3">You can view all features</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Number of features</td>
                                    <td>4</td>
                                    <td>8</td>
                                    <td>15</td>
                                </tr>
                                <tr>
                                    <td><a href="#">Investment Fundamentals & Data Analytics</a></td>
                                    <td className="item-check"><i className='ri-check-line'></i></td>
                                    <td className="item-check"><i className='ri-check-line'></i></td>
                                    <td className="item-check"><i className='ri-check-line'></i></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Hands-On Python & R In Data Science</a></td>
                                    <td className="item-check"><i className='ri-check-line'></i></td>
                                    <td className="item-check"><i className='ri-check-line'></i></td>
                                    <td className="item-check"><i className='ri-check-line'></i></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Complete Data Science Bootcamp</a></td>
                                    <td className="item-check"><i className='ri-check-line'></i></td>
                                    <td className="item-check"><i className='ri-check-line'></i></td>
                                    <td className="item-check"><i className='ri-check-line'></i></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Programming MasterclassName for Developers</a></td>
                                    <td className="item-none"><i className='ri-close-line'></i></td>
                                    <td className="item-check"><i className='ri-check-line'></i></td>
                                    <td className="item-check"><i className='ri-check-line'></i></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Hands-On Artificial Neural Networks</a></td>
                                    <td className="item-none"><i className='ri-close-line'></i></td>
                                    <td className="item-check"><i className='ri-check-line'></i></td>
                                    <td className="item-check"><i className='ri-check-line'></i></td>
                                </tr>
                                <tr>
                                    <td><a href="#">PRINCE2® Practitioner Certification Training</a></td>
                                    <td className="item-none"><i className='ri-close-line'></i></td>
                                    <td className="item-check"><i className='ri-check-line'></i></td>
                                    <td className="item-check"><i className='ri-check-line'></i></td>
                                </tr>
                                <tr>
                                    <td><a href="#">PMI-RMP® Certification Training</a></td>
                                    <td className="item-none"><i className='ri-close-line'></i></td>
                                    <td className="item-none"><i className='ri-close-line'></i></td>
                                    <td className="item-check"><i className='ri-check-line'></i></td>
                                </tr>
                                <tr>
                                    <td><a href="#">PRINCE2® Foundation Certification Training</a></td>
                                    <td className="item-none"><i className='ri-close-line'></i></td>
                                    <td className="item-none"><i className='ri-close-line'></i></td>
                                    <td className="item-check"><i className='ri-check-line'></i></td>
                                </tr>
                                <tr>
                                    <td><a href="#">PMP® Plus</a></td>
                                    <td className="item-none"><i className='ri-close-line'></i></td>
                                    <td className="item-none"><i className='ri-close-line'></i></td>
                                    <td className="item-check"><i className='ri-check-line'></i></td>
                                </tr>
                                <tr>
                                    <td><a href="#">PMP® Renewal Pack</a></td>
                                    <td className="item-none"><i className='ri-close-line'></i></td>
                                    <td className="item-check"><i className='ri-check-line'></i></td>
                                    <td className="item-check"><i className='ri-check-line'></i></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Digital Project Manager</a></td>
                                    <td className="item-none"><i className='ri-close-line'></i></td>
                                    <td className="item-none"><i className='ri-close-line'></i></td>
                                    <td className="item-check"><i className='ri-check-line'></i></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Agile Project Management; Agile Delivery</a></td>
                                    <td className="item-none"><i className='ri-close-line'></i></td>
                                    <td className="item-none"><i className='ri-close-line'></i></td>
                                    <td className="item-check"><i className='ri-check-line'></i></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Vue JS 2 - The Complete Guide</a></td>
                                    <td className="item-none"><i className='ri-close-line'></i></td>
                                    <td className="item-none"><i className='ri-close-line'></i></td>
                                    <td className="item-check"><i className='ri-check-line'></i></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Everything You Need to Program in Python</a></td>
                                    <td className="item-none"><i className='ri-close-line'></i></td>
                                    <td className="item-none"><i className='ri-close-line'></i></td>
                                    <td className="item-check"><i className='ri-check-line'></i></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Mathematical Foundation For Machine Learning</a></td>
                                    <td className="item-none"><i className='ri-close-line'></i></td>
                                    <td className="item-none"><i className='ri-close-line'></i></td>
                                    <td className="item-check"><i className='ri-check-line'></i></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Drawing Course - Beginner to Advanced</a></td>
                                    <td className="item-none"><i className='ri-close-line'></i></td>
                                    <td className="item-none"><i className='ri-close-line'></i></td>
                                    <td className="item-check"><i className='ri-check-line'></i></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Deep Learning and Artificial Intelligence</a></td>
                                    <td className="item-none"><i className='ri-close-line'></i></td>
                                    <td className="item-none"><i className='ri-close-line'></i></td>
                                    <td className="item-check"><i className='ri-check-line'></i></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Information About UI/UX Design Degree</a></td>
                                    <td className="item-check"><i className='ri-check-line'></i></td>
                                    <td className="item-check"><i className='ri-check-line'></i></td>
                                    <td className="item-check"><i className='ri-check-line'></i></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Photography Photo modify and Beautiful</a></td>
                                    <td className="item-none"><i className='ri-close-line'></i></td>
                                    <td className="item-none"><i className='ri-close-line'></i></td>
                                    <td className="item-check"><i className='ri-check-line'></i></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Professional IT Expert Certificate Course</a></td>
                                    <td className="item-none"><i className='ri-close-line'></i></td>
                                    <td className="item-none"><i className='ri-close-line'></i></td>
                                    <td className="item-check"><i className='ri-check-line'></i></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        <a href="#" className="select-btn">Get it now</a>
                                    </td>
                                    <td>
                                        <a href="#" className="select-btn">Get it now</a>
                                    </td>
                                    <td>
                                        <a href="#" className="select-btn">Get it now</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            
                <style jsx>{`
                    .membership-levels-table .table {
                        margin-bottom: 0;
                    }
                    .membership-levels-table .table thead th {
                        vertical-align: middle;
                        background-color: var(--main-color);
                        white-space: nowrap;
                        padding: 20px;
                        text-align: center;
                        color: var(--white-color);
                        border-left: 1px solid var(--white-color);
                        border-right: 1px solid var(--white-color);
                        border-bottom: none;
                    }
                    .membership-levels-table .table thead th .desc-1 {
                        color: var(--white-color);
                        margin-bottom: 0;
                        font-size: 35px;
                        font-weight: 500;
                        font-family: var(--main-font-family);
                        display: block;
                    }
                    .membership-levels-table .table thead th .desc-2 {
                        color: var(--white-color);
                        margin-top: 15px;
                        margin-bottom: 10px;
                        font-size: var(--font-size);
                        font-weight: 400;
                        font-family: var(--main-font-family);
                        display: block;
                    }
                    .membership-levels-table .table thead th .desc-3 {
                        color: var(--white-color);
                        font-size: var(--font-size);
                        font-weight: 400;
                        font-family: var(--main-font-family);
                        display: block;
                    }
                    .membership-levels-table .table thead th:first-child {
                        border-left: none;
                    }
                    .membership-levels-table .table thead th:last-child {
                        border-right: none;
                    }
                    .membership-levels-table .table tbody tr td {
                        padding: 20px 25px;
                        white-space: nowrap;
                        vertical-align: middle;
                        border: none;
                        text-align: center;
                        font-size: var(--font-size);
                        font-weight: 600;
                    }
                    .membership-levels-table .table tbody tr td:first-child {
                        text-align: left;
                    }
                    .membership-levels-table .table tbody tr td.item-check i {
                        width: 20px;
                        height: 20px;
                        line-height: 20px;
                        border-radius: 100%;
                        background-color: #0eb582;
                        color: var(--white-color);
                        display: block;
                        margin: 0 auto;
                    }
                    .membership-levels-table .table tbody tr td.item-none i {
                        width: 20px;
                        height: 20px;
                        line-height: 20px;
                        border-radius: 100%;
                        background-color: #d85554;
                        color: var(--white-color);
                        display: block;
                        margin: 0 auto;
                    }
                    .membership-levels-table .table tbody tr td .select-btn {
                        display: inline-block;
                        color: var(--black-color);
                        background-color: #efefef;
                        padding: 15px 35px;
                        border-radius: 5px;
                        margin-top: 10px;
                        font-size: var(--font-size);
                        font-weight: bold;
                    }
                    .membership-levels-table .table tbody tr td .select-btn:hover {
                        color: var(--white-color);
                        background-color: var(--main-color);
                    }
                    
                    // Responsive Style
                    @media only screen and (max-width: 767px) {

                    }

                    @media only screen and (min-width : 768px) and (max-width : 991px) {
                        
                    }

                    @media only screen and (min-width : 992px) and (max-width : 1199px) {
                        
                    }
                `}</style>
            </div>
 
			<Footer />
		</>
    )
}

export default MembershipLevels;