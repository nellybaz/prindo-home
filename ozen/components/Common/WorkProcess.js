import React from 'react';

const WorkProcess = () => {
    return (
        <>
            <div className="process-area">
                <div className="container">
                    <div className="process-inner-box">
                        <div className="row">
                            <div className="col-lg-3 col-6">
                                <div className="single-process">
                                    <i className="ri-hard-drive-line"></i>
                                    <p>Research</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6">
                                <div className="single-process bg-36CC72">
                                    <i className="ri-pie-chart-line"></i>
                                    <p>Analyze</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6">
                                <div className="single-process bg-FF414B">
                                    <i className="ri-quill-pen-line"></i>
                                    <p>Design</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6">
                                <div className="single-process bg-FF6D3D">
                                    <i className="ri-focus-line"></i>
                                    <p>Testing</p>
                                </div>
                            </div>
                        </div>

                        <div className="process-bar-shape">
                            <img src="/images/process-bar.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Work Process Style */}
            <style jsx>{`
                .process-inner-box {
                    background-color: #F4F8FC;
                    padding-top: 80px;
                    padding-bottom: 65px;
                    padding-left: 50px;
                    padding-right: 50px;
                    position: relative;
                    z-index: 1;
                    border-radius: 5px;
                }
                .single-process {
                    background-color: var(--main-color);
                    padding: 35px 25px;
                    max-width: 165px;
                    margin: 0 auto 30px;
                    text-align: center;
                    position: relative;
                    z-index: 1;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .single-process::before {
                    content: '';
                    position: absolute;
                    right: -15px;
                    bottom: -15px;
                    z-index: -1;
                    width: 100%;
                    height: 100%;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    background-color: var(--white-color);
                }
                .single-process::after {
                    content: '';
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    z-index: -1;
                    width: 100%;
                    height: 100%;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    background-color: var(--main-color);
                }
                .single-process i {
                    font-size: 35px;
                    color: var(--white-color);
                }
                .single-process p {
                    font-size: 18px;
                    color: var(--white-color);
                    margin-top: 5px;
                }
                .single-process.bg-36CC72::after {
                    background-color: #36CC72;
                }
                .single-process.bg-FF414B::after {
                    background-color: #FF414B;
                }
                .single-process.bg-FF6D3D::after {
                    background-color: #FF6D3D;
                }
                .single-process:hover {
                    -webkit-animation: bounce 1s;
                            animation: bounce 1s;
                }
                .process-bar-shape {
                    position: absolute;
                    top: 50%;
                    -webkit-transform: translateY(-50%);
                            transform: translateY(-50%);
                    left: 0;
                    right: 0;
                    text-align: center;
                }
        
                // Responsive Style
                @media only screen and (max-width: 767px) {
                    .process-inner-box {
                        padding-top: 50px;
                        padding-bottom: 35px;
                        padding-left: 30px;
                        padding-right: 30px;
                    }
                    .single-process {
                        padding: 20px 10px;
                    }
                    .single-process p {
                        font-size: 14px;
                    }
                }

                @media only screen and (min-width : 768px) and (max-width : 991px) {
                    
                }

                @media only screen and (min-width : 992px) and (max-width : 1199px) {
                    
                }
            `}</style>
        </>
    )
}

export default WorkProcess;