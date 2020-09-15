import React from "react";
import {Link} from "react-router-dom";
import "../design/Navigation.css";


function MainNavBar () {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top foodie-nav">
            <div className="container">
                <a className="navbar-brand" href="/">Foodiey</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <Link to={'/home'} className="nav-item">
                            <li className="nav-link">Home</li>
                        </Link>
                        <Link to={'/my_cart'} className="nav-item">
                            <li className="nav-link">My Cart</li>
                        </Link>
                        <Link to={'/account'} className="nav-item">
                            <li className="nav-link">Account</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default MainNavBar;