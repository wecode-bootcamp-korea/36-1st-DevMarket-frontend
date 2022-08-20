import React from 'react';
import './Product.scss';

const Product = ({ productInfo }) => {
  return (
    <div className="productContainer">
      <div className="imageContainer">
        <img src={productInfo.image} alt="pork" />
      </div>
      <div className="productDescription">
        <p className="name">{productInfo.name}</p>
        <p>{productInfo.weight}</p>
        <p className="cost">{productInfo.price}</p>
      </div>
    </div>
  );
};
export default Product;
