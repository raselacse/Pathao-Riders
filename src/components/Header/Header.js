import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import background from '../../images/Bg.png';
import logo from '../../images/pathao.png';
import './Header.css'


const Header = () => {
    return (
        <div>
            <Container>
            <Row>
                <Col>
                    <Navbar expand="lg">
                    <Link className="head-logo" to="/home"> <img src={logo} alt=""/> </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <Link className="head-menu" to="/home">Home</Link>
                        <Link className="head-menu" to="/destination">Destination</Link>
                        <Link className="head-menu" to="/blog">Blog</Link>
                        <Link className="head-menu" to="/contact">Contact</Link>
                        <Link to="/login"><button className="head-button" type="submit">Login</button></Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
            </Container>
            <img className="main-banner" src={background} alt=""/>
        </div>
    );
};

export default Header;