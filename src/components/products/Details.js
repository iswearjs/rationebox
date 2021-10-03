import React, { useState, useEffect } from 'react';
// import './details.css';
// import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaTruck } from 'react-icons/fa';
import currencyFormatter from "currency-formatter";
import Navbar from '../navbar/Navbar';
import { FaCartPlus, FaBolt } from 'react-icons/fa';
import OtherItems from '../others/OtherItems';

const Details = () => {

  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector(state => state.ProductsReducer);
  useEffect(() => {
    dispatch({ type: 'PRODUCT', id })
  }, [id])
  const decQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  return (
    <>
      <div>
        <Navbar /><br /><br /><br /><br /><br /><br />
        <div className="container">
          <div className="row">
            <div className="col-md-6" key={product.id}>
              <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src={`/images/${product.image}`} alt="First slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={`/images/${product.imageOne}`} alt="Second slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={`/images/${product.imageTwo}`} alt="Second slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={`/images/${product.imageThree}`} alt="Second slide" />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev"> <span className="carousel-control-prev-icon" aria-hidden="true"></span> <span className="sr-only">Previous</span> </a> <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next"> <span className="carousel-control-next-icon" aria-hidden="true"></span> <span className="sr-only">Next</span> </a> </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <h2>{product.product_bname} {product.product_name}</h2>
              </div>
              <div className="row">
                <span classNameName="mrp ml-2" style={{ 'font-size': '16px' }}>
                  MRP&nbsp;
                  <del style={{ 'font-size': '16px' }}>
                    &nbsp;{currencyFormatter.format(product.price, { code: 'INR' })}
                  </del>&nbsp;
                  <span style={{ 'font-size': '12px', 'color': 'grey' }}>
                  &#10088;{product.discount}%&#10089; 
                  </span>
                  <span style={{ 'font-size': '18px' }}>
                    &nbsp;{currencyFormatter.format(product.discountPrice, { code: 'INR' })}
                  </span>
                </span>
                {/* <h1>&nbsp;{currencyFormatter.format(product.discountPrice, { code: 'INR' })}</h1>
                &nbsp; &nbsp;
                <h2> {product.discount}%</h2>
                <h3><del>&nbsp;{currencyFormatter.format(product.price, { code: 'INR' })}</del></h3>
                &nbsp; &nbsp;
                <h2 className="text-success">{product.discount}%</h2> */}
              </div>
              <div className="row">
                <h3 className="text-warning"><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star-half-o" aria-hidden="true"></i><i className="fa fa-star-o" aria-hidden="true"></i></h3>
                &nbsp; &nbsp;
                {/* <h5>1200 star rating  and 250 reviews</h5> */}
              </div>
              <div className="row">
                {/* <p><i className="text-success fa fa-check-square-o" aria-hidden="true"></i> <strong>Bank Offer</strong> 20% Instant Discount on SBI Credit Cards</p>
                <p><i className="text-success fa fa-check-square-o" aria-hidden="true"></i> <strong>Bank Offer</strong> 5% Unlimited Cashback on Flipkart Axis Bank Credit Card </p>
                <p><i className="text-success fa fa-check-square-o" aria-hidden="true"></i> <strong>Bank Offer</strong> Extra 5% off* with Axis Bank Buzz Credit Card</p>
                <p><i className="text-success fa fa-check-square-o" aria-hidden="true"></i> <strong>Bank Offer</strong>20% Instant Discount on pay with <i className="fa fa-google-wallet" aria-hidden="true"></i> google wallet </p> */}
              </div>
              {/* <div className="row mt-4">
                <h3 className="text-info"><i className="fa fa-map-marker" aria-hidden="true"></i></h3>
                <p style={{ fontSize: "20px" }}> &nbsp; Delivery by23 Jul, Tuesday | &nbsp; <span className="text-success">FREE</span> </p>
              </div> */}
              {/* <div className="row mt-4">
                <h4>Size: &nbsp; &nbsp;</h4>
                <div className="dropdown show"> <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Select sizes </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink"> <a className="dropdown-item" href="#">small</a> <a className="dropdown-item" href="#">meduam </a> <a className="dropdown-item" href="#">large</a> </div>
                </div>
              </div> */}
              {/* <div className="row mt-4">
                <h4>Colors: &nbsp; &nbsp; </h4>

                <a className="btn btn-primary text-light">Sky Blue</a> &nbsp; <a className="btn btn-danger text-light"> red</a>&nbsp; <a className="btn btn-info text-light"> blue </a> &nbsp; <a className="btn btn-warning text-light"> yellow</a> &nbsp; <a className="btn btn-success text-light"> green</a>
              </div> */}

              {/* <div className="row mt-4">
                <h4>Seller: &nbsp; &nbsp;</h4>
                <p style={{ fontSize: "18px" }}>G.M Garments </p>
              </div> */}

              <div>
                <span><FaTruck /></span>&nbsp;
                <span>Standard Delivery: 23 April, 6:00AM - 8:00AM</span>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button
                  onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } })}
                  className="btn btn-primary btn-lg px-3 w-50">
                  Add to cart <FaCartPlus />
                </button>
                <button
                  type="button"
                  className="btn btn-primary bg-danger btn-lg w-50 ml-2">
                  Buy Now <FaBolt style={{ color: 'yellow' }} />
                </button>
              </div>


            </div>
          </div>
        </div>
        {/* --------------------------------------- */}
        <div className="container">
          <div className="row mt-5">
            <h2>Similar Products</h2>
          </div>
        </div>
        <OtherItems />



        <div className="container mt-5 mb-5">
          <div className="row">
            <h2>Ratings & Reviews</h2>
          </div>

          <div className="row mt-5 mb-5">
            <div className="media">
              <img className="mr-3" src="11.jpg" alt="Generic placeholder image" />
              <div className="media-body">
                <h5 className="mt-0">Very nice product.<span className="text-warning"><i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star-half-o" aria-hidden="true"></i> <i className="fa fa-star-o" aria-hidden="true"></i> </span></h5>
                Cras sit amet nibh libero, in gravida nulla.Nulla vel metus scelerisque ante sollicitudin.Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.Fusce condimentum nunc ac nisi vulputate fringilla.Donec lacinia congue felis in faucibus.
              </div>
            </div>
          </div>

          <div className="row mb-5">
            <div className="media"> <img className="mr-3" src="12.jpg" alt="Generic placeholder image" alt="..." />
              <div className="media-body">
                <h5 className="mt-0">Best product best material.<span className="text-warning"><i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> </span></h5>
                Cras sit amet nibh libero, in gravida nulla.Nulla vel metus scelerisque ante sollicitudin.Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.Fusce condimentum nunc ac nisi vulputate fringilla.Donec lacinia congue felis in faucibus.</div>
            </div>
          </div>


          <div className="row mb-5">
            <div className="media"> <img className="mr-3" src="13.jpg" alt="Generic placeholder image" alt="..." />
              <div className="media-body">
                <h5 className="mt-0"> Bad product.dont take this<span className="text-warning"><i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star-o" aria-hidden="true"></i> <i className="fa fa-star-o" aria-hidden="true"></i> <i className="fa fa-star-o" aria-hidden="true"></i> </span></h5>
                Cras sit amet nibh libero, in gravida nulla.Nulla vel metus scelerisque ante sollicitudin.Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.Fusce condimentum nunc ac nisi vulputate fringilla.Donec lacinia congue felis in faucibus.</div>
            </div>
          </div>


          <div className="row mb-5">
            <div className="media"> <img className="mr-3" src="14.jpg" alt="Generic placeholder image" alt="..." />
              <div className="media-body">
                <h5 className="mt-0">really nice product,value for money.<span className="text-warning"><i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star-half-o" aria-hidden="true"></i> <i className="fa fa-star-o" aria-hidden="true"></i> </span></h5>
                Cras sit amet nibh libero, in gravida nulla.Nulla vel metus scelerisque ante sollicitudin.Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.Fusce condimentum nunc ac nisi vulputate fringilla.Donec lacinia congue felis in faucibus.</div>
            </div>
          </div>

          <div className="row mb-5">
            <h2> Post Your Own Reviews</h2>
          </div>


          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <textarea type="text" className="form-control" id="exampleInputtextarea" placeholder="write your own reviews" rows="3"></textarea>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>

        </div>
        {/* <div className="container">
          <div className="row">
            <div className="col" style={{ border: '1px solid red' }}>
              <div className="" key={product.id} style={{ 'border': '1px solid black' }}>
                <span>
                  <img src={`/images/${product.vname}`} alt="..." style={{ 'height': '15px', 'width': '15px', 'float': 'left' }} />
                </span>
                <span>
                  <img src={`/images/${product.image}`} alt="..." style={{ 'height': '400px', 'width': '500px', 'float': 'left' }} />
                </span>
              </div>
              <span className="d-flex justify-content-start form-floating bd-highlight">

              </span>
            </div>
            <div className="col" style={{ border: '1px solid red' }}>
              <h1 className="d-flex justify-content-center form-floating bd-highlight">
                <span>{product.product_bname}</span>&nbsp;
                <span>{product.product_name}</span>
              </h1>
              <div className="col d-flex justify-content-lg-between p-2" style={{ border: '1px solid red' }}>
                <span className="mrp ml-2" style={{ 'font-size': '16px' }}>
                  MRP&nbsp;
                  <s style={{ 'font-size': '16px' }}>
                    &nbsp;{currencyFormatter.format(product.price, { code: 'INR' })}
                  </s>&nbsp;
                  <span style={{ 'font-size': '12px', 'color': 'grey' }}>
                    {product.discount}%
                  </span>
                  <span style={{ 'font-size': '18px' }}>
                    &nbsp;{currencyFormatter.format(product.discountPrice, { code: 'INR' })}
                  </span>
                </span>
                <span className="d-flex justify-content-end form-floating bd-highlight">
                  <h6></h6>
                  <div style={{ checked: 'orange' }}>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </span>
              </div>
              <div>
                <span><FaTruck /></span>&nbsp;
                <span>Standard Delivery: 23 April, 6:00AM - 8:00AM</span>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button
                  onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } })}
                  className="btn btn-primary btn-lg px-3 w-50">
                  Add to cart <FaCartPlus />
                </button>
                <button
                  type="button"
                  className="btn btn-primary bg-danger btn-lg w-50 ml-2">
                  Buy Now <FaBolt style={{ color: 'yellow' }} />
                </button>
              </div>

            </div>
          </div>

        </div> */}
      </div>

    </>
  )
}

export default Details
