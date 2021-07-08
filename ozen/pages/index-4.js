import React from 'react';
import Navbar from '../components/_App/Navbar';
import MainBanner from '../components/HomeDemoFour/MainBanner';
import PartnerStyleOne from '../components/Common/PartnerStyleOne';
import FeaturesCard from '../components/HomeDemoFour/FeaturesCard';
import AboutUsContent from '../components/HomeDemoFour/AboutUsContent';
import Services from '../components/HomeDemoFour/Services';
import TechSupport from '../components/Common/TechSupport';
import RecentCaseStudy from '../components/CaseStudy/RecentCaseStudy';
import OurRespectiveClients from '../components/Common/OurRespectiveClients';
import PricePlansOne from '../components/PricePlans/PricePlansOne';
import Team from '../components/Common/Team';
import PopularBlogPost from '../components/Common/PopularBlogPost';
import CTA from '../components/Common/CTA';
import Footer from '../components/_App/Footer';

const IndexPageFour = () => {
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

            <Team />

            <CTA />
           
            <PopularBlogPost />

            <Footer />
        </>
    )
}

export default IndexPageFour;