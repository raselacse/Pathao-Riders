import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

import './Slider.css'

const Slider = (props) => {
    const {name, image, id} = props.place;

    const history = useHistory();

    const handleBooking = () =>{
        history.push(`/booking/${id}`)
    }
 

    return (
        
        // <div className="main-slider">
            
        //     <div className="card">
        //       <Card.Img variant="top" src={image} />
        //       <h3 className="text-white">{name}</h3>
        //         <button onClick={handleBooking} className="head-button">Booking</button>
               
        //       </div>               
        
        // </div>
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
/*
   var settings = {
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
      };
      <Slidering {...settings}>
            </Slidering>
            import Slidering from "react-slick";
            */