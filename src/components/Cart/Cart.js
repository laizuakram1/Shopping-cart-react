import React from 'react';
import './Cart.css';


const Cart = ({cart}) => {
    let total = 0;
    for(const products of cart){
        total = total + products.price;
    }
 
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
                <p>selected items: {cart.length}</p>
                <p>Total Price:${total} </p>
                <p>Shipping charge: </p>
                <p>Tax: </p>
                <h3>Grand Total: </h3>
        </div>
    );
};

export default Cart;