import React from 'react';
import './OrderForm.scss';

const OrderForm = ({
  total,
  deliveryPrice,
  product,
  productTotal,
  validation,
}) => {
  return (
    <div className="orderForm">
      <div className="address">
        <p>배송지를 등록해주세요</p>
        <button>등록</button>
      </div>
      <div className="orderInfo">
        <div className="productPrice">
          <p>배송 상품금액</p>
          <p>{productTotal + total}</p>
        </div>
        <div className="delivery">
          <p>배송비</p>
          <p>+ {deliveryPrice}원</p>
        </div>
        <div className="middleLine"></div>
        <div className="total">
          <p>예상 주문금액</p>
          <p className="totalPriceText">
            {productTotal + total + deliveryPrice}원
          </p>
        </div>
        <div className="middleLine"></div>
      </div>
      <div className="orderBtnBox">
        <button className="orderBtn" disabled={validation}>
          총 {product.length}건 주문하기({productTotal + total + deliveryPrice}
          원)
        </button>
      </div>
    </div>
  );
};

export default OrderForm;
