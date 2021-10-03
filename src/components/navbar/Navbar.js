import React from 'react'
import './navbar.css';
import './navbar.scss'
import './nav.css';
import { FaShoppingCart, FaUserAlt, FaTimes, FaBars, FaSearch } from 'react-icons/fa';
import { ImLocation2 } from 'react-icons/im';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import LoginAndSignup from '../account/LoginAndSignup';

const Navbar = () => {

  const { totalQuantities } = useSelector(state => state.CartReducer)

  return (
    <>
      <div className="">
        <input type="checkbox" id="check" />
        <nav>
          <div class="startContainer">
            <div className="button_pulseBox pulseBox"><span style={{ fontSize: '3.125rem', fontFamily: 'Pacifico, cursive' }}>R</span>ation<b style={{ color: 'red', fontFamily: 'Pacifico, cursive' }}>E</b>box</div>
          </div>
          {/* <div className="icon"><span style={{ fontSize: '3.125rem' }}>R</span>ation<b style={{ color: 'red' }}>E</b>box</div> */}
          <div className="search_box">
            <input type="search" placeholder="Search for the product..." />
            <span><FaSearch /></span>
          </div>
          <ol>
            <li>
              <Link to="">
                <ImLocation2 title="My Location" />491001, Durg</Link>
            </li>
            <li>
              <Link to="/loginandsignup">
                <FaUserAlt title="login or singup" />Login/Signup
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <FaShoppingCart title="My Personal Cart" />
                <span className="cart-icon">{totalQuantities}</span>
              </Link>
            </li>
          </ol>
          <label for="check" className="bar">
            <span><FaBars id="bars" /></span>
            <span><FaTimes id="times" /></span>
          </label>
        </nav>
      </div>
      {/* hero section */}
      {/* <section className="hero-section">
                <p>Welcome to</p>
                <h1>Thapa Technical</h1>
            </section> */}
    </>
  )
}

export default Navbar;
