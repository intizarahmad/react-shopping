import React from 'react';
import CartItem from './CartItem';
const CartDetail = (props) =>{
   const {cartItems, removeCartItem} = props;
        return (
        <div className="single-product-area">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="product-content-right">
                      
                      {
                          cartItems.length> 0?
                          <div className="woocommerce">
                                <table cellSpacing="0" className="shop_table cart">
                                    <thead>
                                        <tr>
                                            <th className="product-remove">Remove</th>
                                            <th className="product-thumbnail">Image</th>
                                            <th className="product-name">Product</th>
                                            <th className="product-price">Price</th>
                                            <th className="product-quantity">Quantity</th>
                                            <th className="product-subtotal">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cartItems.map((cartItem)=>{
                                                return <CartItem  cartItem= {cartItem} removeCartClicked ={removeCartItem}  />
                                            })
                                        }
                                    </tbody>
                                </table>
                        
                        </div> :'Cart is empty.' 
                        }                      
                    </div>                    
                </div>
            </div>
        </div>
    </div>
        
            
        );
    }


export default CartDetail;