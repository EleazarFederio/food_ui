import React from 'react';
import './App.css';
import Home from "./pages/Home";
import MainNavBar from "./partials/MainNavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MyCart from "./pages/MyCart";
import Account from "./pages/Account";

function App() {
  return (
    <Router>
        <div className="App">
            <MainNavBar/>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/my_cart" component={MyCart}/>
                <Route path="/account" component={Account}/>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
