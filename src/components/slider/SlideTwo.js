import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideTwo = () => {
    var settings = {
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrow: true,
                }
            },
            {
                breakpoint: 980,
                settings: {
                    arrow: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrow: true,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    arrow: true,
                }
            },
        ]
    };
    return (
        <>
            <div className="boxslide">
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
            </div>
        </>
    )
}

export default SlideTwo;
