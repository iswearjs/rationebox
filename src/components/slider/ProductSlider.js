import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductSlider = () => {
    var settings = {
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <div className="SliderImg">
                <Slider {...settings}>
                    <div className="owl-item">
                        <img src="images/banners/offer-1.jpg" alt="supermarket" />
                    </div>
                    <div className="owl-item">
                        <img src="images/banners/offer-2.jpg" alt="supermarket" />
                    </div>
                    <div className="owl-item">
                        <img src="images/banners/offer-3.jpg" alt="supermarket" />
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default ProductSlider;
