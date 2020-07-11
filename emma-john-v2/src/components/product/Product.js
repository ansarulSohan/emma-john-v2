import React from 'react';
import './product.css'

const Product = props => {
  let product = props.item;
  return ( 
    <div className="product-container">
      <div className="img-container">
        <img src={product.img} alt=""/>
      </div>

      <div className="info-container">
        <h2>{product.name}</h2>
      </div>
    </div>
  );
};

export default Product;