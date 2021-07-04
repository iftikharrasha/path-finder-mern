import React from 'react';
import logo from '../../img/pfinder.svg';
import { Container, Row, Col } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <>
            <header className="header">
                <Container className="c_custom py-4">
                    <Row>
                        <Col>
                            <div className="brand">
                                <a href="/">
                                    <img src={logo} alt="pathfinder" className="img-fluid w-50"/>
                                </a>
                            </div>
                            <div className="login-btn float-right">
                                <a href="#" className="btn-tag-1">
                                    <i className="fa fa fa-user"></i>
                                    <span className="ml-2">Login</span>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    );
};

export default Header;