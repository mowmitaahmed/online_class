import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;

    // Total Price Calculation
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        total = total + course.price;
        
    }
    
    // Show only two number after decimal
    const grandTotal = total.toFixed(2);
    return (
        <div className="single_cart">
            <h4 className="text-center">Cart</h4>
            <h6>Course Count: {cart.length}</h6>
            <h6>Total Price: ${grandTotal}</h6>
        </div>
    );
};

export default Cart;