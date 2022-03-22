import React, { useEffect, useState } from 'react';
import './Shop.css'


const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect( () =>{
        fetch(`https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json`)
        .then(res => res.json())
        .then(data => setProducts(data))

    }, [])
    return (
        <div className='shop'>
            <div className="products-container">
                <h3>products: {products.length}</h3>
                
            </div>
            <div className="cart-container">
                <h5>this is cart container</h5>
            </div>
        </div>
    );
};

export default Shop;