import React from "react";
import axios from "axios";

const PaymentForm = () => {
  const state = {
    name: "",
  };

  const handleChange = (event) => {
    setState({ name: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      name: state.name,
    };
    axios
      .post("https://us-central1-prindo-36fd5.cloudfunctions.net/addUser", {
        user,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        window.location = "";
      });
  };
  return (
    <>
      <div className="contact-area ptb-100">
        <div className="container">
          <div className="contact-form">
            <h3>Create your Account</h3>

            <form id="contactForm">
              <div className="row">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    required
                    placeholder="Email*"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    className="form-control"
                    placeholder="Password*"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    required
                    className="form-control"
                    placeholder="Confirm Password*"
                    onChange={handleChange}
                  />
                </div>

                <div className="col-lg-12 col-md-12">
                  <button
                    type="submit"
                    className="default-btn"
                    onClick={handleSubmit}
                  >
                    Continue
                    <i className="ri-arrow-right-line"></i>
                    <span></span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-form {
          text-align: center;
          max-width: 1050px;
          margin: auto;
        }

        .contact-form h3 {
          font-size: 28px;
          margin-bottom: 45px;
        }

        .contact-form .form-group {
          margin-bottom: 20px;
        }

        .contact-form .form-group .form-control {
          display: block;
          width: 100%;
          height: 60px;
          outline: 0;
          background-color: #f4f8fc;
          border: 1px solid #e6edf6;
          border-radius: 5px;
          -webkit-box-shadow: none;
          box-shadow: none;
          padding: 15px;
          -webkit-transition: var(--transition);
          transition: var(--transition);
          font-size: 15px;
        }

        .contact-form .form-group .form-control::-webkit-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }

        .contact-form .form-group .form-control:-ms-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }

        .contact-form .form-group .form-control::-ms-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }

        .contact-form .form-group .form-control::placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }

        .contact-form .form-group .form-control:focus {
          outline: 0;
          background-color: var(--white-color);
          border-color: var(--optional-color);
          -webkit-box-shadow: none;
          box-shadow: none;
        }

        .contact-form
          .form-group
          .form-control:focus::-webkit-input-placeholder {
          color: transparent;
        }

        .contact-form .form-group .form-control:focus:-ms-input-placeholder {
          color: transparent;
        }

        .contact-form .form-group .form-control:focus::-ms-input-placeholder {
          color: transparent;
        }

        .contact-form .form-group .form-control:focus::placeholder {
          color: transparent;
        }

        .contact-form .form-group textarea.form-control {
          height: auto;
          padding: 15px;
          line-height: 1.5rem;
        }

        .contact-form .form-group .help-block.with-errors ul {
          color: red;
          margin-bottom: 0;
          margin-top: 10px;
          text-align: left;
        }

        .contact-form .form-group .help-block.with-errors ul li {
          font-size: 14px;
        }

        .contact-form #msgSubmit {
          margin: 0;
          font-size: 1.3rem;
        }

        .contact-form #msgSubmit.text-danger,
        .contact-form #msgSubmit.text-success {
          margin-top: 25px;
          font-size: 18px;
          font-weight: 500;
        }

        .contact-form .default-btn {
          margin-top: 10px;
        }

        // Responsive Style
        @media only screen and (max-width: 767px) {
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
        }

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
        }
      `}</style>
    </>
  );
};

export default PaymentForm;
