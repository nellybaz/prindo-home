import React from 'react';

const EventsTime = () => {
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
            <div className="p-relative">
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
            </div>

            <style jsx>{`
                #timer {
                    position: absolute;
                    z-index: 2;
                    right: 0;
                    left: 0;
                    bottom: 50px;
                }
                #timer div {
                    background-color: var(--main-color);
                    color: var(--white-color);
                    width: 150px;
                    height: 150px;
                    z-index: 1;
                    border-radius: 10px;
                    font-size: 60px;
                    font-weight: 800;
                    margin-left: 8px;
                    margin-right: 8px;
                    font-weight: 500;
                }
                #timer div span {
                    display: block;
                    margin-top: -6px;
                    font-size: var(--font-size);
                    font-weight: 500;
                }
	
                // Responsive Style
                @media only screen and (max-width: 767px) {
                    #timer {
                        margin-top: 20px;
                        position: relative;
                        bottom: 0;
                    }
                    #timer div {
                        width: 100px;
                        height: 105px;
                        margin-left: 5px;
                        margin-right: 5px;
                        font-size: 20px;
                        margin-top: 10px;
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

export default EventsTime;