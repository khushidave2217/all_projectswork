import React, { useEffect, useState } from 'react';
import './Cart.css';

const Cart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

 
  const handleRemove = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items added.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <h4>{item.name}</h4>
              <p>${item.price}</p>
              <button className="remove-btn" onClick={() => handleRemove(index)}>
                Remove
              </button>
            </div>
          ))}

          <div className="cart-total">
            <h3>
              Total: $
              {cart
                .reduce((total, item) => total + Number(item.price), 0)
                .toFixed(2)}
            </h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
