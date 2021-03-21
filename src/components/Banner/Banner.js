import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Home from '../Home/Home';
import Slider from '../Slider/Slider';

const Banner = () => {
    const destinationList = fakeData;
    const [places, setplaces] = useState(destinationList);

    return (
        <div>
            <Home />
            <div className="container">
                <div className="row justify-content-center align-items-center mt-lg-5 mt-md-5">
                    {
                        places.map(place => <Slider key={place.id} place={place}></Slider>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Banner;