import React from 'react'
import { Link } from 'react-router-dom';

const PageThree = () => {
    return (
        <>
            <div className="box__three">
                <h3>Top <span></span> Brands - <Link to="/" target="_blank">Clue Mediator</Link></h3><hr />
                <div className="grand_parent">
                    <div className="parents">
                        <div className="child">
                            <img className="f__contain" src="images/amul_01.jpg" alt="Invalid" />
                        </div>
                        <div className="child">
                            <img className="f__contain" src="images/dettol_02.jpg" alt="Invalid" />
                        </div>
                        <div className="child">
                            <img className="f__contain" src="images/cococola_03.jpg" alt="Invalid" />
                        </div>
                        <div className="child">
                            <img className="f__contain" src="images/loreal_04.jpg" alt="Invalid" />
                        </div>
                        <div className="child">
                            <img className="f__contain" src="images/indaia_gate_05.jpg" alt="Invalid" />
                        </div>
                        <div className="child">
                            <img className="f__contain" src="images/durex_06.jpg" alt="Invalid" />
                        </div>
                    </div>
                </div>
                {/* <div className="container">
                    <div className="row">
                        <div className="col-sm-2 col-md-2 col-xs-4">
                            <img className="f__contain" src="images/amul_01.jpg" alt="Invalid" />
                        </div>
                        <div className="col-sm-2 col-md-2 col-xs-4">
                            <img className="f__contain" src="images/dettol_02.jpg" alt="Invalid" />
                        </div>
                        <div className="col-sm-2 col-md-2 col-xs-2">
                            <img className="f__contain" src="images/cococola_03.jpg" alt="Invalid" />
                        </div>
                        <div className="col-sm-2 col-md-2 col-xs-2">
                            <img className="f__contain" src="images/loreal_04.jpg" alt="Invalid" />
                        </div>
                        <div className="col-sm-2 col-md-2 col-xs-2">
                            <img className="f__contain" src="images/indaia_gate_05.jpg" alt="Invalid" />
                        </div>
                        <div className="col-sm-2 col-md-2 col-xs-2">
                            <img className="f__contain" src="images/durex_06.jpg" alt="Invalid" />
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default PageThree
