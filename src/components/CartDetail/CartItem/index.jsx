import React from 'react';

const CartItem = ({cartItem, removeCartClicked,addOneItem, removeOneItem }) => {
    return (
        <tr className="cart_item">
                                        
                                            
            <td className="product-remove">
                <a title="Remove this item" className="remove" onClick = {()=>removeCartClicked(cartItem.id)}>×</a> 
            </td>

            <td className="product-thumbnail">
                No Image
            </td>

            <td className="product-name">
                {cartItem.name}
            </td>

            <td className="product-price">
                <span className="amount">${cartItem.price}</span> 
            </td>

            <td className="product-quantity">
                <div class="quantity buttons_added">
                    <input type="button" class="minus" value="-" onClick={()=>removeOneItem(cartItem.id)}/>
                    {cartItem.quantity}   
                    <input type="button" class="plus" value="+" onClick={()=>addOneItem(cartItem.id)}/>
                </div>
            </td>

            <td className="product-subtotal">
                <span className="amount">${cartItem.price*cartItem.quantity}</span> 
            </td>
        </tr>
    );
};

export default CartItem;