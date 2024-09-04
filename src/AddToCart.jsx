import React, { useState, useEffect } from 'react';
import "./App.css";

function AddToCart({ cart }) {
  return (
    
      <div className="cart">
        <h2>Cart Items</h2>
        {cart.length > 0 ? (
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <h3>{item.title}</h3>
                <img src={item.image} alt={item.title} className="cart-item-image" />
              </div>
            ))}
          </div>
        ) : (
          <p>No items in the cart</p>
        )}
      </div>
  );
}

export default AddToCart;
