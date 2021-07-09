import React from "react";
import Navbar from "../components/_App/Navbar";
import MainBanner from "../components/HomeDemoOne/MainBanner";
import Services from "../components/HomeDemoOne/Services";
import PricePlansOne from "../components/PricePlans/PricePlansOne";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/_App/Footer";

const IndexPage = () => {
  return (
    <>
      <Navbar />

      <MainBanner />

      <Services />

      <PricePlansOne />

      <ContactForm />

      <Footer />
    </>
  );
};

export default IndexPage;
