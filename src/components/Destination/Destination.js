import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LoggedInHeader from '../LoggedInHeader/LoggedInHeader';
import './Destination.css'


const Destination = () => {
    return (
        <div>
            <LoggedInHeader />
            <Container style={{ marginTop: '50px' }}>
                <Row>
                    <Col xl={2}>

                    </Col>

                    <Col xl={10}>
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