import React from 'react';
import NavbarFour from '../components/_App/NavbarFour';
import PageBanner from '../components/Common/PageBanner';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';
import Footer from '../components/_App/Footer';

const ContactPage = () => {
    return (
        <>
			<NavbarFour />
			
			<PageBanner 
                pageTitle="Contact" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Contact"
            /> 
			 
            <ContactForm />

            <ContactInfo />

			<Footer />
		</>
    )
}

export default ContactPage;