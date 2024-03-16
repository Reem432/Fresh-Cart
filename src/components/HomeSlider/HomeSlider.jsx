import React from "react";
import Slider from "react-slick";
import im1 from './../../assets/im1.jpg'
import im2 from './../../assets/im2.jpg'
import im3 from './../../assets/im3.jpg'


export default function HomeSlider() {
    var settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 3
    };
    return (
       <div className="my-5">
         <Slider {...settings}>
            <div>
                <img style={{height: "300px"}} src={im1} alt="foodImage" className="w-100"/>
            </div>
            <div>
                <img style={{height: "300px"}} src={im2} alt="foodImage" className="w-100"/>
            </div>
            <div>
                <img style={{height: "300px"}} src={im3} alt="foodImage" className="w-100"/>
            </div>
        </Slider>
       </div>
    );
}