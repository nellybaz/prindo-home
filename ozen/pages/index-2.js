import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import MainBanner from '../components/HomeDemoTwo/MainBanner';
import FeaturesCard from '../components/HomeDemoTwo/FeaturesCard';
import AboutUsContent from '../components/HomeDemoTwo/AboutUsContent';
import IntroVideo from '../components/Common/IntroVideo';
import Services from '../components/HomeDemoTwo/Services';
import FunFacts from '../components/Common/FunFacts';
import RecentCaseStudySlider from '../components/CaseStudy/RecentCaseStudySlider';
import OurRespectiveClientsTwo from '../components/Common/OurRespectiveClientsTwo';
import PricePlansTwo from '../components/PricePlans/PricePlansTwo';
import PopularBlogPost from '../components/Common/PopularBlogPost';
import CTA from '../components/Common/CTA';
import PartnerStyleTwo from '../components/Common/PartnerStyleTwo';
import Footer from '../components/_App/Footer';
 
const IndexPageTwo = () => {
    return (
        <>
            <NavbarTwo />

            <MainBanner />

            <FeaturesCard />

            <AboutUsContent />

            <IntroVideo />

            <Services />

            <FunFacts />

            <RecentCaseStudySlider />

            <OurRespectiveClientsTwo />

            <PricePlansTwo />

            <PopularBlogPost />
 
            <CTA />

            <PartnerStyleTwo />
 
            <Footer />
        </>
    )
}

export default IndexPageTwo;