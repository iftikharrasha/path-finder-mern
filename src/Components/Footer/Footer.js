import React from 'react';
import logo from '../../img/pfinder.svg';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <>
        <footer className="footer mt-5">
            <Container>
                <Row>
                    <Col>
                        <div className="footer-items">
                            <a href="#home">
                                <img src={logo} className="img-fluid w-25" alt="pathfinder"/>
                            </a>
                            <h6>©2021 Iftikhar Rasha</h6>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
        </>
    );
};

export default Footer;