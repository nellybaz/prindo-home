import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const PaymentForm = () => {
  const initialState = {
    email: "",
    password: "",
    passwordConfirm: "",
  };

  const [state, setState] = useState(initialState);

  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { query } = useRouter();

  const handleChange = (event, key) => {
    if (key === "email") {
      setState({ ...state, email: event.target.value });
    } else if (key === "password") {
      setState({ ...state, password: event.target.value });
    } else {
      setState({ ...state, passwordConfirm: event.target.value });
    }
  };

  const getPaymentLink = async () => {
    try {
      const planPrice = {
        1: 200,
        2: 500,
        3: 1,
      };
      const storeId = "3Tn3gwxn6BqvG3bPd4bB62ucGCyhsDWyG9BJdTNwvhpW";
      const URL = `https://app.prindopay.com/api/v1/stores/${storeId}/invoices`;

      const index = parseInt(query.planIndex);
      const amount = planPrice[index].toString();

      const payload = {
        amount,
        currency: "USD",
        metadata: {
          orderId: state.email,
        },
        checkout: {
          speedPolicy: "HighSpeed",
          paymentMethods: ["BTC"],
          expirationMinutes: 15,
          monitoringMinutes: 90,
          paymentTolerance: 0,
          redirectURL: "https://app.prindopay.com/login?ReturnUrl=%2F",
          redirectAutomatically: true,
          defaultLanguage: "en",
        },
      };

      const authEmail = process.env.EMAIL;
      const authPassword = process.env.PASSWORD;

      const token = btoa(`${authEmail}:${authPassword}`);

      const options = {
        headers: {
          Authorization: `Basic ${token}`,
        },
      };

      const response = await axios.post(URL, payload, options);
      return response.data["checkoutLink"];
    } catch (error) {
      throw new Error("error getting payment link");
    }
  };

  const createPrindoUser = async () => {
    const URL = `https://app.prindopay.com/api/v1/users`;
    const payload = {
      email: state.email,
      password: state.password,
      isAdministrator: false,
    };

    const authEmail = process.env.EMAIL;
    const authPassword = process.env.PASSWORD;

    const token = btoa(`${authEmail}:${authPassword}`);

    const options = {
      headers: {
        Authorization: `Basic ${token}`,
      },
    };
    try {
      await axios.post(URL, payload, options);
      return true;
    } catch (error) {
      console.log(error);
      throw new Error("error creating user");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (state.password !== state.passwordConfirm) {
      setMessage("Passwords do not match");
      return;
    }
    setMessage("");
    setIsLoading(true);
    try {
      const userIsCreated = await createPrindoUser();
      if (userIsCreated) {
        const link = await getPaymentLink();
        window.location.href = link;
      }
    } catch (error) {
      setMessage(error.message);
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="contact-area ptb-100">
        <div className="container">
          <div className="contact-form">
            <h3>Create your Account</h3>

            <small style={{ color: "red" }}>{message}</small>
            <br />
            <br />
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
                    onChange={(e) => {
                      handleChange(e, "email");
                    }}
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
                    onChange={(e) => {
                      handleChange(e, "password");
                    }}
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
                    onChange={(e) => {
                      handleChange(e, "passwordConfirm");
                    }}
                  />
                </div>

                <div className="col-lg-12 col-md-12">
                  <button
                    disabled={isLoading}
                    type="submit"
                    className="default-btn"
                    onClick={handleSubmit}
                  >
                    {isLoading ? "Loading.." : "Continue"}
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
