import React, { useContext } from 'react';
import logo from '../../img/pfinder.svg';
import { Container, Row, Col } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import firebase from "firebase/app";
import './Header.css';

import {UserContext} from "../../App";

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleSignOut = () => {
        firebase.auth().signOut()
        .then((res) => {
          const signedOutUser = {
            isSignedIn: false,
            name: '',
            email: '',
            photo: '',
            success: false,
            error: ''
          }
          setLoggedInUser(signedOutUser);
        }).catch((error) => {
          // An error happened.
          console.log(error);
        });
      }

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
                                {
                                    loggedInUser.isSignedIn ? <Dropdown>
                                                                <Dropdown.Toggle variant="" id="dropdown-basic" className="d-flex align-items-center">
                                                                    <span class="avatar mr-3">
                                                                        <img alt="avatar" src={loggedInUser.photo}/>
                                                                    </span>
                                                                    <span class="mb-0">{loggedInUser.name}</span>
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu>
                                                                    <Link to="/ride-search" className="dropdown-item lit-14">Find Ride</Link>
                                                                    <Link to="/home" className="dropdown-item lit-14">Settings</Link>
                                                                    <Link to="/" className="dropdown-item lit-14" onClick={handleSignOut}>Sign Out</Link>
                                                                </Dropdown.Menu>
                                                            </Dropdown> : 
                                                            <Link to="/login" className="btn-tag-1 lit-14"><i className="fa fa fa-user"></i><span className="ml-2">Login</span></Link>
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    );
};

export default Header;