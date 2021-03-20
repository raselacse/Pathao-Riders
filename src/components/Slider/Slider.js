import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './Slider.css'

const Slider = (props) => {
    const { name, image, id } = props.place;

    const history = useHistory();

    const handleBooking = () => {
        history.push(`/search/${id}`)
    }


    return (
        <CardDeck className="text-center col-md-6 col-lg-3">
            <Card onClick={handleBooking} as={Link}>
                <Card.Img variant="top w-75 m-auto" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>
        </CardDeck>

    );
};

export default Slider;