import React from 'react';

const WorkProcessTwo = () => {
    return (
        <>
            <div className="process-area pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-6">
                            <div className="single-process-box">
                                <i className="ri-hard-drive-line"></i>
                                <p>Research</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-6">
                            <div className="single-process-box bg-36CC72">
                                <i className="ri-pie-chart-line"></i>
                                <p>Analyze</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-6">
                            <div className="single-process-box bg-FF414B">
                                <i className="ri-quill-pen-line"></i>
                                <p>Design</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-6">
                            <div className="single-process-box bg-FF6D3D">
                                <i className="ri-focus-line"></i>
                                <p>Testing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Work Process Style */}
            <style jsx>{`
                .single-process-box {
                    background-color: var(--main-color);
                    padding: 35px 25px;
                    margin-bottom: 30px;
                    text-align: center;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    border-radius: 5px;
                }
                .single-process-box i {
                    font-size: 45px;
                    color: var(--white-color);
                }
                .single-process-box p {
                    font-size: 20px;
                    color: var(--white-color);
                    margin-top: 5px;
                }
                .single-process-box.bg-36CC72 {
                    background-color: #36CC72;
                }
                .single-process-box.bg-FF414B {
                    background-color: #FF414B;
                }
                .single-process-box.bg-FF6D3D {
                    background-color: #FF6D3D;
                }
                .single-process-box:hover {
                    -webkit-animation: bounce 1s;
                            animation: bounce 1s;
                }
        
                // Responsive Style
                @media only screen and (max-width: 767px) {
       
                }

                @media only screen and (min-width : 768px) and (max-width : 991px) {
                    
                }

                @media only screen and (min-width : 992px) and (max-width : 1199px) {
                    
                }
            `}</style>
        </>
    )
}

export default WorkProcessTwo;