import React from 'react';

const index = ({product, addtoCartClicked}) => {
    return (
        <div className="col-md-3 col-sm-6">
            <div className="single-shop-product">
                <div className="product-upper">
                    No Image Found
                </div>
                <h2>{product.name}</h2>
                <div className="product-carousel-price">
                    <ins>${product.price}</ins>
                </div>  
                <div className="product-option-shop">
                    <a className="add_to_cart_button" onClick = {()=>addtoCartClicked(product.id)}>Add to cart</a>
                </div>                       
            </div>
        </div>
    );
};

export default index;