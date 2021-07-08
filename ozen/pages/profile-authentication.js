import React from 'react';
import NavbarFour from '../components/_App/NavbarFour';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import LoginForm from '../components/ProfileAuthentication/LoginForm';
import RegisterForm from '../components/ProfileAuthentication/RegisterForm';

const ProfileAuthentication = () => {
    return (
        <>
			<NavbarFour />
			
			<PageBanner 
                pageTitle="Welcome to Ozen" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Welcome to Ozen"
            /> 
			 
            <div className="profile-authentication-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <LoginForm />
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <RegisterForm />
                        </div>
                    </div>
                </div>
            </div>

			<Footer />
		</>
    )
}

export default ProfileAuthentication;