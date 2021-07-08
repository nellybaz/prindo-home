import React from 'react';
import NavbarFour from '../components/_App/NavbarFour';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
import Footer from '../components/_App/Footer';
import PricePlansTwo from '../components/PricePlans/PricePlansTwo';
import CTA from '../components/Common/CTA';

const Pricing = () => {
    return (
        <>
			<NavbarFour />
			
			<PageBanner 
                pageTitle="Pricing" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Pricing"
            /> 
			
            <PricePlansTwo />

            <div className="ptb-100">
                <CTA />
            </div>

			<Footer />
		</>
    )
}

export default Pricing;