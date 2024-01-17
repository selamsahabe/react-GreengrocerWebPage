import React from 'react';
import './style.css';
import { useStore } from './store';

function Navbar() {
  const { cart, openModal, clearCart } = useStore();

  return (
    <nav className="bg-indigo-200 py-2.5 pl-4 border border-black bg-gray-200">
      <div className="flex gap-3">
        <button className="bg-blue-600 py-3 px-2 rounded-lg" onClick={openModal}>
          Cart ({cart.length})
        </button>
        <button className="bg-red-600 py-3 px-2 rounded-lg" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
