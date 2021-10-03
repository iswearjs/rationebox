import React from 'react'
import { Link } from 'react-router-dom';
import './page.css';

const PageOne = () => {
    return (
        <>
            <div class="box">
                <h3>Beauty <span>&#38;</span> Hygiene - <Link to="/" target="_blank">Clue Mediator</Link></h3><hr />
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <img src="images/winter-skin-care.jpg" alt="Gallery 1" className="ima_ge" />
                        </div>
                        <div className="col-md-5 col-sm-12 col-xs-12 ml-5">
                            <div className="row row-cols-2 row-cols-md-2 g-4">
                                <div className="">
                                    <img src="images/deos-and-perfumes.jpg" alt="Gallery 2" className="imag_e" />
                                </div>
                                <div className="">
                                    <img src="images/feminine-hygiene.jpg" alt="Gallery 3" className="imag_e" />
                                </div>
                                <div className="">
                                    <img src="images/toothpaste-mouthwash.jpg" alt="Gallery 4" className="imag_e" />
                                </div>
                                <div className="">
                                    <img src="images/toothpaste-mouthwash.jpg" alt="Gallery 4" className="imag_e" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageOne;
