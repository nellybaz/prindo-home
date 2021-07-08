import React from 'react';
import ModalVideo from 'react-modal-video';

const IntroVideoStyleTwo = () => {

    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>

            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />

            <div className="technology-area pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12">
                            <div className="technology-content">
                                <div className="tag">
                                    <img src="/images/technology/tag-icon.png" alt="image" />
                                </div>
            
                                <h3>Lightning-Fast Tech Support, Guaranteed</h3>
                                <p>As a midsize software development company, we combine the best of both worlds. We have the focus and speed of the small IT outsourcing companies along with the scalability and expertise of the big ones.</p>
                                <span><b>Regan Rosen,</b> CEO at Flod Agency</span>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-12">
                            <div className="technology-image">
                                <img src="/images/technology/technology-1.jpg" alt="image" />
 
                                <div
                                    onClick={e => {e.preventDefault(); openModal()}}
                                    className="video-btn popup-youtube"
                                > 
                                    <i className="ri-play-line"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="technology-shape-1">
                    <img src="/images/technology/shape-1.png" alt="image" />
                </div>
                <div className="technology-shape-2">
                    <img src="/images/technology/shape-2.png" alt="image" />
                </div>
                <div className="technology-shape-3">
                    <img src="/images/technology/shape-1.png" alt="image" />
                </div>
                <div className="technology-shape-4">
                    <img src="/images/technology/shape-2.png" alt="image" />
                </div>
                <div className="technology-shape-5">
                    <img src="/images/technology/shape-3.png" alt="image" />
                </div>
                <div className="technology-shape-6">
                    <img src="/images/technology/shape-4.png" alt="image" />
                </div>
                <div className="technology-shape-7">
                    <img src="/images/technology/shape-3.png" alt="image" />
                </div>
                <div className="technology-shape-8">
                    <img src="/images/technology/shape-4.png" alt="image" />
                </div>
            </div>
            
            {/* Intro Video Style */}
            <style jsx>{`
                .technology-area {
                    position: relative;
                    z-index: 1;
                    overflow: hidden;
                }
                .technology-content {
                    background-color: var(--white-color);
                    -webkit-box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
                            box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
                    padding: 50px;
                    max-width: 545px;
                    margin-left: auto;
                    border-radius: 5px;
                    position: absolute;
                    top: 32%;
                    -webkit-transform: translateY(-32%);
                            transform: translateY(-32%);
                    z-index: 1;
                }
                .technology-content .tag {
                    display: inline-block;
                    height: 50px;
                    width: 50px;
                    line-height: 50px;
                    background-color: var(--white-color);
                    text-align: center;
                    border-radius: 50px;
                    -webkit-box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
                            box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
                }
                .technology-content h3 {
                    font-size: 30px;
                    margin-top: 25px;
                    margin-bottom: 15px;
                    line-height: 1.5;
                }
                .technology-content p {
                    margin-bottom: 20px;
                }
                .technology-content span {
                    font-weight: 500;
                    font-size: var(--font-size);
                    color: var(--paragraph-color);
                }
                .technology-content span b {
                    color: #36CC72;
                    font-weight: 500;
                }
                .technology-image {
                    overflow: hidden;
                    position: relative;
                }
                .technology-image img {
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    border-radius: 5px;
                }
                .technology-image:hover img {
                    -webkit-transform: scale(1.1);
                            transform: scale(1.1);
                }
                .technology-image .video-btn {
                    display: inline-block;
                    width: 70px;
                    height: 70px;
                    line-height: 80px;
                    background-color: var(--white-color);
                    border-radius: 50%;
                    color: var(--optional-color);
                    position: absolute;
                    z-index: 1;
                    bottom: 15%;
                    left: 25%;
                    -webkit-transform: translateY(-15%) translateX(-25%);
                            transform: translateY(-15%) translateX(-25%);
                    text-align: center;
                    font-size: 40px;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    cursor: pointer;
                }
                .technology-image .video-btn i {
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .technology-image .video-btn::before {
                    content: '';
                    display: block;
                    position: absolute;
                    top: 0;
                    right: 0;
                    z-index: -1;
                    bottom: 0;
                    left: 0;
                    border-radius: 50%;
                    border: 1px solid var(--white-color);
                    -webkit-animation: ripple 1s linear infinite;
                            animation: ripple 1s linear infinite;
                }
                .technology-image .video-btn:hover {
                    background-color: var(--optional-color);
                }
                .technology-image .video-btn:hover i {
                    color: var(--white-color);
                }

                // Shape Image
                .technology-shape-1 {
                    position: absolute;
                    top: 5%;
                    left: 25%;
                    -webkit-transform: translateY(-5%) translateX(-25%);
                            transform: translateY(-5%) translateX(-25%);
                }
                .technology-shape-2 {
                    position: absolute;
                    top: 5%;
                    left: 28%;
                    -webkit-transform: translateY(-5%) translateX(-28%);
                            transform: translateY(-5%) translateX(-28%);
                }
                .technology-shape-3 {
                    position: absolute;
                    top: 22%;
                    left: 32%;
                    -webkit-transform: translateY(-22%) translateX(-32%);
                            transform: translateY(-22%) translateX(-32%);
                    z-index: 1;
                }
                .technology-shape-4 {
                    position: absolute;
                    top: 20%;
                    left: 35%;
                    -webkit-transform: translateY(-20%) translateX(-35%);
                            transform: translateY(-20%) translateX(-35%);
                    z-index: 1;
                }
                .technology-shape-5 {
                    position: absolute;
                    bottom: 26%;
                    left: 35%;
                    -webkit-transform: translateY(-26%) translateX(-35%);
                            transform: translateY(-26%) translateX(-35%);
                    z-index: 1;
                }
                .technology-shape-6 {
                    position: absolute;
                    bottom: 20%;
                    left: 30%;
                    -webkit-transform: translateY(-20%) translateX(-30%);
                            transform: translateY(-20%) translateX(-30%);
                    z-index: 1;
                }
                .technology-shape-7 {
                    position: absolute;
                    top: 35%;
                    right: 1%;
                    -webkit-transform: translateY(-35%) translateX(-1%);
                            transform: translateY(-35%) translateX(-1%);
                    z-index: -1;
                }
                .technology-shape-8 {
                    position: absolute;
                    top: 40%;
                    right: 2%;
                    -webkit-transform: translateY(-40%) translateX(-2%);
                            transform: translateY(-40%) translateX(-2%);
                    z-index: -1;
                }

                @-webkit-keyframes ripple {
                    0% {
                        -webkit-transform: scale(1);
                                transform: scale(1);
                    }
                    75% {
                        -webkit-transform: scale(1.75);
                                transform: scale(1.75);
                        opacity: 1;
                    }
                    100% {
                        -webkit-transform: scale(2);
                                transform: scale(2);
                        opacity: 0;
                    }
                }
                @keyframes ripple {
                    0% {
                        -webkit-transform: scale(1);
                                transform: scale(1);
                    }
                    75% {
                        -webkit-transform: scale(1.75);
                                transform: scale(1.75);
                        opacity: 1;
                    }
                    100% {
                        -webkit-transform: scale(2);
                                transform: scale(2);
                        opacity: 0;
                    }
                }
	
                // Responsive Style
                @media only screen and (max-width: 767px) {
                    .technology-content {
                        padding: 20px;
                        max-width: 100%;
                        margin: auto;
                        position: relative;
                        top: unset;
                        -webkit-transform: unset;
                                transform: unset;
                        border: 1px solid #eeeeee;
                    }
                    .technology-content h3 {
                        font-size: 20px;
                        margin-bottom: 12px;
                    }
                    .technology-content p {
                        font-size: 14px;
                    }
                    .technology-content span {
                        font-size: 15px;
                    }
                    .technology-image {
                        text-align: center;
                        margin-top: 30px;
                    }
                    .technology-image .video-btn {
                        top: 50%;
                        left: 50%;
                        -webkit-transform: translateY(-50%) translateX(-50%);
                                transform: translateY(-50%) translateX(-50%);
                    }
                    .technology-shape-1, .technology-shape-2, .technology-shape-3, .technology-shape-4, .technology-shape-5, .technology-shape-6, .technology-shape-7, .technology-shape-8 {
                        display: none;
                    }
                }

                @media only screen and (min-width : 768px) and (max-width : 991px) {
                    .technology-content {
                        padding: 50px;
                        max-width: 100%;
                        margin: auto;
                        position: relative;
                        top: unset;
                        -webkit-transform: unset;
                                transform: unset;
                        border: 1px solid #eeeeee;
                    }
                    .technology-image {
                        text-align: center;
                        margin-top: 30px;
                    }
                    .technology-image .video-btn {
                        top: 50%;
                        left: 50%;
                        -webkit-transform: translateY(-50%) translateX(-50%);
                                transform: translateY(-50%) translateX(-50%);
                    }
                    .technology-shape-1, .technology-shape-2, .technology-shape-3, .technology-shape-4, .technology-shape-5, .technology-shape-6, .technology-shape-7, .technology-shape-8 {
                        display: none;
                    }
                }

                @media only screen and (min-width : 992px) and (max-width : 1199px) {
                    .technology-content {
                        padding: 30px;
                        top: 10%;
                        -webkit-transform: translateY(-10%);
                                transform: translateY(-10%);
                    }
                    .technology-content h3 {
                        font-size: 25px;
                    }
                    .technology-shape-5 {
                        left: 45%;
                        -webkit-transform: translateY(-26%) translateX(-45%);
                                transform: translateY(-26%) translateX(-45%);
                    }
                    .technology-shape-6 {
                        bottom: 15%;
                        left: 45%;
                        -webkit-transform: translateY(-15%) translateX(-45%);
                                transform: translateY(-15%) translateX(-45%);
                    }
                    .technology-image .video-btn {
                        top: 50%;
                        left: 50%;
                        -webkit-transform: translateY(-50%) translateX(-50%);
                                transform: translateY(-50%) translateX(-50%);
                    }
                }
            `}</style>
        </>
    )
}

export default IntroVideoStyleTwo;