import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Product from '../../product/Product';
import './Shop.css';



const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect( () =>{
        fetch(`https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json`)
        .then(res => res.json())
        .then(data => setProducts(data))

    }, [])

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }

   
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
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;