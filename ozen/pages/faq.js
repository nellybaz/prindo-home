import React from 'react';
import NavbarFour from '../components/_App/NavbarFour';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
import Footer from '../components/_App/Footer';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

const FAQs = () => {
    return (
        <>
			<NavbarFour />
			
			<PageBanner 
                pageTitle="FAQs" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="FAQs"
            /> 
			
            <div className="faq-area ptb-100">
                <div className="container">
                    <div className="faq-accordion accordion-box">
                        <Accordion allowZeroExpanded preExpanded={['a']}>
                            <AccordionItem uuid="a">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Why Are Consultants Important?
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p>The IT industry offers a sea of options, from platforms, programming languages, methodologies, technologies, tools, and more. IT consulting services are important because they play a vital role in businesses by covering the management, implementation, deployment, and maintenance of an IT infrastructure. IT industry offers a sea of options, from platforms, programming languages, methodologies, technologies, tools, and more.</p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="b">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What is The Purpose of a Consultant?
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p>The IT industry offers a sea of options, from platforms, programming languages, methodologies, technologies, tools, and more. IT consulting services are important because they play a vital role in businesses by covering the management, implementation, deployment, and maintenance of an IT infrastructure. IT industry offers a sea of options, from platforms, programming languages, methodologies, technologies, tools, and more.</p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="c">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What Attracts You To The Role of a Consultant?
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p>The IT industry offers a sea of options, from platforms, programming languages, methodologies, technologies, tools, and more. IT consulting services are important because they play a vital role in businesses by covering the management, implementation, deployment, and maintenance of an IT infrastructure. IT industry offers a sea of options, from platforms, programming languages, methodologies, technologies, tools, and more.</p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="d">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What Are The Advantages of Being a Consultant?
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p>The IT industry offers a sea of options, from platforms, programming languages, methodologies, technologies, tools, and more. IT consulting services are important because they play a vital role in businesses by covering the management, implementation, deployment, and maintenance of an IT infrastructure. IT industry offers a sea of options, from platforms, programming languages, methodologies, technologies, tools, and more.</p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="e">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Is Consulting a Good Career?
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p>The IT industry offers a sea of options, from platforms, programming languages, methodologies, technologies, tools, and more. IT consulting services are important because they play a vital role in businesses by covering the management, implementation, deployment, and maintenance of an IT infrastructure. IT industry offers a sea of options, from platforms, programming languages, methodologies, technologies, tools, and more.</p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="f">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How is Working in Consulting?
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p>The IT industry offers a sea of options, from platforms, programming languages, methodologies, technologies, tools, and more. IT consulting services are important because they play a vital role in businesses by covering the management, implementation, deployment, and maintenance of an IT infrastructure. IT industry offers a sea of options, from platforms, programming languages, methodologies, technologies, tools, and more.</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    <div className="ticket-box">
                        <h3>Have Any Question in Mind Please Call or Mail Us</h3>

                        <div className="box-one">
                            <i className="ri-customer-service-line"></i>
                            <a href="tel:3128959800">(312) 895-9800</a>
                        </div>

                        <div className="box-two">
                            <i className="ri-earth-line"></i>
                            <a href="mailto:hello.me@ozen.com">hello.me@ozen.com</a>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="faq-shape-1">
                    <img src="/images/faq/shape-1.png" alt="image" />
                </div>
                <div className="faq-shape-2">
                    <img src="/images/faq/shape-2.png" alt="image" />
                </div>
                <div className="faq-shape-3">
                    <img src="/images/faq/shape-3.png" alt="image" />
                </div>
                <div className="faq-shape-4">
                    <img src="/images/faq/shape-4.png" alt="image" />
                </div>
                <div className="faq-shape-5">
                    <img src="/images/faq/shape-5.png" alt="image" />
                </div>
            </div>
	 
			<Footer />
		</>
    )
}

export default FAQs;