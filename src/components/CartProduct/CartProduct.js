import React, { useState } from 'react';
import './CartProduct.scss';

const CartProduct = ({ product, count, plusCount, minusCount }) => {
  return (
    <div className="cartProduct">
      <input type="checkbox" className="checkBox" />
      <div className="imgBorder">
        <img src={product.img} />
      </div>
      <div className="productInfo">
        <div className="pInfo1">
          <p>{product.title}</p>
          <div className="moveDetail">상세보기</div>
        </div>

        <div className="pInfo2">
          <div className="countBar">
            <button className="minus" onClick={minusCount}>
              –
            </button>
            <input value={count} className="numCount" />
            <button className="plus" onClick={plusCount}>
              ﹢
            </button>
          </div>
          <div className="priceBox">
            <p>{product.price * count}원</p>
            <button className="cancelBtn">✕</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
