import React from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';

const Product = ({ productInfo }) => {
  const process = parseInt(productInfo.price.split('.')[0], 10);
  const changePrice = process.toLocaleString();
  return (
    <div className="productContainer">
      <div className="imageContainer">
        <img src={productInfo.image} alt="이미지" />
      </div>
      <div className="productDescription">
        <Link to={`/detail/${productInfo.id}`} className="linkStyle">
          <p className="name">{productInfo.name}</p>
          <p className="weight">{productInfo.weight}kg</p>
          <p className="cost">{changePrice}원</p>
        </Link>
      </div>
    </div>
  );
};
export default Product;
