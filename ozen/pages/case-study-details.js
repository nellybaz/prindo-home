import React from 'react';
import NavbarFour from '../components/_App/NavbarFour';
import PageBanner from '../components/Common/PageBanner';
import CaseStudySidebar from '../components/CaseStudyDetails/CaseStudySidebar';
import Footer from '../components/_App/Footer';

const CaseStudyDetails = () => {
    return (
        <>
			<NavbarFour />
			
			<PageBanner 
                pageTitle="Case Study Details" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Case Study Details"
            /> 
            <>
                <div className="case-details-area ptb-100">
                    <div className="container">
                        <div className="case-details-image">
                            <img src="/images/cases-details/cases-details-1.jpg" alt="image" />
                        </div>

                        <div className="row">
                            <div className="col-lg-9 col-md-12">
                                <div className="case-details-content">
                                    <h3>Design and Development for IT Startups</h3>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus elit bibendum adipiscing tincidunt mattis orci consequat egestas mattis. Convallis massa feugiat sapien urna egestas elit vitae, ipsum. In pulvinar urna, viverra quam habitasse blandit eget. Quis semper consectetur sed a purus id ac, auctor. Sem sed eleifend eu iaculis enim.</p>
                                    
                                    <p>Urna tellus, duis nec consectetur tempor venenatis risus volutpat. Sit sem ornare eget auctor amet vitae. Eu nulla facilisi posuere tellus massa dignissim. Ut amet viverra non amet enim at venenatis viverra mauris. Malesuada</p>

                                    <br />

                                    <h3>Project Description</h3>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus elit bibendum adipiscing tincidunt mattis orci consequat egestas mattis. Convallis massa feugiat sapien urna egestas elit vitae, ipsum. In pulvinar urna, viverra quam habitasse blandit eget. Quis semper consectetur sed a purus id ac, auctor. Sem sed eleifend eu iaculis enim.</p>

                                    <p>Urna tellus, duis nec consectetur tempor venenatis risus volutpat. Sit sem ornare eget auctor amet vitae. Eu nulla facilisi posuere tellus massa dignissim. Ut amet viverra non amet enim at venenatis viverra mauris. Malesuada Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus elit bibendum adipiscing tincidunt mattis orci consequat egestas mattis. Convallis massa feugiat sapien urna egestas elit vitae, ipsum. In pulvinar urna, viverra quam habitasse blandit eget. Quis semper consectetur sed a purus id ac, auctor. Sem sed eleifend eu iaculis enim.</p>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus elit bibendum adipiscing tincidunt mattis orci consequat egestas mattis. Convallis massa feugiat sapien urna egestas elit vitae, ipsum. In pulvinar urna,</p>
                                </div>

                                <div className="case-details-overview-image">
                                    <img src="/images/cases-details/cases-details-2.jpg" alt="image" />
                                </div>

                                <div className="case-details-overview-image">
                                    <img src="/images/cases-details/cases-details-3.jpg" alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-12">
                                <CaseStudySidebar />
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .case-details-image {
                        text-align: center;
                        margin-bottom: 40px;
                    }
                    .case-details-content {
                        margin-right: 50px;
                    }
                    .case-details-content h3 {
                        font-size: 28px;
                        margin-bottom: 15px;
                    }
                    .case-details-content p {
                        font-size: 15px;
                    }
                    .case-details-overview-image {
                        margin-top: 35px;
                    }

                    // Responsive Style
                    @media only screen and (max-width: 767px) {
                        .case-details-image {
                            margin-bottom: 25px;
                        }
                        .case-details-content {
                            margin-right: 0;
                        }
                        .case-details-content h3 {
                            font-size: 22px;
                        }
                    }

                    @media only screen and (min-width : 768px) and (max-width : 991px) {
                        .case-details-content {
                            margin-right: 0;
                        }
                    }

                    @media only screen and (min-width : 992px) and (max-width : 1199px) {
                        .case-details-content {
                            margin-right: 0;
                        }
                    }
                `}</style>
            </>
			<Footer />
		</>
    )
}

export default CaseStudyDetails;