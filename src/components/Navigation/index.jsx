import React, { Component } from 'react';
import {  NavLink } from "react-router-dom";

class index extends Component {
    render() {
        return (
            <div className="mainmenu-area">
                <div className="container">
                    <div className="row">
                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li><NavLink to="/shop" activeClassName="active">Home</NavLink></li>
                                <li><NavLink to="/cart" activeClassName="active">Cart</NavLink></li>
                            </ul>
                        </div>  
                    </div>
                </div>
            </div>
        );
    }
}
export default index;