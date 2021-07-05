import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <>
            <section className="login">
            <div className="d-flex align-items-center justify-content-center">
                <div className="login-form">
                    <div className="text-center">
                    <h2 className="mt-3 text-center">Login to 
                        <b className="font-bold"> Find Route
                        </b>
                    </h2>
                    </div>
                    <form className="form">
                        <div className="inputs my-4">
                            <div className="input-field">
                                <input className="px-4 py-3 mb-2 text-black border border-transparent rounded" type="text" maxlength="11" placeholder="Enter Email"/>
                                <div className="input-icon">
                                    <i className="fa fa-envelope i-envelope" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className="input-field my-3">
                                <input type="password" className="px-4 py-3 mt-1 mb-2 text-black border border-transparent rounded" placeholder="Enter Password"/>
                                <div className="input-icon">
                                    <i className="fa fa-key i-key" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <input type="checkbox" className="w-4 h-4 form-checkbox" value="allUsers"/>
                                    <span className="ml-2">Remember Password
                                    </span>
                                </div>
                                <a href="/" className="ml-5 underline">Forgot Password?
                                </a>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <button className="signin-btn">Sign In
                            </button>
                        </div>
                        <div className="mt-4 text-center ">Don't have any account?
                            <Link to="/signup" className="ml-1 underline cursor-pointer font-medium">Sign Up
                            </Link>
                        </div>
                    </form>
                </div>
                </div>

            </section>
        </>
    );
};

export default Login;