import React, { useContext } from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import LoggedInHeader from '../LoggedInHeader/LoggedInHeader';
import './Destination.css'
import logo from '../../images/pathao.png';
import fakeData from '../../fakeData';
import peopleIcon from '../../images/peopleicon.png'


const Destination = () => {
    const user = useContext(UserContext)
    const { displayName } = user[0];

    const url = fakeData;
    console.log(url[0].name)

    return (
        <div>
            {/* <LoggedInHeader/> */}
            <Container>
                <Row>
                    <Col>
                        <Navbar expand="lg">
                            <Link className="login-head-logo" to="/home"> <img src={logo} alt="" /> </Link>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ml-auto">
                                    <Link className="login-head-menu" to="/home">Home</Link>
                                    <Link className="login-head-menu" to="/destination">Destination</Link>
                                    <Link className="login-head-menu" to="/blog">Blog</Link>
                                    <Link className="login-head-menu" to="/contact">Contact</Link>
                                    <button className="login-head-button" type="submit">{displayName}</button>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
            <Container style={{ marginTop: '50px' }}>
                <Row>
                    <Col xl={3}>
                        <div className="destination-content">
                            <div className="destination">
                                <h4>Mirpur</h4>
                                <h4>Dhanmondi</h4>
                            </div>
                            <div className="rideInfo">
                                <img src={url[0].image} alt="" className="car" />
                                <h6>Car</h6>
                                <img src={peopleIcon} alt="" className="peopleIcon" />
                                <h6>4</h6>
                                <h6>$67</h6>
                            </div>
                            <div className="rideInfo">
                                <img src={url[1].image} alt="" className="car" />
                                <h6>Car</h6>
                                <img src={peopleIcon} alt="" className="peopleIcon" />
                                <h6>4</h6>
                                <h6>$67</h6>
                            </div>
                            <div className="rideInfo">
                                <img src={url[2].image} alt="" className="car" />
                                <h6>Car</h6>
                                <img src={peopleIcon} alt="" className="peopleIcon" />
                                <h6>4</h6>
                                <h6>$67</h6>
                            </div>
                            <div className="rideInfo">
                                <img src={url[3].image} alt="" className="car" />
                                <h6>Car</h6>
                                <img src={peopleIcon} alt="" className="peopleIcon" />
                                <h6>4</h6>
                                <h6>$67</h6>
                            </div>
                        </div>

                    </Col>

                    <Col xl={9}>
                        <div className="google-map">
                            <iframe className="w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7496149.953730211!2d85.8462125075647!3d23.452185887261443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1600418722974!5m2!1sen!2sbd"></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Destination;