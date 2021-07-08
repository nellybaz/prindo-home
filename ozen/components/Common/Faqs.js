import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

const Faqs = () => {
    return (
        <>
            <div className="faq-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Frequently Asked Questions</h2>
                        <p>Which peoples loves us a lot, please check out what about says about us</p>
                    </div>
                    
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12">
                            <div className="faq-image">
                                <img src="/images/faq/faq-1.png" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-12">
                            <div className="faq-accordion">
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faqs;