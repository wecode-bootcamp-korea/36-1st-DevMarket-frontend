import React, { useState } from 'react';
import './OrderForm.scss';

const OrderForm = () => {
  const [totalCount, setTotalcount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  return (
    <div className="orderForm">
      <div className="address">
        <p>배송지를 등록해주세요</p>
        <button>등록</button>
      </div>
      <div className="orderInfo">
        <div className="productPrice">
          <p>배송 상품금액</p>
          <p>100,000원</p>
        </div>
        <div className="delivery">
          <p>배송비</p>
          <p>+ 0원</p>
        </div>
        <div className="middleLine"></div>
        <div className="total">
          <p>예상 주문금액</p>
          <p className="totalPriceText">100,000원</p>
        </div>
        <div className="middleLine"></div>
      </div>
      <div className="orderBtnBox">
        <div className="orderBtn">
          총 {totalCount}건 주문하기({totalPrice}원)
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
