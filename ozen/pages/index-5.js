import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import MainBanner from '../components/HomeDemoFive/MainBanner';
import FeaturesCard from '../components/HomeDemoFive/FeaturesCard';
import AboutUsContent from '../components/HomeDemoFive/AboutUsContent';
import IntroVideo from '../components/Common/IntroVideo';
import Services from '../components/HomeDemoFive/Services';
import FunFacts from '../components/Common/FunFacts';
import RecentCaseStudiesCard from '../components/CaseStudy/RecentCaseStudiesCard';
import OurRespectiveClientsTwo from '../components/Common/OurRespectiveClientsTwo';
import PricePlansTwo from '../components/PricePlans/PricePlansTwo';
import PopularBlogPost from '../components/Common/PopularBlogPost';
import CTA from '../components/Common/CTA';
import PartnerStyleTwo from '../components/Common/PartnerStyleTwo';
import Footer from '../components/_App/Footer';
 
const IndexPageFive = () => {
    return (
        <>
            <NavbarTwo />

            <MainBanner />

            <FeaturesCard />

            <AboutUsContent />

            <IntroVideo />

            <Services />

            <FunFacts />

            <RecentCaseStudiesCard />

            <OurRespectiveClientsTwo />

            <PricePlansTwo />

            <PopularBlogPost />
 
            <CTA />

            <PartnerStyleTwo />
 
            <Footer />
        </>
    )
}

export default IndexPageFive;