import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import '../resources/css/bootstrap.min.css';
import '../resources/css/style.css';
import "react-toastify/dist/ReactToastify.css";
import Header from '../containers/header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Shop from '../containers/shop';
import Cart from '../containers/cart';

class App extends Component {
  render() {
    return (
      <Router>
        
        <Fragment>
        <ToastContainer
            position="bottom-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
           
        />
        <Header />
        <Navigation />
        <Switch>
          <Route path="/" exact  render={() => (<Redirect to="/shop"/>)} />
          <Route path="/cart" component={Cart} />
          <Route path="/shop" component={Shop} />
        </Switch>
        <Footer />
        </Fragment>
      </Router>
    );
  }
}
export default connect()(App);