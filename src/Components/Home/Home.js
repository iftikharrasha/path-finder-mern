import React from 'react';
import banner from '../../img/banner.svg';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    return (
        <>
            <section className="hero rounded py-5" id="home">
                <Container className="c_custom">
                    <div className="hero-bg bg-tag-1">
                        <Row>
                            <Col md={12} className="d-flex justify-content-between aligh-items-center">

                                <Row>
                                    <Col lg={6}>
                                        <div className="hero-left p-sm-5">
                                            <h1 className="reg-48">Find your 
                                            <strong className="font-bold"> Best Route.
                                            </strong>
                                            </h1>
                                            <p className="pt-3 c-tag-1 lit-14">Pathfinder aims to deliver a smooth and pleasant ride searching experience and ease route finding process for both riders and passangers.
                                            </p>
                                            <p className="py-3 c-tag-1 lit-14">Experience the smooth and hassle free regular life.
                                            </p>
                                            <div className="login-btn pt-3">
                                                <a href="#getride" className="btn-tag-1 medi-14">
                                                    <i className="fa fa fa-search"></i>
                                                    <span className="ml-2">Find a ride</span>
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} className="mt-sm-0 mt-5 d-flex justify-content-center align-items-center">
                                        <div className="hero-right">
                                            <img src={banner} alt="Banner" className="img-fluid w-100"/>
                                        </div> 
                                    </Col>
                                </Row>
                            </Col>
                    </Row>
                    </div>
                </Container>
            </section>

        </>
    );
};

export default Home;