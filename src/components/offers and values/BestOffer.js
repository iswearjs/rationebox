import React from 'react'
import { Link } from 'react-router-dom';
import './offers.css';

const BestOffer = () => {
    return (
        <>
            <div className="boxtwo">
                <h3>Best Values - <Link to="/" target="_blank">Clue Mediator</Link></h3><hr />
                <div className="container">
                    <div className="row g-3 ml-2">
                        <div className="col-md-3 col-sm-4 col-xs-6 i_mage">
                        <Link to="/pagedetailsone">
                            <img className="img-responsive" src="images/dals-pulses-20200714.png" alt="Invalid" />
                        </Link>
                        </div>
                        <div className="col-md-3 col-sm-4 col-xs-6 i_mage">
                            <img className="img-responsive" src="images/atta-flour.png" alt="Invalid" />
                        </div>
                        <div className="col-md-3 col-sm-4 col-xs-6 i_mage">
                            <img className="img-responsive" src="images/edible_oil.png" alt="Invalid" />
                        </div>
                        <div className="col-md-3 col-sm-4 col-xs-6 i_mage">
                            <img className="img-responsive" src="images/salt_sugar_jaggery.png" alt="Invalid" />
                        </div>
                        <div className="col-md-3 col-sm-4 col-xs-6 i_mage">
                            <img className="img-responsive" src="images/bath-hand-wash-20200714.png" alt="Invalid" />
                        </div>
                        <div className="col-md-3 col-sm-4 col-xs-6 i_mage">
                            <img className="img-responsive" src="images/toothpaste-20200520.png" alt="Invalid" />
                        </div>
                        <div className="col-md-3 col-sm-4 col-xs-6 i_mage">
                            <img className="img-responsive" src="images/noodle-pasta-vermicelli-20200603.png" alt="Invalid" />
                        </div>
                        <div className="col-md-3 col-sm-4 col-xs-6 i_mage">
                            <img className="img-responsive" src="images/biscuits_cookies.png" alt="Invalid" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BestOffer;
