import React from 'react';
import './style.css';
import { useStore } from './store';

function CartProduct({ id, title, price, quantity }) {
  const { addProduct, removeProduct, removeOne } = useStore();

  const handleRemove = () => {
    const product = { id, price, quantity };
    removeProduct(product);
  };

  const handleAdd = () => {
    const product = { id, title, price };
    addProduct(product);
  };

  const handleRemoveOne = () => {
    const product = { id, price, quantity };
    removeOne(product);
  };

  return (
    <div className="cart-product flex justify-around py-2.5 bg-white my-1.5">
      <h4 className="product-title m-2.5">{title}</h4>
      <p className="product-text m-2.5">Price: ${price}</p>
      <button className="bg-white border border-black py-1.5 px-3 rounded-lg m-2.5" onClick={handleRemoveOne}>
        -
      </button>
      <p className="product-amount m-2.5">{quantity}</p>
      <button className="bg-green-400 py-1.5 px-3 rounded-lg m-2.5" onClick={handleAdd}>
        +
      </button>
      <button className="bg-red-600 py-1.5 px-2 rounded-lg m-2.5" onClick={handleRemove}>
        Delete
      </button>
    </div>
  );
}

export default CartProduct;

