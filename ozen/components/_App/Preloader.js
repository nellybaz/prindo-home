import React from 'react'

const Preloader = () => {
    return (
        <>
            <div className="preloader-area">
                <div className="spinner">
                    <div className="inner">
                        <div className="disc"></div>
                        <div className="disc"></div>
                        <div className="disc"></div>
                    </div>
                </div>
            </div>

            {/* Preloader Style */}
            <style jsx>{`
                .preloader-area {
                    position: fixed;
                    top: 0;
                    background-color: var(--main-color);
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 99999;
                    text-align: center;
                }
                .preloader-area .spinner {
                    width: 4em;
                    height: 4em;
                    -webkit-transform: perspective(20em) rotateX(-24deg) rotateY(20deg) rotateZ(30deg);
                            transform: perspective(20em) rotateX(-24deg) rotateY(20deg) rotateZ(30deg);
                    -webkit-transform-style: preserve-3d;
                            transform-style: preserve-3d;
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 45%;
                    -webkit-transform: translateY(-45%);
                            transform: translateY(-45%);
                    margin-left: auto;
                    margin-right: auto;
                }
                .preloader-area .spinner .disc {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    border-radius: 100%;
                    border: 0.3em dotted var(--white-color);
                }
                .preloader-area .spinner .disc:nth-child(1) {
                    -webkit-animation: rotate 12s linear infinite;
                            animation: rotate 12s linear infinite;
                }
                .preloader-area .spinner .disc:nth-child(2) {
                    -webkit-animation: rotateDisc2 12s linear infinite;
                            animation: rotateDisc2 12s linear infinite;
                }
                .preloader-area .spinner .disc:nth-child(3) {
                    -webkit-animation: rotateDisc3 12s linear infinite;
                            animation: rotateDisc3 12s linear infinite;
                }
                .preloader-area .spinner .inner {
                    width: 100%;
                    height: 100%;
                    -webkit-transform-style: preserve-3d;
                            transform-style: preserve-3d;
                    -webkit-animation: sphereSpin 6s linear infinite;
                            animation: sphereSpin 6s linear infinite;
                }
                .preloader-area .spinner::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    border-radius: 50%;
                    right: 0;
                    bottom: 0;
                    border: 2px dotted var(--white-color);
                    margin: -15px;
                }
                @-webkit-keyframes sphereSpin {
                    0% {
                        -webkit-transform: rotateX(360deg) rotateY(0deg);
                                transform: rotateX(360deg) rotateY(0deg);
                    }
                    100% {
                        -webkit-transform: rotateX(0deg) rotateY(360deg);
                                transform: rotateX(0deg) rotateY(360deg);
                    }
                }
                @keyframes sphereSpin {
                    0% {
                        -webkit-transform: rotateX(360deg) rotateY(0deg);
                                transform: rotateX(360deg) rotateY(0deg);
                    }
                    100% {
                        -webkit-transform: rotateX(0deg) rotateY(360deg);
                                transform: rotateX(0deg) rotateY(360deg);
                    }
                }
                @-webkit-keyframes rotate {
                    from {
                        -webkit-transform: rotate(0deg);
                                transform: rotate(0deg);
                    }
                    to {
                        -webkit-transform: rotate(360deg);
                                transform: rotate(360deg);
                    }
                }
                @keyframes rotate {
                    from {
                        -webkit-transform: rotate(0deg);
                                transform: rotate(0deg);
                    }
                    to {
                        -webkit-transform: rotate(360deg);
                                transform: rotate(360deg);
                    }
                }
                @-webkit-keyframes rotateDisc2 {
                    from {
                        -webkit-transform: rotateX(90deg) rotateZ(0deg);
                                transform: rotateX(90deg) rotateZ(0deg);
                    }
                    to {
                        -webkit-transform: rotateX(90deg) rotateZ(360deg);
                                transform: rotateX(90deg) rotateZ(360deg);
                    }
                }
                @keyframes rotateDisc2 {
                    from {
                        -webkit-transform: rotateX(90deg) rotateZ(0deg);
                                transform: rotateX(90deg) rotateZ(0deg);
                    }
                    to {
                        -webkit-transform: rotateX(90deg) rotateZ(360deg);
                                transform: rotateX(90deg) rotateZ(360deg);
                    }
                }
                @-webkit-keyframes rotateDisc3 {
                    from {
                        -webkit-transform: rotateY(90deg) rotateZ(0deg);
                                transform: rotateY(90deg) rotateZ(0deg);
                    }
                    to {
                        -webkit-transform: rotateY(90deg) rotateZ(360deg);
                                transform: rotateY(90deg) rotateZ(360deg);
                    }
                }
                @keyframes rotateDisc3 {
                    from {
                        -webkit-transform: rotateY(90deg) rotateZ(0deg);
                                transform: rotateY(90deg) rotateZ(0deg);
                    }
                    to {
                        -webkit-transform: rotateY(90deg) rotateZ(360deg);
                                transform: rotateY(90deg) rotateZ(360deg);
                    }
                }
            `}</style>
        </>
    )
}

export default Preloader;
