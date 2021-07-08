import React from 'react';
import Link from 'next/link';

const ComingSoon = () => {

    const [days, setDays] = React.useState('');
    const [hours, setHours] = React.useState('');
    const [minutes, setMinutes] = React.useState('');
    const [seconds, setSeconds] = React.useState('');

    React.useEffect(() => {
        const interval = setInterval(() => { 
            commingSoonTime();
        }, 1000);
        return () => clearInterval(interval);
    }, [])

    const commingSoonTime = () => {
        let endTime = new Date("August 23, 2022 17:00:00 PDT");
        let endTimeParse = (Date.parse(endTime)) / 1000;
        let now = new Date();
        let nowParse = (Date.parse(now) / 1000);
        let timeLeft = endTimeParse - nowParse;
        let days = Math.floor(timeLeft / 86400); 
        let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
    }

    return (
        <>
            <div className="coming-soon-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="coming-soon-content">
                            <h1>
                                <Link href="/">
                                    <a>Ozen</a>
                                </Link>
                            </h1>

                            <h2>We Are Launching Soon</h2>

                            <div id="timer" className="flex-wrap d-flex justify-content-center">
                                <div id="days" className="align-items-center flex-column d-flex justify-content-center">
                                    {days} <span>Days</span>
                                </div>
                                <div id="hours" className="align-items-center flex-column d-flex justify-content-center">
                                    {hours} <span>Hours</span>
                                </div>
                                <div id="minutes" className="align-items-center flex-column d-flex justify-content-center">
                                    {minutes} <span>Minutes</span>
                                </div>
                                <div id="seconds" className="align-items-center flex-column d-flex justify-content-center">
                                    {seconds} <span>Seconds</span>
                                </div>
                            </div>

                            <form className="newsletter-form">
                                <div className="form-group">
                                    <input type="email" className="input-newsletter" placeholder="Enter your email" name="EMAIL" required />
                                </div>
                                
                                <button type="submit" className="default-btn">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Coming Soon Style */}
            <style jsx>{`
                .coming-soon-area {
                    height: 100vh;
                    background-image: url(/images/coming-soon-bg.jpg);
                    background-position: center center;
                    background-size: cover;
                    background-repeat: no-repeat;
                }
                .coming-soon-content {
                    max-width: 750px;
                    background: var(--white-color);
                    border-radius: 10px;
                    overflow: hidden;
                    text-align: center;
                    padding: 45px 30px;
                    -webkit-box-shadow: 1px 5px 24px 0 rgba(68, 102, 242, 0.05);
                            box-shadow: 1px 5px 24px 0 rgba(68, 102, 242, 0.05);
                    margin: auto;
                }
                .coming-soon-content h1 {
                    font-size: 45px;
                    margin-bottom: 30px;
                }
                .coming-soon-content h1 a {
                    color: var(--black-color);
                }
                .coming-soon-content h1 a:hover {
                    color: var(--main-color);
                }
                .coming-soon-content h2 {
                    font-size: 30px;
                    margin-bottom: 0;
                }
                .coming-soon-content #timer {
                    margin-top: 45px;
                }
                .coming-soon-content #timer div {
                    background-color: var(--main-color);
                    color: var(--white-color);
                    width: 130px;
                    height: 130px;
                    border-radius: 50%;
                    font-size: 40px;
                    font-weight: bold;
                    margin-left: 5px;
                    margin-right: 5px;
                }
                .coming-soon-content #timer div span {
                    display: block;
                    margin-top: -2px;
                    font-size: 15px;
                    font-weight: 500;
                }
                .coming-soon-content .newsletter-form {
                    margin-top: 45px;
                    background-color: var(--white-color);
                    -webkit-box-shadow: 0 0 1.25rem rgba(108, 118, 134, 0.1);
                            box-shadow: 0 0 1.25rem rgba(108, 118, 134, 0.1);
                    padding: 30px;
                }
                .coming-soon-content .newsletter-form .form-group {
                    margin-bottom: 15px;
                    width: 100%;
                }
                .coming-soon-content .newsletter-form .form-group .input-newsletter {
                    border: none;
                    border: 1px solid #F4F8FC;
                    background-color: #F4F8FC;
                    padding: 20px;
                    color: var(--black-color);
                    height: 60px;
                    display: block;
                    width: 100%;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    font-size: var(--font-size);
                    font-weight: 500;
                    border-radius: 15px;
                }
                .coming-soon-content .newsletter-form .form-group .input-newsletter::-webkit-input-placeholder {
                    color: var(--paragraph-color);
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .coming-soon-content .newsletter-form .form-group .input-newsletter:-ms-input-placeholder {
                    color: var(--paragraph-color);
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .coming-soon-content .newsletter-form .form-group .input-newsletter::-ms-input-placeholder {
                    color: var(--paragraph-color);
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .coming-soon-content .newsletter-form .form-group .input-newsletter::placeholder {
                    color: var(--paragraph-color);
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .coming-soon-content .newsletter-form .form-group .input-newsletter:focus {
                    -webkit-box-shadow: none;
                            box-shadow: none;
                    outline: 0;
                    background-color: transparent;
                    border: 1px solid var(--main-color);
                }
                .coming-soon-content .newsletter-form .form-group .input-newsletter:focus::-webkit-input-placeholder {
                    color: transparent;
                }
                .coming-soon-content .newsletter-form .form-group .input-newsletter:focus:-ms-input-placeholder {
                    color: transparent;
                }
                .coming-soon-content .newsletter-form .form-group .input-newsletter:focus::-ms-input-placeholder {
                    color: transparent;
                }
                .coming-soon-content .newsletter-form .form-group .input-newsletter:focus::placeholder {
                    color: transparent;
                }
                .coming-soon-content .newsletter-form .default-btn {
                    width: 100%;
                    border-radius: 15px;
                    border: none;
                    position: relative;
                    top: 0;
                    left: 0;
                    padding: 20px;
                }
                .coming-soon-content .newsletter-form .validation-danger {
                    margin-top: 15px;
                    color: red;
                }
                
                // Responsive Style
                @media only screen and (max-width: 767px) {
                    .coming-soon-content {
                        padding: 30px 25px;
                    }
                    .coming-soon-content #timer {
                        margin-top: 20px;
                    }
                    .coming-soon-content #timer div {
                        width: 100px;
                        height: 105px;
                        margin-left: 5px;
                        margin-right: 5px;
                        font-size: 20px;
                        margin-top: 10px;
                    }
                    .coming-soon-content h2 {
                        font-size: 22px;
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

export default ComingSoon;