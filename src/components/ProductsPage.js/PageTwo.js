import React from 'react'
import { Link } from 'react-router-dom';
import './page.css';

const PageTwo = () => {
    return (
        <>
            <div className="boxthree">
                <h3>Cleaning <span>&#38;</span> Household - <Link to="/" target="_blank">Clue Mediator</Link></h3><hr />
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <img className="wrapper__img" src="images/detergent-febric.jpg" alt="Invalid" />
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <img className="wrapper__img" src="images/home-freshners.jpg" alt="Invalid" />
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <img className="wrapper__img" src="images/floor-toilet-clearner.jpg" alt="Invalid" />
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <img className="wrapper__img" src="images/Mosquito-Repellant-Coils.jpg" alt="Invalid" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageTwo;

// 1200, 980, 767, 575