import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from '../../../images/edeucation -banner/01.jpg';
const Slider = () => {
    return (
        <div>
            <Carousel showArrows={true}>
                <div>
                    <img src={banner1} className="h-5" alt="" />
                </div>
                <div>
                    <img src="assets/2.jpeg" alt="" />
                </div>
                <div>
                    <img src="assets/3.jpeg" alt="" />
                </div>
                <div>
                    <img src="assets/4.jpeg" alt="" />
                </div>
                <div>
                    <img src="assets/5.jpeg" alt="" />
                </div>
                <div>
                    <img src="assets/6.jpeg" alt="" />
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;