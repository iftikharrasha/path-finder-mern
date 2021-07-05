import React from 'react';
import logo from '../../img/pfinder.svg';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <>
            <header className="header">
                <Container className="c_custom py-4">
                    <Row>
                        <Col>
                            <div className="brand">
                                <Link to="/home">
                                    <img src={logo} alt="pathfinder" className="img-fluid w-50"/>
                                </Link>
                            </div>
                            <div className="login-btn float-right">
                                {/* <Link to="/login" className="medi-14">
                                    <i className="fa fa fa-user"></i>
                                    <span className="ml-2">Iftikhar Rasha</span>
                                </Link> */}
                                <Link to="/login" className="btn-tag-1 medi-14">
                                    <i className="fa fa fa-user"></i>
                                    <span className="ml-2">Login</span>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    );
};

export default Header;