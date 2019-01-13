import React from 'react';
import Product from './Product';
const Products = (props) => {
    const { productsList, addtoCart } = props;
    
    return (
            <div className="single-product-area">
                <div className="container">
                    <div className="row">
                    {
                            productsList.map((product)=>{
                            return <Product key={product.id} product={product} addtoCartClicked= {addtoCart} />
                            })
                    }
                     </div>
                </div>
            </div>
        
    );
}
export default Products;