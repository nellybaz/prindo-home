import React from 'react';
import NavbarThree from '../components/_App/NavbarThree';
import MainBanner from '../components/HomeDemoThree/MainBanner';
import PartnerStyleThree from '../components/Common/PartnerStyleThree';
import FeaturesCard from '../components/HomeDemoThree/FeaturesCard';
import AboutUsContent from '../components/HomeDemoThree/AboutUsContent';
import FunFactStyleTwo from '../components/Common/FunFactStyleTwo';
import IntroVideoStyleTwo from '../components/Common/IntroVideoStyleTwo';
import Services from '../components/HomeDemoThree/Services';
import RecentCaseStudySlider from '../components/CaseStudy/RecentCaseStudySlider';
import OurRespectiveClients from '../components/Common/OurRespectiveClients';
import PricePlansOne from '../components/PricePlans/PricePlansOne';
import Team from '../components/Common/Team';
import CTA from '../components/Common/CTA';
import PopularBlogPost from '../components/Common/PopularBlogPost';
import Footer from '../components/_App/Footer';

const IndexPageThree = () => {
    return (
        <>
            <NavbarThree />

            <MainBanner />

            <div className="pb-100">
                <PartnerStyleThree />
            </div>

            <FeaturesCard />

            <AboutUsContent />

            <FunFactStyleTwo />

            <IntroVideoStyleTwo />

            <Services />
  
            <RecentCaseStudySlider />

            <OurRespectiveClients />

            <PricePlansOne />

            <Team />
 
            <CTA />
              
            <PopularBlogPost />
  
            <Footer />
        </>
    )
}

export default IndexPageThree;