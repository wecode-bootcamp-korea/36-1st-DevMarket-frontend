import React from 'react';
import './Product.scss';

const Product = ({ pork, price, image }) => {
  return (
    <div className="productContainer">
      <div className="imageContainer">
        <img src="/images/List/pork.jpg" alt="pork" />
      </div>
      <div className="productDescription">
        <p className="name">항정살</p>
        <p>1kg</p>
        <p className="cost">10,000원</p>
      </div>
    </div>
  );
};
export default Product;
