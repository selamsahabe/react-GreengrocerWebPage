import React from 'react';
import './style.css';
import { useStore } from './store';
import CartProduct from './CartProduct';

function Cart() {
  const { cart, closeModal, totalPrice } = useStore();

  return (
    <div className="cart-overlay p-1.5">
      <div className="cart border rounded-lg shadow-2xl">
        <div className="cart-top flex justify-between p-2 font-bold text-lg">
          <div>Cart</div>
          <div className="cart-top-exit rotate-45 font-bold" onClick={closeModal}>
            +
          </div>
        </div>
        {cart.map((item) => (
          <CartProduct key={item.id} 
          id={item.id} 
          title={item.title} 
          price={item.price}
          quantity={item.quantity} 
          />
        ))}

        <div className="cart-total-price flex justify-end py-2">
          Total price: <span className="font-bold text-lg">${totalPrice.toFixed(2)}</span>
        </div>
        <div className="cart-bottom flex justify-end py-2 flex gap-3">
          <button className="py-3 px-2 rounded-lg border bg-white" onClick={closeModal}>
            Close
          </button>
          <button className="py-3 px-2 border rounded-lg bg-blue-500 border  button">Order</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
