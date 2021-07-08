import React from 'react';
import Navbar from '../components/_App/Navbar';
import MainBanner from '../components/HomeDemoOne/MainBanner';
import PartnerStyleOne from '../components/Common/PartnerStyleOne';
import FeaturesCard from '../components/HomeDemoOne/FeaturesCard';
import AboutUsContent from '../components/HomeDemoOne/AboutUsContent';
import Services from '../components/HomeDemoOne/Services';
import TechSupport from '../components/Common/TechSupport';
import RecentCaseStudy from '../components/CaseStudy/RecentCaseStudy';
import OurRespectiveClients from '../components/Common/OurRespectiveClients';
import PricePlansOne from '../components/PricePlans/PricePlansOne';
import PopularBlogPost from '../components/Common/PopularBlogPost';
import CTA from '../components/Common/CTA';
import Footer from '../components/_App/Footer';

const IndexPage = () => {
    return (
        <>
            <Navbar />

            <MainBanner />

            <PartnerStyleOne />

            <FeaturesCard />

            <AboutUsContent />

            <Services />

            <TechSupport />

            <RecentCaseStudy />

            <OurRespectiveClients />

            <PricePlansOne />

            <PopularBlogPost />

            <div className="pb-100">
                <CTA />
            </div>
 
            <Footer />
        </>
    )
}

export default IndexPage;