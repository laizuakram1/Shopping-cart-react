import React from 'react';
import './Product.css'

const Product = ({product}) => {
    console.log(product);
    return (
        <div className='product'>
            <img src={product.img} alt="" />
           <div className='product-info'>
                <h3>{product.name}</h3>
                <h4>${product.price}</h4>
                <p>Manufacturer: {product.seller}</p>
                <p>Rattings: {product.ratings} star</p>
           </div>
        </div>
        
    );
};

export default Product;