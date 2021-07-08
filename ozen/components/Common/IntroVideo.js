import React from 'react';
import ModalVideo from 'react-modal-video';

const IntroVideo = () => {

    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className="video-area pt-100">
                <div className="container">
                    <div className="video-view-content">
                        <div className="video-image">
                            <img src="/images/video/video-1.jpg" alt="image" />
                        </div>

                        <div
                            onClick={e => {e.preventDefault(); openModal()}}
                            className="video-btn popup-youtube"
                        > 
                            <i className="ri-play-line"></i>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="video-shape-1">
                    <img src="/images/video/shape-1.png" alt="image" />
                </div>
                <div className="video-shape-2">
                    <img src="/images/video/shape-2.png" alt="image" />
                </div>
            </div>

            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />

            {/* Intro Video Style */}
            <style jsx>{`
                .video-area {
                    position: relative;
                    z-index: 1;
                    overflow: hidden;
                }
                .video-view-content {
                    text-align: center;
                    position: relative;
                    z-index: 1;
                    max-width: 1050px;
                    margin: auto;
                }
                .video-view-content .video-image {
                    overflow: hidden;
                }
                .video-view-content .video-image img {
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .video-view-content .video-btn {
                    display: inline-block;
                    width: 70px;
                    height: 70px;
                    line-height: 80px;
                    background-color: var(--white-color);
                    border-radius: 50%;
                    color: var(--optional-color);
                    position: absolute;
                    z-index: 1;
                    top: 50%;
                    -webkit-transform: translateY(-50%);
                            transform: translateY(-50%);
                    left: 0;
                    right: 0;
                    margin: auto;
                    text-align: center;
                    font-size: 40px;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    cursor: pointer;
                }
                .video-view-content .video-btn i {
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .video-view-content .video-btn::before {
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
                .video-view-content .video-btn:hover {
                    background-color: var(--optional-color);
                }
                .video-view-content .video-btn:hover i {
                    color: var(--white-color);
                }
                .video-view-content:hover .video-image {
                    overflow: hidden;
                }
                .video-view-content:hover .video-image img {
                    -webkit-transform: scale(1.1);
                            transform: scale(1.1);
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
                
                // shape image
                .video-shape-1 {
                    position: absolute;
                    top: 20%;
                    left: 10%;
                    -webkit-transform: translateY(-20%) translateX(-10%);
                            transform: translateY(-20%) translateX(-10%);
                }
                .video-shape-2 {
                    position: absolute;
                    top: 50%;
                    right: 10%;
                    -webkit-transform: translateY(-50%) translateX(-10%);
                            transform: translateY(-50%) translateX(-10%);
                }
                
                // Responsive Style
                @media only screen and (max-width: 767px) {
                    .video-shape-1 {
                        display: none;
                    }
                    .video-shape-2 {
                        display: none;
                    }
                }

                @media only screen and (min-width : 768px) and (max-width : 991px) {
                    .video-shape-1 {
                        display: none;
                    }
                    .video-shape-2 {
                        display: none;
                    }
                }

                @media only screen and (min-width : 992px) and (max-width : 1199px) {
                    
                }
            `}</style>
        </>
    )
}

export default IntroVideo;