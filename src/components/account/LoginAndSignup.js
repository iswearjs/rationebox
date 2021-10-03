import React from 'react'
import './loginandsignup.css'
const LoginAndSignup = () => {
    return (
        <>
            <div className="login-wrap">
                <div className="login-html">
                    <div className="social-login">
                        <button className="btn facebook-btn social-btn btn btn-primary mr-4" type="button">
                            <span>
                                <i className="fab fa-facebook-f"/>&nbsp;
                                Sign in with Facebook
                            </span>
                        </button> 
                        <button className="btn google-btn social-btn btn btn-danger ml-4" type="button">
                            <span>
                                <i className="fab fa-google-plus-g"/>&nbsp;
                                Sign in with Google+
                            </span>
                        </button>
                    </div>
                    <input id="tab-1" type="radio" name="tab" className="sign-in" checked />
                    <label for="tab-1" className="tab">Sign In</label>
                    <input id="tab-2" type="radio" name="tab" className="sign-up" />
                    <label for="tab-2" className="tab">Sign Up</label>
                    <div className="login-form">
                        <div className="sign-in-htm">
                            <div className="group">
                                <label htmlFor="user" className="label">Username</label>
                                <input id="user" type="text" className="input" />
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">Password</label>
                                <input id="pass" type="password" className="input" data-type="password" />
                            </div>
                            <div className="group">
                                <input id="check" type="checkbox" className="check" checked />
                                <label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
                            </div>
                            <div className="group">
                                <input type="submit" className="button" value="Sign In" />
                            </div>
                            <div className="hr"></div>
                            <div className="foot-lnk">
                                <a href="#forgot">Forgot Password?</a>
                            </div>
                        </div>
                        <div className="sign-up-htm">
                            <div className="group">
                                <label htmlFor="user" className="label">Username</label>
                                <input id="user" type="text" className="input" />
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">Password</label>
                                <input id="pass" type="password" className="input" data-type="password" />
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">Repeat Password</label>
                                <input id="pass" type="password" className="input" data-type="password" />
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">Email Address</label>
                                <input id="pass" type="text" className="input" />
                            </div>
                            <div className="group">
                                <input type="submit" className="button" value="Sign Up" />
                            </div>
                            <div className="hr"></div>
                            <div className="foot-lnk">
                                <label for="tab-1">Already Member?</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginAndSignup;