import React from 'react';
import {  Link } from "react-router-dom";

const index = ({cost, quantity}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div className="logo">
                        <h1><Link to="/">Shopping Center</Link></h1>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="shopping-item">
                        <Link to="/cart">Cart - <span className="cart-amunt">${cost}</span><span className="product-count">{quantity}</span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;