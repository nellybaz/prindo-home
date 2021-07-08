
import React from 'react';

const RegisterForm = () => {
    return (
        <>
            <div className="register-form">
                <h2>Register</h2>

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

                    <p className="description">The password should be at least eight characters long. To make it stronger, use upper and lower case letters, numbers, and symbols like ! " ? $ % ^ & )</p>

                    <button type="submit" className="default-btn">Register Now <span></span></button>
                </form>
            </div>

            <style jsx>{`
                .register-form {
                    padding: 35px;
                    border-radius: 5px;
                    background-color: var(--white-color);
                    -webkit-box-shadow: 0 0 1.25rem rgba(108, 118, 134, 0.1);
                            box-shadow: 0 0 1.25rem rgba(108, 118, 134, 0.1);
                    max-width: 650px;
                    margin: auto;
                }
                .register-form h2 {
                    font-size: 30px;
                    margin-bottom: 20px;
                }
                .register-form form .form-group {
                    margin-bottom: 25px;
                }
                .register-form form .form-group label {
                    display: block;
                    margin-bottom: 5px;
                    color: var(--paragraph-color);
                    font-weight: 500;
                    font-size: var(--font-size);
                }
                .register-form form .form-group .form-control {
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
                .register-form form .form-group .form-control:focus {
                    border: 1px solid var(--main-color);
                    background-color: transparent;
                }
                .register-form form .form-group .form-control:focus::-webkit-input-placeholder {
                    color: transparent;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .register-form form .form-group .form-control:focus:-ms-input-placeholder {
                    color: transparent;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .register-form form .form-group .form-control:focus::-ms-input-placeholder {
                    color: transparent;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .register-form form .form-group .form-control:focus::placeholder {
                    color: transparent;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .register-form form .description {
                    font-style: italic;
                    font-size: 14px;
                    margin-top: -5px;
                    margin-bottom: 15px;
                }
                .register-form form .default-btn {
                    margin-top: 10px;
                    padding: 15px 35px;
                    width: 100%;
                }
                
                // Responsive Style
                @media only screen and (max-width: 767px) {
                    .register-form {
                        padding: 25px;
                        margin-top: 35px;
                    }
                    .register-form h2 {
                        font-size: 25px;
                        margin-bottom: 20px;
                    }
                }

                @media only screen and (min-width : 768px) and (max-width : 991px) {
                    .register-form {
                        padding: 25px;
                        margin-top: 35px;
                    }
                    .register-form h2 {
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

export default RegisterForm;