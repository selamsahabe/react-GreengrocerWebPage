import React from 'react';
import './style.css';

import { useStore} from'./store';

function ProductCard({ img, title, price }) {
  const { addProduct } = useStore();

  const handleAddToCart = () => {
    const product = {
      id: Math.random(), 
      title,
      price,
    };
    addProduct(product);
  };
  return (
    <div className="product-card shadow-2xl border-2 p-4 bg-white		">
      <img className="card-img w-40  " src={img} alt="Card image cap" />
      <div className="card-block ">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-center font-bold">Price: ${price}</p>
        <button className="button-add-to-cart py-1 px-2 rounded-lg bg-green-500 border-solid  text-white" onClick={handleAddToCart}>
          Add +{' '}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
