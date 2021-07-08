import React from 'react';

const TechSupport = () => {
    return (
        <>
            <div className="support-area">
                <div className="container">
                    <div className="support-content">
                        <div className="tag">
                            <img src="/images/experiences/tag-icon.png" alt="image" />
                        </div>

                        <h3>Lightning-Fast Tech Support, Guaranteed</h3>
                        <p>As a midsize software development company, we combine the best of both worlds. We have the focus and speed of the small IT outsourcing companies along with the scalability and expertise of the big ones.</p>
                        <span>- Regan Rosen, CEO at Ozen Agency</span>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="support-shape-1">
                    <img src="/images/support/shape-1.png" alt="image" />
                </div>
                <div className="support-shape-2">
                    <img src="/images/support/shape-2.png" alt="image" />
                </div>
                <div className="support-shape-3">
                    <img src="/images/support/shape-3.png" alt="image" />
                </div>
                <div className="support-shape-4">
                    <img src="/images/support/shape-4.png" alt="image" />
                </div>
                <div className="support-shape-5">
                    <img src="/images/support/shape-5.png" alt="image" />
                </div>
                <div className="support-shape-6">
                    <img src="/images/support/shape-6.png" alt="image" />
                </div>
            </div>

            {/* Tech Support Style */}
            <style jsx>{`
                .support-area {
                    background-image: url(/images/support/support-bg-1.jpg);
                    background-position: top center;
                    background-size: cover;
                    background-repeat: no-repeat;
                    position: relative;
                    z-index: 1;
                    padding-top: 100px;
                    padding-bottom: 100px;
                    overflow: hidden;
                    background-attachment: fixed;
                }
                .support-content {
                    background-color: var(--white-color);
                    padding: 50px;
                    max-width: 545px;
                    margin-left: auto;
                    border-radius: 5px;
                }
                .support-content .tag {
                    display: inline-block;
                    height: 50px;
                    width: 50px;
                    line-height: 50px;
                    background-color: var(--white-color);
                    text-align: center;
                    border-radius: 50px;
                    -webkit-box-shadow: 1px -2px 35px 10px rgba(0, 0, 0, 0.1);
                            box-shadow: 1px -2px 35px 10px rgba(0, 0, 0, 0.1);
                }
                .support-content h3 {
                    font-size: 30px;
                    margin-top: 25px;
                    margin-bottom: 15px;
                    line-height: 1.5;
                }
                .support-content p {
                    margin-bottom: 20px;
                }
                .support-content span {
                    font-weight: 500;
                    font-size: var(--font-size);
                    color: var(--paragraph-color);
                }
                .support-shape-1 {
                    position: absolute;
                    top: 0;
                    left: 5%;
                    -webkit-transform: translateY(0%) translateX(-5%);
                            transform: translateY(0%) translateX(-5%);
                }
                .support-shape-2 {
                    position: absolute;
                    bottom: 0;
                    left: 35%;
                    -webkit-transform: translateY(0%) translateX(-35%);
                            transform: translateY(0%) translateX(-35%);
                }
                .support-shape-3 {
                    position: absolute;
                    top: 30%;
                    right: 20%;
                    -webkit-transform: translateY(-30%) translateX(-20%);
                            transform: translateY(-30%) translateX(-20%);
                }
                .support-shape-4 {
                    position: absolute;
                    top: 32%;
                    right: 18%;
                    -webkit-transform: translateY(-32%) translateX(-18%);
                            transform: translateY(-32%) translateX(-18%);
                }
                .support-shape-5 {
                    position: absolute;
                    top: 15%;
                    right: 5%;
                    -webkit-transform: translateY(-15%) translateX(-5%);
                            transform: translateY(-15%) translateX(-5%);
                }
                .support-shape-6 {
                    position: absolute;
                    bottom: 10%;
                    right: 10%;
                    -webkit-transform: translateY(-10%) translateX(-10%);
                            transform: translateY(-10%) translateX(-10%);
                }
	
                // Responsive Style
                @media only screen and (max-width: 767px) {
                    .support-area {
                        padding-top: 50px;
                        padding-bottom: 50px;
                    }
                    .support-content {
                        padding: 35px 25px;
                        margin: auto;
                    }
                    .support-content h3 {
                        font-size: 20px;
                    }
                    .support-content p {
                        font-size: 15px;
                    }
                    .support-content span {
                        font-size: 15px;
                    }
                    .support-shape-1 {
                        display: none;
                    }
                    .support-shape-2 {
                        display: none;
                    }
                    .support-shape-3 {
                        display: none;
                    }
                    .support-shape-4 {
                        display: none;
                    }
                    .support-shape-5 {
                        display: none;
                    }
                    .support-shape-6 {
                        display: none;
                    }
                }

                @media only screen and (min-width : 768px) and (max-width : 991px) {
                    .support-area {
                        padding-top: 70px;
                        padding-bottom: 70px;
                    }
                    .support-content {
                        padding: 35px 25px;
                        margin: auto;
                    }
                    .support-shape-1 {
                        display: none;
                    }
                    .support-shape-2 {
                        display: none;
                    }
                    .support-shape-3 {
                        display: none;
                    }
                    .support-shape-4 {
                        display: none;
                    }
                    .support-shape-5 {
                        display: none;
                    }
                    .support-shape-6 {
                        display: none;
                    } 
                }

                @media only screen and (min-width : 992px) and (max-width : 1199px) {
                    
                }
            `}</style>
        </>
    )
}

export default TechSupport;