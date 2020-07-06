import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Products from '../product/Products';


const Shop = () => {
  let firstTenProduct = fakeData.slice(0, 10);
  const [products, setProducts] = useState(firstTenProduct);
  return (
    <div className='shop-container'>
      <div className="product-container">
          {
            products.map(product => <Products name={product.name
            }></Products>)
          }
      </div>

      <div className="cart-container">
        <h3>
          this is cart
        </h3>
      </div>
    </div>
  );
};

export default Shop;