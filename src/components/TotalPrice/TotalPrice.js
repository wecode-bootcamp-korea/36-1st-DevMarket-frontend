import React from 'react';
import './TotalPrice.scss';

const TotalPrice = ({ total, deliveryPrice, productTotal, orderHidden }) => {
  return (
    <div className="totalPrice" style={{ display: `${orderHidden}` }}>
      <div className="totalTop">
        <p>
          상품금액 {productTotal + total}원 + 배송비
          {deliveryPrice}원 =&nbsp;
        </p>
        <p className="totalPriceSmall">
          총 {productTotal + total + deliveryPrice}원
        </p>
      </div>
      <div className="totalBottom">개발상회 상품 추가하기</div>
    </div>
  );
};

export default TotalPrice;
