import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './RideSearch.css';

const RideSearch = () => {
    return (
        <>
           <section className="ride-search py-5">
               <Container className="c_custom">
                        <Row>
                            <Col md={4}>
                                <form className="ride-bg form bg-tag-1">
                                    <Row>
                                        <Col md={12}>
                                            <p className="ride-title mb-3">Ready to roll?<br/>Get your estimation.</p>
                                        </Col>
                                        <Col md={12}>
                                            <div className="input-field">
                                                <input className="px-4 py-3 mb-2 text-black border border-transparent rounded" type="text" name="pickup" placeholder="Enter pick-up location" autoComplete="on"/>
                                                <div className="input-icon">
                                                    <i className="fa fa-map-marker i-envelope" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={12}>
                                            <div className="input-field">
                                                <input type="password" className="px-4 py-3 mb-2 text-black border border-transparent rounded" name="dropoff" placeholder="Enter drop-off location" autoComplete="on"/>
                                                <div className="input-icon">
                                                    <i className="fa fa-map-marker i-envelope" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={12}>
                                            <div className="d-flex align-items-center justify-content-center">
                                                <button className="signin-btn">FIND
                                                </button>
                                            </div>
                                        </Col>
                                    </Row>
                                </form>
                            </Col>
                            <Col md={8}>
                                <div className="map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7299.962968070579!2d90.43430012656535!3d23.8192574532369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3755c62fce7d991f%3A0xacfaf1ac8e944c05!2sBashundhara%20R%5CA%2C%20Dacca!3m2!1d23.8191441!2d90.45259539999999!4m5!1s0x3755c64c103a8093%3A0xd660a4f50365294a!2sNorth%20South%20University%2C%20Dhaka%201229!3m2!1d23.81511!2d90.42555829999999!5e0!3m2!1sen!2sbd!4v1625447193312!5m2!1sen!2sbd" width="100%" height="600" title="map"></iframe>
                                </div>
                            </Col>
                        </Row>
               </Container>
           </section>
        </>
    );
};

export default RideSearch;