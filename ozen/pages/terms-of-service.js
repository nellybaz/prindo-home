import React from 'react';
import NavbarFour from '../components/_App/NavbarFour';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';

const TermsOfService = () => {
    return (
        <>
			<NavbarFour />
			
			<PageBanner 
                pageTitle="Terms of Service" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Terms of Service"
            /> 
 
            <div className="terms-of-service-area ptb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12">
                            <div className="terms-of-service-content">

                                <img src="/images/terms-of-service.jpg" alt="image" />

                                <p><i>This Terms of Service was last updated on September 1, 2021.</i></p>
                                <h3><span>1.</span> Our Website</h3>
                                <p>Our website address is: http://ozen.com</p>
                                <blockquote className="blockquote">
                                    <p>We collect certain data from you directly, like information you enter yourself, data about your participation in courses, and data from third-party platforms you connect with Ozen. We also collect some data automatically, like information about your device and what parts of our Services you interact with or spend time using.</p>
                                </blockquote>
                                <h3><span>2.</span> Data You Provide to Us</h3>
                                <p>We may collect different data from or about you depending on how you use the Services. Below are some examples to help you better understand the data we collect.</p>
                                <h3><span>3.</span> How We Get Data About You</h3>
                                <p>We use tools like cookies, web beacons, analytics services, and advertising providers to gather the data listed above. Some of these tools offer you the ability to opt out of data collection.</p>
                                <h3><span>4.</span> What We Use Your Data For</h3>
                                <ol>
                                    <li>Responding to your questions and concerns;</li>
                                    <li>Sending you administrative messages and information, including messages from instructors and teaching assistants, notifications about changes to our Service, and updates to our agreements;</li>
                                    <li>Sending push notifications to your wireless device to provide updates and other relevant messages (which you can manage from the “options” or “settings” page of the mobile app);</li>
                                </ol>
                                <h3><span>5.</span> Your Choices About the Use of Your Data</h3>
                                <p>You can choose not to provide certain data to us, but you may not be able to use certain features of the Services.</p>
                                <ul>
                                    <li>To stop receiving promotional communications from us, you can opt out by using the unsubscribe mechanism in the promotional communication you receive or by changing the email preferences in your account. Note that regardless of your email preference settings, we will send you transactional and relationship messages regarding the Services, including administrative confirmations, order confirmations, important updates about the Services, and notices about our policies.</li>
                                    <li>The browser or device you use may allow you to control cookies and other types of local data storage. Your wireless device may also allow you to control whether location or other data is collected and shared. You can manage Adobe’s LSOs through their Website Storage Settings panel.</li>
                                    <li>To get information and control cookies used for tailored advertising from participating companies, see the consumer opt-out pages for the Network Advertising Initiative and Digital Advertising Alliance, or if you’re located in the European Union, visit the Your Online Choices site. To opt out of Google’s display advertising or customize Google Display Network ads, visit the Google Ads Settings page. To opt out of Taboola’s targeted ads, see the Opt-out Link in their Cookie Policy.</li>
                                    <li>To update data you provide directly, log into your account and update your account at any time.</li>
                                </ul>
                                <h3><span>6.</span> Our Policy Concerning Children</h3>
                                <p>We recognize the privacy interests of children and encourage parents and guardians to take an active role in their children’s online activities and interests. Children under 13 (or under 16 in the European Economic Area) should not use the Services. If we learn that we’ve collected personal data from a child under those ages.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .terms-of-service-content img {
                        border-radius: 5px;
                        margin-bottom: 30px;
                    }
                    .terms-of-service-content h3 {
                        margin-top: 25px;
                        margin-bottom: 15px;
                        font-size: 25px;
                    }
                    .terms-of-service-content .blockquote, .terms-of-service-content blockquote {
                        margin-top: 25px;
                        margin-bottom: 30px;
                        background-color: #e6f2f5;
                        text-align: left !important;
                        padding: 25px !important;
                        border-radius: 5px;
                    }
                    .terms-of-service-content .blockquote p, .terms-of-service-content blockquote p {
                        margin-bottom: 0;
                        line-height: 1.8;
                        font-size: 15px !important;
                        font-weight: 500;
                    }
                    .terms-of-service-content .blockquote::after, .terms-of-service-content blockquote::after {
                        display: none;
                    }
                    .terms-of-service-content .blockquote::before, .terms-of-service-content blockquote::before {
                        display: none;
                    }
                    .terms-of-service-content ol, .terms-of-service-content ul {
                        margin-top: 20px;
                    }
                    .terms-of-service-content ol li, .terms-of-service-content ul li {
                        margin-bottom: 10px;
                        color: var(--paragraph-color);
                        line-height: 1.8;
                        font-weight: 500;
                        font-size: 15px;
                    }
                    
                    // Responsive Style
                    @media only screen and (max-width: 767px) {
                        .terms-of-service-content h3 {
                            font-size: 22px;
                        }
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

export default TermsOfService;