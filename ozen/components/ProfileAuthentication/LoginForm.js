import React from 'react';

const LoginForm = () => {
    return (
        <>
            <div className="login-form">
                <h2>Login</h2>

                <form>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="Username" />
                    </div>

                    <div className="form-group">
                        <label>Email or Phone</label>
                        <input type="text" className="form-control" placeholder="Email or phone" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="text" className="form-control" placeholder="Password" />
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="checkme" />
                                <label className="form-check-label" htmlFor="checkme">Remember me</label>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6 lost-your-password">
                            <a href="#" className="lost-your-password">Forgot your password?</a>
                        </div>
                    </div>

                    <button type="submit" className="default-btn">Login <span></span></button>
                </form>
            </div>

            <style jsx>{`
                .login-form {
                    padding: 35px;
                    border-radius: 5px;
                    background-color: var(--white-color);
                    -webkit-box-shadow: 0 0 1.25rem rgba(108, 118, 134, 0.1);
                            box-shadow: 0 0 1.25rem rgba(108, 118, 134, 0.1);
                    max-width: 650px;
                    margin: auto;
                }
                .login-form h2 {
                    font-size: 30px;
                    margin-bottom: 20px;
                }
                .login-form form .form-group {
                    margin-bottom: 25px;
                }
                .login-form form .form-group label {
                    display: block;
                    margin-bottom: 5px;
                    color: var(--paragraph-color);
                    font-weight: 500;
                    font-size: var(--font-size);
                }
                .login-form form .form-group .form-control {
                    height: 60px;
                    padding: 20px;
                    line-height: initial;
                    color: var(--black-color);
                    background-color: transparent;
                    border: 1px solid #eeeeee;
                    border-radius: 5px;
                    -webkit-box-shadow: unset;
                            box-shadow: unset;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    font-size: 15px;
                    font-weight: 500;
                }
                .login-form form .form-group .form-control:focus {
                    border: 1px solid var(--main-color);
                    background-color: transparent;
                }
                .login-form form .form-group .form-control:focus::-webkit-input-placeholder {
                    color: transparent;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .login-form form .form-group .form-control:focus:-ms-input-placeholder {
                    color: transparent;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .login-form form .form-group .form-control:focus::-ms-input-placeholder {
                    color: transparent;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .login-form form .form-group .form-control:focus::placeholder {
                    color: transparent;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .login-form form .lost-your-password {
                    text-align: right;
                }
                .login-form form .lost-your-password a {
                    display: inline-block;
                    position: relative;
                    font-weight: 500;
                    font-size: 15px;
                    color: var(--paragraph-color);
                }
                .login-form form .lost-your-password a::before {
                    width: 100%;
                    height: 1px;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    content: '';
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    background-color: #eeeeee;
                }
                .login-form form .lost-your-password a::after {
                    width: 0;
                    height: 1px;
                    position: absolute;
                    left: 0;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    bottom: 0;
                    content: '';
                    background-color: var(--main-color);
                }
                .login-form form .lost-your-password a:hover::before {
                    width: 0;
                }
                .login-form form .lost-your-password a:hover::after {
                    width: 100%;
                }
                .login-form form .default-btn {
                    margin-top: 25px;
                    padding: 15px 35px;
                    width: 100%;
                }

                // Responsive Style
                @media only screen and (max-width: 767px) {
                    .login-form {
                        padding: 25px;
                    }
                    .login-form h2 {
                        font-size: 25px;
                        margin-bottom: 20px;
                    }
                    .login-form form .lost-your-password {
                        text-align: left;
                        margin-top: 5px;
                    }
                }

                @media only screen and (min-width: 576px) and (max-width: 767px) {
                    .login-form form .lost-your-password {
                        text-align: right;
                        margin-top: 0;
                    }
                }

                @media only screen and (min-width : 768px) and (max-width : 991px) {
                    .login-form {
                        padding: 25px;
                    }
                    .login-form h2 {
                        font-size: 25px;
                        margin-bottom: 20px;
                    }
                }

                @media only screen and (min-width : 992px) and (max-width : 1199px) {
                    
                }
            `}</style>
        </>
    )
}

export default LoginForm;