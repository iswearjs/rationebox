import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaTruck, FaCartPlus, FaBolt } from 'react-icons/fa';
import * as currencyFormatter from "currency-formatter";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
const OtherItems = () => {
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.ProductsReducer);
    console.log(products);
    useEffect(() => {
        dispatch({ type: 'PRODUCT', id })
    }, [id])
    const decQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 980,
                settings: {
                    arrows: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    arrows: true,
                    slidesToShow: 1
                }
            },
        ]
    };

    return (
        <>
         <div className="">
                {/* <h3 className="title-bar">Carousel Slider in React - <a href="/" target="_blank">Clue Mediator</a></h3> */}
                <hr />
                <Slider {...settings}>
                    {products.map((product, id) => {
                        return (
                            <div className="container">
                                <div className="row mb-2">
                                    <div className="col colo">
                                        <div className="card h-100 w-100 border-warning">
                                            <div className="card-header border-warning">
                                                Featured
                                            </div>
                                            <div className="inner-card">
                                                <Link to={`/details/${product.id}`}>
                                                    <img src={`/images/${product.image}`} alt="..." className="img-fluid rounded" />
                                                </Link>
                                                <span class="veg-indian pl-2">
                                                    <img src={`/images/${product.vname}`} alt="..." style={{ 'height': '15px', 'width': '15px', 'float': 'left' }} />
                                                </span>
                                                <div className="d-flex justify-content-start">
                                                    <span style={{ 'font-size': '12px', 'text-transform': 'capitalize' }}>
                                                        {product.product_bname}
                                                    </span>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span style={{ fontSize: '16px', color: '#0a0a0a', textTransform: 'capitalize' }}>
                                                        {product.product_name}
                                                    </span>
                                                    <span className="heart">
                                                        <i className="fa fa-heart"></i>
                                                    </span>
                                                </div>
                                                <div className="">
                                                    <small>
                                                        <span className="mrp ml-2" style={{ 'float': 'left', 'font-size': '16px' }}>
                                                            MRP&nbsp;
                                                            <s style={{ 'font-size': '14px' }}>
                                                                &nbsp;{currencyFormatter.format(product.price, { code: 'INR' })};
                                                            </s>&nbsp;
                                                            <span style={{ 'font-size': '11px', 'color': 'grey' }}>
                                                                ({product.discount}%)
                                                            </span>
                                                            <span style={{ 'font-size': '14px' }}>
                                                                &nbsp;{currencyFormatter.format(product.discountPrice, { code: 'INR' })}
                                                            </span>
                                                        </span><br />
                                                        <span style={{ 'font-size': '16px' }}>
                                                            <FaTruck /> &nbsp;
                                                        </span>
                                                        <span style={{ 'font-size': '12px' }}>
                                                            Standard Delivery: 23 April, 6:00AM - 8:00AM
                                                        </span>
                                                    </small>
                                                </div>
                                                <div className="card-footer d-flex justify-content-between">
                                                    <Link to="/">
                                                        <button
                                                            onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } })}
                                                            className="btn btn-primary">
                                                            Add to cart <FaCartPlus />
                                                        </button>
                                                    </Link>
                                                    <button
                                                        type="button"
                                                        onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } })}
                                                        className="btn btn-primary bg-danger">
                                                        Buy Now <FaBolt style={{ color: 'yellow' }} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>   
        </>
    )
}

export default OtherItems
