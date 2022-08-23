import React, { useState } from 'react';
import './CartProduct.scss';

const CartProduct = ({ product, removeProduct, childCheckRemove }) => {
  const [count, setCount] = useState(1);
  const minusCount = () => {
    setCount(count => count - 1);
  };
  const plusCount = () => {
    setCount(count => count + 1);
  };
  const validation = count => {
    return count > 1 ? false : true;
  };

  const [checkBoolean, setCheckBoolean] = useState(true);
  return (
    <div className="cartProduct">
      <input
        type="checkbox"
        className="checkBox"
        checked={checkBoolean}
        onChange={e => {
          childCheckRemove(product, e.target.checked);
          setCheckBoolean(e.target.checked);
        }}
      />
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
            <button
              className="minus"
              onClick={minusCount}
              disabled={validation(count)}
            >
              –
            </button>
            <div className="numCount">{count}</div>
            <button className="plus" onClick={plusCount}>
              ﹢
            </button>
          </div>
          <div className="priceBox">
            <p>원</p>
            <button
              className="cancelBtn"
              onClick={() => removeProduct(product.id)}
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
