import React from 'react';
import rentals from '../../img/rentals.webp';
import scooter from '../../img/scooter.webp';
import wnsave from '../../img/wnsave.webp';
import transit from '../../img/transit.webp';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './GetRide.css';

const GetRide = () => {
    return (
        <>
            <section className="get-ride py-5" id="getride">
                <Container className="c_custom">
                        <Row>
                            <Col md={12}>
                                <h2>Ride. Bike. Scoot. Taxi. Train.</h2>
                                <p className="py-3">Choose a ride that suits your mood and budget. We got your back!</p>
                            </Col>
                            <Col md={12} className="mt-5">

                                <Row className="d-flex align-items-center justify-content-center">
                                    <Col xl={3} lg={4} sm={6} className="d-flex align-items-center justify-content-center">
                                        <Link to="/ride-search">
                                            <div className="rides">
                                                <div className="ride-item">
                                                    <h3 className="text-center">Rentals
                                                    </h3>
                                                    <img src={rentals} className="my-2" alt="rentals"/>
                                                    <div className="ride-extra">
                                                        <p>
                                                            <i className="fa fa-hand-o-right" aria-hidden="true"></i>
                                                            <span className="ml-2">Independent</span> 
                                                        </p>
                                                        <p>
                                                            <i className="fa fa-hand-o-right" aria-hidden="true"></i>
                                                            <span className="ml-2">Seamless</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6} className="d-flex align-items-center justify-content-center mt-sm-0 mt-5">
                                        <Link to="/ride-search">
                                            <div className="rides">
                                                <div className="ride-item">
                                                    <h3 className="text-center">Bike & Scoots
                                                    </h3>
                                                    <img src={scooter} className="my-2" alt="scooter"/>
                                                    <div className="ride-extra">
                                                        <p>
                                                            <i className="fa fa-hand-o-right" aria-hidden="true"></i>
                                                            <span className="ml-2">Eco-friendly</span>
                                                        </p>
                                                        <p>
                                                            <i className="fa fa-hand-o-right" aria-hidden="true"></i>
                                                            <span className="ml-2">Efficient</span> 
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6} className="d-flex align-items-center justify-content-center mt-lg-0 mt-5">
                                        <Link to="/ride-search">
                                            <div className="rides">
                                                <div className="ride-item">
                                                    <h3 className="text-center">Wait & Save
                                                    </h3>
                                                    <img src={wnsave} className="my-2" alt="wnsave"/>
                                                    <div className="ride-extra">
                                                        <p>
                                                            <i className="fa fa-hand-o-right" aria-hidden="true"></i>
                                                            <span className="ml-2">Roomier cars</span> 
                                                        </p>
                                                        <p>
                                                            <i className="fa fa-hand-o-right" aria-hidden="true"></i>
                                                            <span className="ml-2">Top drivers</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </Col>
                                    <Col xl={3} lg={4} sm={6} className="d-flex align-items-center justify-content-center mt-xl-0 mt-5">
                                        <Link to="/ride-search">
                                            <div className="rides">
                                                <div className="ride-item">
                                                    <h3 className="text-center">Transit
                                                    </h3>
                                                    <img src={transit} className="my-2" alt="transit"/>
                                                    <div className="ride-extra">
                                                        <p>
                                                            <i className="fa fa-hand-o-right" aria-hidden="true"></i>
                                                            <span className="ml-2">Budget-friendly</span> 
                                                        </p>
                                                        <p>
                                                            <i className="fa fa-hand-o-right" aria-hidden="true"></i>
                                                            <span className="ml-2">Eco-friendly</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                </Container>
            </section>
        </>
    );
};

export default GetRide;