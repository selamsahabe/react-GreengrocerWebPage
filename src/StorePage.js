import React from 'react';
import './style.css';

import ProductCard from './ProductCard';
import { storeProducts } from './products.js';

function StorePage() {
  const list = storeProducts.filter((item) => item.onStock);

  return (
    <div className="store-page flex py-16	px-2.5 bg-purple-300 ">
      <div className="store-page flex flex-wrap gap-4 justify-around bg-purple-300 ">
        {list.map((item) => (
          <ProductCard
            key={item.id}
            img={item.img}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default StorePage;
