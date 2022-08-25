import React from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';

const Product = ({ productInfo }) => {
  const process = parseInt(productInfo.price.split('.')[0], 10);
  const changePrice = process.toLocaleString();
  return (
    <div className="productContainer">
      <Link to={`/detail/${productInfo.id}`} className="linkStyle">
        <div className="imageContainer">
          <img src={productInfo.image} alt="이미지" />
        </div>
        <div className="productDescription">
          <p className="name">{productInfo.name}</p>
          <p className="weight">{productInfo.weight}kg</p>
          <p className="cost">{changePrice}원</p>
        </div>
      </Link>
    </div>
  );
};
export default Product;
