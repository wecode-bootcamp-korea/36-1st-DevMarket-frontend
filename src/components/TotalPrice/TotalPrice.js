import React from 'react';
import './TotalPrice.scss';

const TotalPrice = ({ deliveryPrice, checkedProductTotal }) => {
  return (
    <div
      className="totalPrice"
      style={{ display: `${checkedProductTotal <= 0 ? 'none' : 'block'}` }}
    >
      <div className="totalTop">
        <p>
          상품금액 {Number(checkedProductTotal).toLocaleString()}원 + 배송비
          {Number(deliveryPrice).toLocaleString()}원 =&nbsp;
        </p>
        <p className="totalPriceSmall">
          총 {Number(checkedProductTotal + deliveryPrice).toLocaleString()}원
        </p>
      </div>
      <div className="totalBottom">개발상회 상품 추가하기</div>
    </div>
  );
};

export default TotalPrice;
