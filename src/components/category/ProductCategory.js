import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import './pcategory.css';

const ProductCategory = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                    // infinite: true,
                    arrows: true,
                }
            },
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 4,
                    // infinite: true,
                    arrows: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                    // infinite: true,
                    arrows: true,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    // infinite: true,
                    arrows: true,
                }
            }
        ]
    }
    return (
        <>
            <div className="ProductCate" style={{ backdropFilter: '#fff' }}>
                <div className="container" id="header-category-bk">
                    <Slider {...settings}>
                    <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/grocery-staples`,
                                }}>
                                    <img className="img-fluid" src="images/category/grocerystample.jpg" alt="grocery-stamples" />
                                    <h6 style={{textAlign:'left'}}>Grocery &amp; Staples</h6>
                                </Link>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/personal-care`,
                                }}>
                                    <img className="img-fluid" src="images/category/personalcare.png" alt="personalcare" />
                                    <h6>Personal Care</h6>
                                </Link>
                            </div>
                        </div>
                        {/* 3 */}
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/household-items`,
                                }}>
                                    <img className="img-fluid" src="images/category/household.png" alt="household-imtes" />
                                    <h6>Household Needs</h6>
                                </Link>
                            </div>
                        </div>
                        {/* 4 */}
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/home-kitchen`,
                                }}>
                                    <img className="img-fluid" src="images/category/kitchen.png" alt="kitchen" />
                                    <h6>Home &amp; Kitchen</h6>
                                </Link>
                            </div>
                        </div>
                        {/* 5 */}
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/beverages`,
                                }}>
                                    <img className="img-fluid" src="images/category/beverage.png" alt="beverages" />
                                    <h6>Beverages</h6>
                                </Link>
                            </div>
                        </div>
                        {/* 6 */}
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/breakfast-dairy`,
                                }}>
                                    <img className="img-fluid" src="images/category/breakfastdairy.png" alt="breakfastdairy" />
                                    <h6>Breakfast &amp; Dairy</h6>
                                </Link>
                            </div>
                        </div>
                        {/* 7 */}
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/biscuits-snacks-chocolates`,
                                }}>
                                    <img className="img-fluid" src="images/category/Biscuits.png" alt="biscuits-snacks-chocklates" />
                                    <h6>Biscuits, Snacks &amp; Chocolates</h6>
                                </Link>
                            </div>
                        </div>
                        {/* 8 */}
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/noodles-sauces-instant-food`,
                                }}>
                                    <img className="img-fluid" src="images/category/noodles.png" alt="noodles" />
                                    <h6>Noodles, Sauces &amp; Instant Food</h6>
                                </Link>
                            </div>
                        </div>
                        {/* 9 */}
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/pet-care`,
                                }}>
                                    <img className="img-fluid" src="images/category/petcare.png" alt="pet-care" />
                                    <h6>Pet Care</h6>
                                </Link>
                            </div>
                        </div>
                        {/* 10 */}
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/baby-care`,
                                }}>
                                    <img className="img-fluid" src="images/category/babycare.png" alt="baby-care" />
                                    <h6>Baby Care</h6>
                                </Link>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>

        </>
    )
}

export default ProductCategory;
