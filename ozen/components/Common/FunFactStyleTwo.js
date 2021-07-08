import React from 'react';

const FunFactStyleTwo = () => {
    return (
        <>
            <div className="fun-facts-area pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-6">
                            <div className="single-fun-fact-box">
                                <div className="icon">
                                    <i className="ri-user-line"></i>
                                </div>
                                <h3>
                                    3230 <span className="sign-icon">+</span>
                                </h3>
                                <p>Total Cases</p>
                            </div>
                        </div>

                        <div className="col-md-3 col-6">
                            <div className="single-fun-fact-box">
                                <div className="icon bg-FF414B">
                                    <i className="ri-briefcase-line"></i>
                                </div>
                                <h3>
                                    3026 <span className="sign-icon">+</span>
                                </h3>
                                <p>Case Solved</p>
                            </div>
                        </div>

                        <div className="col-md-3 col-6">
                            <div className="single-fun-fact-box">
                                <div className="icon bg-36CC72">
                                    <i className="ri-trophy-line"></i>
                                </div>
                                <h3>
                                    320 <span className="sign-icon">+</span>
                                </h3>
                                <p>Winning Awards</p>
                            </div>
                        </div>

                        <div className="col-md-3 col-6">
                            <div className="single-fun-fact-box">
                                <div className="icon bg-FFCA40">
                                    <i className="ri-flag-line"></i>
                                </div>
                                <h3>
                                    102 <span className="sign-icon">+</span>
                                </h3>
                                <p>Country Over</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fun Fact Style */}
            <style jsx>{`
                .fun-facts-area {
                    position: relative;
                    z-index: 1;
                    overflow: hidden;
                }
                .single-fun-fact-box {
                    margin-bottom: 30px;
                    position: relative;
                    padding-left: 85px;
                }
                .single-fun-fact-box .icon {
                    position: absolute;
                    left: 0;
                    top: 50%;
                    -webkit-transform: translateY(-50%);
                            transform: translateY(-50%);
                }
                .single-fun-fact-box .icon i {
                    display: inline-block;
                    height: 70px;
                    width: 70px;
                    line-height: 70px;
                    font-size: 35px;
                    background-color: #E5F0FF;
                    color: var(--main-color);
                    text-align: center;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    border-radius: 2px;
                }
                .single-fun-fact-box .icon.bg-FF414B i {
                    background-color: #FFECED;
                    color: #FF414B;
                }
                .single-fun-fact-box .icon.bg-36CC72 i {
                    background-color: #EBFAF1;
                    color: #36CC72;
                }
                .single-fun-fact-box .icon.bg-FFCA40 i {
                    background-color: #FFFAEC;
                    color: #FFCA40;
                }
                .single-fun-fact-box h3 {
                    font-size: 36px;
                    margin-bottom: 0;
                    font-weight: 500;
                }
                .single-fun-fact-box h3 .sign-icon {
                    font-size: 36px;
                    position: relative;
                    left: -8px;
                }
                .single-fun-fact-box p {
                    margin-top: 5px;
                }
                .single-fun-fact-box:hover .icon i {
                    background-color: var(--main-color);
                    color: var(--white-color);
                }
                .single-fun-fact-box:hover .icon.bg-FF414B i {
                    background-color: #FF414B;
                    color: var(--white-color);
                }
                .single-fun-fact-box:hover .icon.bg-36CC72 i {
                    background-color: #36CC72;
                    color: var(--white-color);
                }
                .single-fun-fact-box:hover .icon.bg-FFCA40 i {
                    background-color: #FFCA40;
                    color: var(--white-color);
                }
                
                // Responsive Style
                @media only screen and (max-width: 767px) {
                    .single-fun-fact-box {
                        padding-left: 0;
                        text-align: center;
                    }
                    .single-fun-fact-box .icon {
                        position: relative;
                        top: unset;
                        -webkit-transform: unset;
                                transform: unset;
                        margin-bottom: 20px;
                    }
                    .single-fun-fact-box h3 {
                        font-size: 25px;
                    }
                    .single-fun-fact-box h3 .sign-icon {
                        font-size: 25px;
                    }
                }

                @media only screen and (min-width : 768px) and (max-width : 991px) {
                    .single-fun-fact-box {
                        padding-left: 0;
                        text-align: center;
                    }
                    .single-fun-fact-box .icon {
                        position: relative;
                        top: unset;
                        -webkit-transform: unset;
                                transform: unset;
                        margin-bottom: 20px;
                    }
                    .single-fun-fact-box h3 {
                        font-size: 32px;
                    }
                }

                @media only screen and (min-width : 992px) and (max-width : 1199px) {
                    
                }
            `}</style>
        </>
    )
}

export default FunFactStyleTwo;