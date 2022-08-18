import React from 'react';
import './Product.scss';

const Product = ({ name, weight, price, image }) => {
  return (
    <div className="productContainer">
      <div className="imageContainer">
        <img src={image} alt="pork" />
      </div>
      <div className="productDescription">
        <p className="name">{name}</p>
        <p>{weight}</p>
        <p className="cost">{price}</p>
      </div>
    </div>
  );
};
export default Product;
