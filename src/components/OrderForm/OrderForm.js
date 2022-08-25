import React, { useEffect } from 'react';
import './OrderForm.scss';

const OrderForm = ({
  deliveryPrice,
  product,
  checkedProductTotal,
  setDeliveryPrice,
  checkedArr,
}) => {
  useEffect(() => {
    setDeliveryPrice(
      checkedProductTotal >= 50000 ? 0 : checkedProductTotal <= 0 ? 0 : 5000
    );
  }, [checkedProductTotal]);

  return (
    <div className="orderForm">
      <div className="address">
        <p>더 다양한 상품을 만나보세요</p>
        <button>이동</button>
      </div>
      <div className="orderInfo">
        <div className="productPrice">
          <p>배송 상품금액</p>
          <p>{Number(checkedProductTotal).toLocaleString()}</p>
        </div>
        <div className="delivery">
          <p>배송비</p>
          <p>+ {Number(deliveryPrice).toLocaleString()}원</p>
        </div>
        <div className="middleLine"></div>
        <div className="total">
          <p>예상 주문금액</p>
          <p className="totalPriceText">
            {Number(checkedProductTotal + deliveryPrice).toLocaleString()}원
          </p>
        </div>
        <div className="middleLine"></div>
      </div>
      <div className="orderBtnBox">
        <button
          className="orderBtn"
          disabled={checkedProductTotal <= 0 ? true : false}
        >
          총 {checkedArr.length}건 주문하기(
          {Number(checkedProductTotal + deliveryPrice).toLocaleString()}
          원)
        </button>
      </div>
    </div>
  );
};

export default OrderForm;
