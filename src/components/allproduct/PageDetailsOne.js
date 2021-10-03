import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { FaTruck, FaCartPlus, FaBolt } from 'react-icons/fa';
import * as currencyFormatter from "currency-formatter";
import { useDispatch, useSelector } from 'react-redux';
import SideMenuBar from '../menubar/SideMenuBar';

const PageDetailsOne = () => {
    const { products } = useSelector(state => state.ProductsReducer);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
       
    return (
        <>
            <div>
                <Navbar /><br /><br /><br /><br /><br /><br /><br />
                <div className="container">
                    <div className="titelbar">
                        <section>
                            <div className="row" style={{border: '1px solid green'}}>
                                <div className="col-sm-12 col-md-4 col-lg-12">
                                    <div aria-label="breadcrumb">
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item"><a href="/">Home</a></li>
                                            <li class="breadcrumb-item"><a href="/">Library</a></li>
                                            <li class="breadcrumb-item active" aria-current="page"><a href="/">Data</a></li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3 col-md-3" style={{ height: '900px' }}>
                                    <SideMenuBar />
                                </div>
                                <div className="col-sm-3 col-md-9" >
                                    <Link to="/">
                                        <img src="images/atta-flours-sooji-.jpg" alt="invalid" style={{ width: '100%', height: '220px', marginTop: '10px' }} fluid />
                                    </Link>
                                    <div className="row">
                                        <div className="col d-flex justify-content-lg-between p-2 border border-dark" style={{}}>
                                            <span style={{ border: '1px solid #AEAEAE', background: '#fff' }}>Product Name</span>
                                            <span className="d-flex justify-content-end form-floating bd-highlight">
                                                <select class="form-select form-select-sm" id="floatingSelectGrid" aria-label=".form-select-sm example">
                                                    <option selected>Popularity</option>
                                                    <option value="2">Price - Low to High</option>
                                                    <option value="3">Price - Low to High</option>
                                                    <option value="4">Alphabetical</option>
                                                    <option value="5">Rupee Saving - High to Low</option>
                                                    <option value="6">Rupee Saving - Low to High</option>
                                                    <option value="7">% Off - Hign to Low</option>
                                                </select>
                                            </span>
                                        </div>
                                        <div className="">
                                            <div className="row" style={{ border: '1px solid blue' }}>
                                                <div className="container">
                                                    <div className="row row-cols-1 row-cols-md-3 g-4 mb-2" style={{ border: '1px solid yellow', marginTop: 'auto' }}>
                                                        {
                                                            products.map(product => (
                                                                <div className="container d-flex justify-content-center align-items-center">
                                                                    <div className="row mb-2">
                                                                        <div className="col colo" key={product.id}>
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
                                                                                        <>
                                                                                            <button
                                                                                                onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } })}
                                                                                                className="btn btn-primary">
                                                                                                Add to cart <FaCartPlus />
                                                                                            </button>
                                                                                        </>
                                                                                        <Link>
                                                                                        <button
                                                                                            type="button"
                                                                                            onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } })}
                                                                                            className="btn btn-primary bg-danger">
                                                                                            Buy Now <FaBolt style={{ color: 'yellow' }} />
                                                                                        </button>
                                                                                        </Link>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default PageDetailsOne;

{/*
<div className="container">
                    <div className="titelbar">
                        <section>
                            <div className="row" style={{border: '1px solid green'}}>
                                <div className="col-sm-12 col-md-4 col-lg-12">
                                    <div aria-label="breadcrumb">
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                                            <li class="breadcrumb-item"><a href="#">Library</a></li>
                                            <li class="breadcrumb-item active" aria-current="page"><a href="#">Data</a></li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3 col-md-3" style={{ height: '900px' }}>
                                    <SideMenuBar />
                                </div>
                                <div className="col-sm-3 col-md-9" >
                                    <Link to="/">
                                        <img src="images/atta-flours-sooji-.jpg" alt="invalid" style={{ width: '100%', height: '220px', marginTop: '10px' }} fluid />
                                    </Link>
                                    <div className="row">
                                        <div className="col d-flex justify-content-lg-between p-2 border border-dark" style={{}}>
                                            <span style={{ border: '1px solid #AEAEAE', background: '#fff' }}>Product Name</span>
                                            <span className="d-flex justify-content-end form-floating bd-highlight">
                                                <select class="form-select form-select-sm" id="floatingSelectGrid" aria-label=".form-select-sm example">
                                                    <option selected>Popularity</option>
                                                    <option value="2">Price - Low to High</option>
                                                    <option value="3">Price - Low to High</option>
                                                    <option value="4">Alphabetical</option>
                                                    <option value="5">Rupee Saving - High to Low</option>
                                                    <option value="6">Rupee Saving - Low to High</option>
                                                    <option value="7">% Off - Hign to Low</option>
                                                </select>
                                            </span>
                                        </div>
                                        <div className="">
                                            <div className="row" style={{ border: '1px solid blue' }}>
                                                <div className="container">
                                                    <div className="row row-cols-1 row-cols-md-3 g-4 mb-2" style={{ border: '1px solid yellow', marginTop: 'auto' }}>
                                                        {
                                                            products.map(product => (
                                                                <div className="container d-flex justify-content-center align-items-center">
                                                                    <div className="row mb-2">
                                                                        <div className="col colo">
                                                                            <div className="card h-100 w-100 border-warning">
                                                                                <div className="card-header border-warning">
                                                                                    Featured
                                                                                </div>
                                                                                <div className="inner-card">
                                                                                    <Link to={`/details/${product.id}`} target="_blank">
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
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
*/}