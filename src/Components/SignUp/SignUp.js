import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import facebook from '../../img/facebook.svg';
import google from '../../img/google.svg';
import './SignUp.css';

const SignUp = () => {
    const handleGoogleSignIn = () => {

    }

    return (
        <>
            <section className="login">
                <div className="d-flex align-items-center justify-content-center">
                    <div className="login-form bg-tag-1">
                        <div className="text-center">
                        <h2 className="mt-3 text-center reg-28">Create Your 
                            <b className="font-bold"> Account
                            </b>
                        </h2>
                        </div>
                        <form className="form">
                            <div className="inputs my-4">
                                <div className="input-field">
                                    <input className="px-4 py-3 mb-2 text-black border border-transparent rounded lit-14" type="text" name="name" placeholder="Enter Your name" autoComplete="on"/>
                                    <div className="input-icon">
                                        <i className="fa fa-user-plus i-envelope" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="input-field my-3">
                                    <input type="email" className="px-4 py-3 mt-1 mb-2 text-black border border-transparent rounded lit-14" name="email" placeholder="Enter Your email" autoComplete="on"/>
                                    <div className="input-icon">
                                        <i className="fa fa-envelope i-user" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="input-field my-3">
                                    <input type="password" className="px-4 py-3 mt-1 mb-2 text-black border border-transparent rounded lit-14" name="password" placeholder="Enter Password" autoComplete="on"/>
                                    <div className="input-icon">
                                        <i className="fa fa-key i-key" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="input-field my-3">
                                    <input type="password" className="px-4 py-3 mt-1 mb-2 text-black border border-transparent rounded lit-14" name="re-password" placeholder="Confirm Password" autoComplete="on"/>
                                    <div className="input-icon">
                                        <i className="fa fa-key i-key" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <button className="signin-btn">Create an account
                                </button>
                            </div>
                            <div className="mt-4 text-center lit-14">Already have an account?
                                <Link to="/login" className="ml-1 lit-14"><u>Login</u>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>

                <Container className="mt-5">
                    <Row>
                        <Col md={4} className="offset-md-4">
                            <Row>
                                <Col md={12}>
                                    <div className="social-login d-block">
                                        <button onClick={handleGoogleSignIn}>
                                            <img src={google} alt="google"/>
                                            <span className="ml-2">Continue with Google</span> 
                                        </button>
                                    </div>
                                </Col>
                                <Col md={12} className="mt-3">
                                    <div className="social-login">
                                        <button onClick={handleGoogleSignIn}>
                                            <img src={facebook} alt="facebook"/>
                                            <span className="ml-2">Continue with Facebook</span> 
                                        </button>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

            </section>
        </>
    );
};

export default SignUp;