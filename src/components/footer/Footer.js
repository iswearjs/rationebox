import React from 'react'
import './footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa';
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-cont">
                    <div className="row">
                        <div className="footer-col">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="/">About Us</a></li>
                                <li><a href="/">Our Services</a></li>
                                <li><a href="/">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Get Help</h4>
                            <ul>
                                <li><a href="/">FAQ</a></li>
                                <li><a href="/">Shipping</a></li>
                                <li><a href="/">Returns</a></li>
                                <li><a href="/">Order Status</a></li>
                                <li><a href="/">Payment Options</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Online Shop</h4>
                            <ul>
                                <li><a href="/">Grocery</a></li>
                                <li><a href="/">Backery</a></li>
                                <li><a href="/">Kitchen</a></li>
                                <li><a href="/">Fashion</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Follow us</h4>
                            <div className="social-links">
                                <a href="/" className="fa facebook"><FaFacebook /></a>
                                <a href="/" className="fa twitter"><FaTwitter /></a>
                                <a href="/" className="fa instagram"><FaInstagram /></a>
                                <a href="/" className="fa pinterest"><FaPinterest /></a>
                                <a href="/" className="fa linkedin-in"><FaLinkedin /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
