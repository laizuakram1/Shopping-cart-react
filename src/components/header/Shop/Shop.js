import React, { useEffect, useState } from 'react';
import Product from '../../product/Product';
import './Shop.css'

const handleAddToCart = (product) => {
    console.log(product);
}
export {handleAddToCart}

const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect( () =>{
        fetch(`https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json`)
        .then(res => res.json())
        .then(data => setProducts(data))

    }, [])
    return (
        <div className='shop'>
            <div className="product-container">
              {
                  products.map(product => <Product 
                    product = {product}
                    key = {product.id}
                    handleAddToCart = {handleAddToCart}
                  ></Product>)
              }
                
            </div>
            <div className="cart-container">
                <h5>this is cart container</h5>
            </div>
        </div>
    );
};

export default Shop;