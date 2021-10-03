import React from 'react'
import {FaCaretDown} from 'react-icons/fa'
import './menubar.css'
const SideMenuBar = () => {
    return (
        <>
            <div className="wrapper-app">
                <div className="sidebar__header">
                    <h3 className="sidebar__psition">Categories</h3>
                    <hr className="cat_h_border" />
                </div>
                <div className="wrapper">
                    <div className="navigation">
                        <ul className="mainmenu">
                            <li><a href="/" alt="...">Fruits &#38; Vegetables<span className="fas-down"><FaCaretDown /></span></a>
                                <ul className="submenu">
                                    <li><a href="/" alt="...">Fresh Vegetables</a></li>
                                    <li><a href="/" alt="...">Fresh Fruits</a></li>
                                    <li><a href="/" alt="...">Herbs &#38; Seasonings</a></li>
                                    <li><a href="/" alt="...">Cuts &#38; Sprouts</a></li>
                                    <li><a href="/" alt="...">Exotic Fruits &#38; Veggies</a></li>
                                    <li><a href="/" alt="...">Organic Fruits &#38; Vegetables</a></li>
                                    <li><a href="/" alt="...">Flower Bouquets, Bunches</a></li>
                                </ul>
                            </li>
                            <li><a href="/" alt="...">Foodgrains, Oil &#38; Masala<span className="fas-down"><FaCaretDown /></span></a>
                                <ul className="submenu">
                                    <li><a href="/" alt="...">Dals &#38; Pulses</a></li>
                                    <li><a href="/" alt="...">Rice &#38; Rice Products</a></li>
                                    <li><a href="/" alt="...">Atta , Flours &#38; Sooji</a></li>
                                    <li><a href="/" alt="...">Salt, Sugar &#38; Jaggery</a></li>
                                    <li><a href="/" alt="...">Edible Oils &#38; Ghee</a></li>
                                    <li><a href="/" alt="...">Organic Staples</a></li>
                                    <li><a href="/" alt="...">Malasals &#38; Spices</a></li>
                                    <li><a href="/" alt="...">Dry Fruits</a></li>
                                </ul>
                            </li>
                            <li><a href="/" alt="...">Baker, Cakes &#38; Dairy<span className="fas-down"><FaCaretDown /></span></a>
                                <ul className="submenu">
                                    <li><a href="/" alt="...">Dairy</a></li>
                                    <li><a href="/" alt="...">Breads &#38; Buns</a></li>
                                    <li><a href="/" alt="...">Bakery Snacks</a></li>
                                    <li><a href="/" alt="...">Cookies, Rusk &#38; Khari</a></li>
                                    <li><a href="/" alt="...">Cakes &#38; Pastries</a></li>
                                    <li><a href="/" alt="...">Ice Creams &#38; Desserts</a></li>
                                    <li><a href="/" alt="...">Gourmet Breads</a></li>
                                </ul>
                            </li>
                            <li><a href="/" alt="...">Snacks &#38; Branded Foods<span className="fas-down"><FaCaretDown /></span></a>
                                <ul className="submenu">
                                    <li><a href="/" alt="...">Noodle, Pasta, Vermicelli</a></li>
                                    <li><a href="/" alt="...">Biscuits &#38; Cookies</a></li>
                                    <li><a href="/" alt="...">Breakfast Cereals</a></li>
                                    <li><a href="/" alt="...">Spreads, Souces, Ketchup</a></li>
                                    <li><a href="/" alt="...">Frozen Veggies &#38; Snacks</a></li>
                                    <li><a href="/" alt="...">Snacks &#38; Namkeen</a></li>
                                    <li><a href="/" alt="...">Ready To Cook &#38; Eat</a></li>
                                    <li><a href="/" alt="...">Chocolates &#38; Candies</a></li>
                                    <li><a href="/" alt="...">Pickles &#38; Chutney</a></li>
                                    <li><a href="/" alt="...">Indian Mithai</a></li>
                                </ul>
                            </li>
                            <li><a href="/" alt="...">Beauty &#38; Hygiene<span className="fas-down"><FaCaretDown /></span></a>
                                <ul className="submenu">
                                    <li><a href="/" alt="...">Feminine Hygiene</a></li>
                                    <li><a href="/" alt="...">Oral Care</a></li>
                                    <li><a href="/" alt="...">Bath &#38; Hand Wash</a></li>
                                    <li><a href="/" alt="...">Health &#38; Medicine</a></li>
                                    <li><a href="/" alt="...">Hair Care</a></li>
                                    <li><a href="/" alt="...">Men's Grooming</a></li>
                                    <li><a href="/" alt="...">Skin Care</a></li>
                                    <li><a href="/" alt="...">Fragrances &#38; Deos</a></li>
                                    <li><a href="/" alt="...">Makeup</a></li>
                                </ul>
                            </li>
                            <li><a href="/" alt="...">Cleaning &#38; Household<span className="fas-down"><FaCaretDown /></span></a>
                                <ul className="submenu">
                                    <li><a href="/" alt="...">Detergents &#38; Dishwash</a></li>
                                    <li><a href="/" alt="...">All Purpose Cleaners</a></li>
                                    <li><a href="/" alt="...">Disposables, Garbage Bag</a></li>
                                    <li><a href="/" alt="...">Mops, Brushes &#38; Scrubs</a></li>
                                    <li><a href="/" alt="...">Fresheners &#38; Repellents</a></li>
                                    <li><a href="/" alt="...">Bins &#38; Bathroom Ware</a></li>
                                    <li><a href="/" alt="...">Stationery</a></li>
                                    <li><a href="/" alt="...">Party &#38; Festive Needs</a></li>
                                    <li><a href="/" alt="...">Pooja Needs</a></li>
                                    <li><a href="/" alt="...">Cars &#38; Shoe Care</a></li>
                                </ul>
                            </li>
                            <li><a href="/" alt="...">Kitchen, Garden &#38; Pets<span className="fas-down"><FaCaretDown /></span></a>
                                <ul className="submenu">
                                    <li><a href="/" alt="...">Appliances &#38; Electricals</a></li>
                                    <li><a href="/" alt="...">Kitchen Accessories</a></li>
                                    <li><a href="/" alt="...">Pet Food &#38; Accessories</a></li>
                                    <li><a href="/" alt="...">Cookware &#38; Non Stick</a></li>
                                    <li><a href="/" alt="...">Bakeware</a></li>
                                    <li><a href="/" alt="...">Steel Utensils</a></li>
                                    <li><a href="/" alt="...">Gardening</a></li>
                                    <li><a href="/" alt="...">Crockery &#38; Cutlery</a></li>
                                    <li><a href="/" alt="...">Flask &#38; Casserole</a></li>
                                    <li><a href="/" alt="...">Storage &#38; Accessories</a></li>
                                </ul>
                            </li>
                            <li><a href="/" alt="...">Eggs, Meat &#38; Fish<span className="fas-down"><FaCaretDown /></span></a>
                                <ul className="submenu">
                                    <li><a href="/" alt="...">Eggs</a></li>
                                    <li><a href="/" alt="...">Poultry</a></li>
                                    <li><a href="/" alt="...">Sausages, Bacon &#38; Salami</a></li>
                                    <li><a href="/" alt="...">Mutton &#38; Lamb</a></li>
                                    <li><a href="/" alt="...">Fish &#38; Seafood</a></li>
                                    <li><a href="/" alt="...">Marinades</a></li>
                                    <li><a href="/" alt="...">Pork &#38; Other Meats</a></li>
                                </ul>
                            </li>
                            <li><a href="/" alt="...">Gourmet &#38; World Food<span className="fas-down"><FaCaretDown /></span></a>
                                <ul className="submenu">
                                    <li><a href="/" alt="...">Oils &#38; Venegar</a></li>
                                    <li><a href="/" alt="...">Dairy &#38; Cheese</a></li>
                                    <li><a href="/" alt="...">Pasta, Soup &#38; Noodles</a></li>
                                    <li><a href="/" alt="...">Snacks, Dry Fruits, Nuts</a></li>
                                    <li><a href="/" alt="...">Cookies &#38; Baking Needs</a></li>
                                    <li><a href="/" alt="...">Sauces, Spreads &#38; Dips</a></li>
                                    <li><a href="/" alt="...">Cereals &#38; Breakfast</a></li>
                                    <li><a href="/" alt="...">Chocolates &#38; Biscuits</a></li>
                                    <li><a href="/" alt="...">Drinks &#38; Beverages</a></li>
                                    <li><a href="/" alt="...">Tinned &#38; Processed Food</a></li>
                                </ul>
                            </li>
                            <li><a href="/" alt="...">Baby Care<span className="fas-down"><FaCaretDown /></span></a>
                                <ul className="submenu">
                                    <li><a href="/" alt="...">Baby Food &#38; Formula</a></li>
                                    <li><a href="/" alt="...">Baby Bath &#38; Hygiene</a></li>
                                    <li><a href="/" alt="...">Diapers &#38; Wipes</a></li>
                                    <li><a href="/" alt="...">Baby Accessories</a></li>
                                    <li><a href="/" alt="...">Feeding &#38; Nursing</a></li>
                                    <li><a href="/" alt="...">Mothers &#38; Maternity</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideMenuBar;
