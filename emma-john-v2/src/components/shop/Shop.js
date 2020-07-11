import React, { useState } from "react";
import "./Shop.css";
import fakeData from "../.././fakeData";
import Product from "../product/Product";
console.log(fakeData);

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  return (
    <div className="shop-container">
      <div className="item-container">
      <ul>
        {products.map((product) => (
          <Product item={product}></Product>
        ))}
      </ul>
      </div>

      <div className="cart-container">
        
      </div>
    </div>
  );
};

export default Shop;
