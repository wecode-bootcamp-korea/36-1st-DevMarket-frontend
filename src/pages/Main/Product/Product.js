import React from 'react';
import './Product.scss';

const Product = ({ productInfo }) => {
  const process = parseInt(productInfo.price.split('.')[0], 10);
  const changePrice = process.toLocaleString();
  return (
    <div className="productContainer">
      <div className="imageContainer">
        <img src={productInfo.image} alt="pork" />
      </div>
      <div className="productDescription">
        <p className="name">{productInfo.name}</p>
        <p className="weight">{productInfo.weight}kg</p>
        <p className="cost">{changePrice}원</p>
      </div>
    </div>
  );
};
export default Product;
