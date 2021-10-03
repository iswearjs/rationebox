import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProductCategory from './components/category/ProductCategory'
import ProductSlider from './components/slider/ProductSlider'
import Navbar from './components/navbar/Navbar'
import PageOne from './components/ProductsPage.js/PageOne'
import BestOffer from './components/offers and values/BestOffer'
import PageTwo from './components/ProductsPage.js/PageTwo'
import SlideOne from './components/slider/SlideOne'
import PageSlideOne from './components/slideproduct/PageSlideOne'
import PageSlideTwo from './components/slideproduct/PageSlideTwo'
import PageSlideThree from './components/slideproduct/PageSlideThree'
import SlideTwo from './components/slider/SlideTwo'
import Footer from './components/footer/Footer'
import Details from './components/products/Details'
import { Provider } from 'react-redux';
import store from './components/store';
import Cart from './components/cart/Cart'
import PageDetailsOne from './components/allproduct/PageDetailsOne'
import PageThree from './components/ProductsPage.js/PageThree'
import LoginAndSignup from './components/account/LoginAndSignup'

const Home = () => {
    return (
        <>
            <Switch>
                <Router>
                    <Provider store={store}>
                        <Route path="/" exact component={Navbar} />
                        <Route path="/loginandsignup" exact component={LoginAndSignup}/>
                        <Route path="/cart" exact component={Cart} />
                        <Route path="/" exact component={ProductCategory} />
                        <Route path="/" exact component={ProductSlider} />
                        <Route path="/" exact component={PageSlideOne} />
                        <Route path="/" exact component={BestOffer} />
                        <Route path="/pagedetailsone" component={PageDetailsOne} />
                        <Route path="/details/:id/" exact component={Details} />
                        <Route path="/" exact component={PageOne} />
                        <Route path="/" exact component={PageTwo} />
                        <Route path="/" exact component={PageSlideTwo} />
                        <Route path="/" exact component={SlideOne} />
                        <Route path="/" exact component={PageSlideThree} />
                        <Route path="/" exact component={PageThree}/>
                        <Route path="/" exact component={SlideTwo} />
                        <Route path="/" exact component={Footer} />
                    </Provider>
                </Router>
            </Switch>
        </>
    )
}

export default Home;