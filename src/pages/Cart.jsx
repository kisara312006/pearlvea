import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQty, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container page-wrapper empty-cart">
        <h2>Your Cart is <span className="gold-text">Empty</span></h2>
        <p>Looks like you haven't added any elegant pieces yet.</p>
        <Link to="/products" className="btn btn-primary mt-4">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="container page-wrapper cart-page">
      <h1>Shopping <span className="gold-text">Cart</span></h1>
      
      <div className="cart-content">
        <div className="cart-items">
          {cart.map(item => (
            <div key={item.id} className="cart-item glass">
              <img src={item.image} alt={item.name} className="cart-img" />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p className="gold-text">${item.price.toFixed(2)}</p>
                <div className="qty-controls">
                  <button onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))}><Minus size={14} /></button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item.id, item.qty + 1)}><Plus size={14} /></button>
                </div>
              </div>
              <div className="cart-actions">
                <p className="item-total">${(item.price * item.qty).toFixed(2)}</p>
                <button onClick={() => removeFromCart(item.id)} className="remove-btn">
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="cart-summary card-glass">
          <h2>Order <span className="gold-text">Summary</span></h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="summary-total gold-text">
            <span>Total</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <button className="btn btn-primary checkout-btn" onClick={() => alert("Checkout not fully implemented yet!")}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
