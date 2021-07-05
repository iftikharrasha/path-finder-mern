import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    return (
        <>
            <section className="login">
            <div className="d-flex align-items-center justify-content-center">
                <div className="login-form">
                    <div className="text-center">
                    <h2 className="mt-3 text-center">Create Your 
                        <b className="font-bold"> Account
                        </b>
                    </h2>
                    </div>
                    <form className="form">
                        <div className="inputs my-4">
                            <div className="input-field">
                                <input className="px-4 py-3 mb-2 text-black border border-transparent rounded" type="text" maxlength="11" placeholder="Enter Your name"/>
                                <div className="input-icon">
                                    <i class="fa fa-user-plus i-envelope" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className="input-field my-3">
                                <input type="email" className="px-4 py-3 mt-1 mb-2 text-black border border-transparent rounded" placeholder="Enter Your email"/>
                                <div className="input-icon">
                                    <i className="fa fa-envelope i-user" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className="input-field my-3">
                                <input type="password" className="px-4 py-3 mt-1 mb-2 text-black border border-transparent rounded" placeholder="Enter Password"/>
                                <div className="input-icon">
                                    <i className="fa fa-key i-key" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className="input-field my-3">
                                <input type="password" className="px-4 py-3 mt-1 mb-2 text-black border border-transparent rounded" placeholder="Confirm Password"/>
                                <div className="input-icon">
                                    <i className="fa fa-key i-key" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <button className="signin-btn">Create an account
                            </button>
                        </div>
                        <div className="mt-4 text-center ">Already have an account?
                            <Link to="/login" className="ml-1 underline cursor-pointer font-medium">Login
                            </Link>
                        </div>
                    </form>
                </div>
                </div>

            </section>
        </>
    );
};

export default SignUp;