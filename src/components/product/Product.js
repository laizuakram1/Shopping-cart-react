import React from 'react';
import './Product.css'

const Product = ({product,handleAddToCart}) => {
   
    return (
        <div className='product'>
            <img src={product.img} alt="" />
           <div className='product-info'>
              
                <h3>{product.name.slice(0, 15)}</h3>
                <h4>${product.price}</h4>
                <p>Manufacturer: {product.seller}</p>
                <p>Rattings: {product.ratings} star</p>
           </div>
            <button onClick={() =>handleAddToCart(product)} className='cart-btn'>Add to Cart

            </button>
        </div>

    );
};

export default Product;