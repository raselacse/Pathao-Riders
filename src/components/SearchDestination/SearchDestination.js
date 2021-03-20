import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Home from '../Home/Home';
import './SearchDestination.css'

const SearchDestination = () => {
    const { searchId } = useParams();

    const url = fakeData;

    const placeDetails = url.filter(place => place.id == searchId)
    // const {name} = placeDetails[0]; 

    return (
        <div>
            <Home />
            <Container className="search">
                <Row>
                    <Col xl={4} className="form-part h-100">
                        <Form>
                            <Form.Group>
                                <Form.Label>Origin</Form.Label>
                                <Form.Control style={{ backgroundColor: 'rgba(230, 230, 230, 0.616)' }} type="text" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Destination</Form.Label>
                                <Form.Control style={{ backgroundColor: 'rgba(230, 230, 230, 0.616)' }} type="text" />
                            </Form.Group>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>From</Form.Label>
                                        <Form.Control style={{ backgroundColor: 'rgba(230, 230, 230, 0.616)' }} type="date" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>To</Form.Label>
                                        <Form.Control style={{ backgroundColor: 'rgba(230, 230, 230, 0.616)' }} type="date" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Link to="/destination"><button variant="primary" style={{ width: '100%' }} type="submit" className="head-button">Search</button></Link>
                        </Form>
                    </Col>

                    <Col xl={1}></Col>

                    <Col className="place-part">
                        <div className="google-map">
                            <iframe className="w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7496149.953730211!2d85.8462125075647!3d23.452185887261443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1600418722974!5m2!1sen!2sbd"></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SearchDestination;