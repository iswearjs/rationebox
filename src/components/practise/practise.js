<div className="container">
    <div className="row row-cols-1 row-cols-md-3 g-4 mb-2" style={{ 'border': '1px solid red' }}>
        {products.map(product => (
            <div className="row mb-2">
                <div className="col colo">
                    <div className="card h-100">
                        <div className="card-header">
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
        ))}
    </div>
    {/* End */}
</div>