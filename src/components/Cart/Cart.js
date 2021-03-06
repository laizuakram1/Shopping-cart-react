import React from 'react';
import './Cart.css';


const Cart = ({cart}) => {
    let total = 0;
    let shipping = 0;
    for(const products of cart){
        total = total + products.price;
        shipping = shipping + products.shipping;
    }
    let  tax = 0;
    tax = parseFloat((total * 0.1).toFixed(2)); 
    let grandTotal = total + shipping + tax;
 
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
                <p>selected items: {cart.length}</p>
                <p>Total Price:${total} </p>
                <p>Shipping charge: ${shipping} </p>
                <p>Tax:${tax} </p>
                <h3>Grand Total:${grandTotal.toFixed(2)} </h3>
        </div>
    );
};

export default Cart;
