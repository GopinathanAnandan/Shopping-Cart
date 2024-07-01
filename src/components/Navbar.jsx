import React from 'react';
//receives props via destructuring.
const Navbar = ({ cartCount }) => {
    return (
        <div className="navbar">
            <div className="logo">
                <h1>React Shopping Cart Task</h1>
            </div>
            <button className="cart-icon">
                <p>Cart</p> <span className="cart-count">{cartCount}</span>
            </button>
        </div>
    );
};

export default Navbar;
