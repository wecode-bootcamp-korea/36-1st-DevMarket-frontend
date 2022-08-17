import React from 'react';
import './Product.scss';

const Product = ({ pork, price, image }) => {
  return (
    <div className="productContainer">
      <div className="imageContainer">
        <img src={image} alt="pork" />
      </div>
      <div className="productDescription">
        <p className="name">{pork}</p>
        <p>1kg</p>
        <p className="cost">{price}</p>
      </div>
    </div>
  );
};
export default Product;
