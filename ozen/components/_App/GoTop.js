import React from 'react';

const GoTop = ({scrollStepInPx, delayInMs}) => {

    const [thePosition, setThePosition] = React.useState(false);
    const timeoutRef = React.useRef(null);

    React.useEffect(() => {
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                setThePosition(true)
            } else {
                setThePosition(false);
            }
        });
    }, [])
    
    const onScrollStep = () => {
        if (window.pageYOffset === 0){
            clearInterval(timeoutRef.current);
        }
        window.scroll(0, window.pageYOffset - scrollStepInPx);
    }

    const scrollToTop = () => {
        timeoutRef.current = setInterval(onScrollStep, delayInMs);
    }

    const renderGoTopIcon = () => {
        return (
            <>
                <div className={`go-top ${thePosition ? 'active' : ''}`} onClick={scrollToTop}>
                    <i className='ri-arrow-up-s-line'></i>
                </div>

                {/* Go Top Button Style */}
                <style jsx>{`
                    .go-top {
                        position: fixed;
                        cursor: pointer;
                        bottom: -100px;
                        right: 20px;
                        color: var(--white-color);
                        background-color: var(--black-color);
                        z-index: 4;
                        width: 45px;
                        text-align: center;
                        height: 45px;
                        line-height: 50px;
                        opacity: 0;
                        visibility: hidden;
                        border-radius: 50%;
                        font-size: 30px;
                        -webkit-transition: var(--transition);
                        transition: var(--transition);
                        overflow: hidden;
                        -webkit-box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
                                box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
                    }
                    .go-top.active {
                        opacity: 1;
                        visibility: visible;
                        bottom: 50px;
                    }
                    .go-top:hover {
                        background-color: var(--main-color);
                        color: var(--white-color);
                        -webkit-transition: var(--transition);
                        transition: var(--transition);
                        -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
                                box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
                        -webkit-transform: translateY(-5px);
                                transform: translateY(-5px);
                    }

                    // Responsive Style
                    @media only screen and (max-width: 767px) {
                        .go-top {
                            width: 40px;
                            height: 40px;
                            line-height: 45px;
                            font-size: 26px;
                            bottom: 20px !important;
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

    return (
        <>
            {renderGoTopIcon()}
        </>
    )
}

export default GoTop;