import React from 'react';
import './App.css';
import Home from "./pages/Home";
import './lib/FontAwesomeIcons'
import MainNavBar from "./partials/MainNavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MyCart from "./pages/MyCart";
import Account from "./pages/Account";
import FoodDetail from "./pages/FoodDetail";
import Login from "./pages/Login";

function App() {

  return (
      <div>
          <Login>

          </Login>
      </div>


    // <Router>
    //     <div className="App">
    //         <MainNavBar/>
    //         <Switch>
    //             <Route path="/" exact component={Home}/>
    //             <Route path="/home" component={Home}/>
    //             <Route path="/my_cart" component={MyCart}/>
    //             <Route path="/account" component={Account}/>
    //             <Route path={'/food/detail/:id'} component={FoodDetail}/>
    //             <Route path="/login" component={Login}/>
    //         </Switch>
    //     </div>
    // </Router>
  );
}

export default App;
