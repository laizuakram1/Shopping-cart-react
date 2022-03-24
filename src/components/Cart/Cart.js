import React from 'react';


const Cart = ({cart}) => {
   
    return (
        <div>
            <h5>Cart Summary</h5>
                <p>selected items: {cart.length}</p>
        </div>
    );
};

export default Cart;