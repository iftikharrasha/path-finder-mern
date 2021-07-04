import React from 'react';
import banner from '../../img/banner.svg';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    return (
        <>
            <section className="hero rounded py-5">
                <Container className="c_custom">
                    <div className="hero-bg">
                        <Row>
                            <Col md={12} className="d-flex justify-content-between aligh-items-center">
                                <div className="hero-left p-5">
                                    <h1>Find your 
                                    <strong className="font-bold"> Best Route.
                                    </strong>
                                    </h1>
                                    <p className="pt-3">Pathfinder aims to deliver a smooth and pleasant ride searching experience and ease route finding process for both riders and passangers.
                                    </p>
                                    <p className="py-3">Experience the smooth and hassle free regular life.
                                    </p>
                                    <div className="login-btn">
                                        <a href="#" className="btn-tag-1">
                                            <i className="fa fa fa-search"></i>
                                            <span className="ml-2">Find a ride</span>
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="hero-right">
                                    <img src={banner} alt="Banner" className="img-fluid w-100"/>
                                </div> 
                            </Col>
                    </Row>
                    </div>
                </Container>
            </section>

        </>
    );
};

export default Home;