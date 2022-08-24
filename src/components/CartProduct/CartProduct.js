import React, { useState, useEffect } from 'react';
import './CartProduct.scss';

const CartProduct = ({
  product,
  idx,
  setProduct,
  removeProduct,
  childCheckRemove,
  checkedArr,
  setCheckedArr,
  singlePriceHandle,
}) => {
  const [count, setCount] = useState(1);
  const total = product.price * count;

  const minusCount = () => {
    setCount(count => count - 1);
  };

  const plusCount = () => {
    setCount(count => count + 1);
  };

  const validation = count => {
    return count > 1 ? false : true;
  };

  useEffect(() => {
    singlePriceHandle(product, checkedArr, count, idx);
  }, [count]);

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
        <img src={product.img} alt="" />
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
              onClick={() => {
                minusCount();
              }}
              disabled={validation(count)}
            >
              –
            </button>
            <div className="numCount">{count}</div>
            <button
              className="plus"
              onClick={() => {
                plusCount();
              }}
            >
              ﹢
            </button>
          </div>
          <div className="priceBox">
            <p>{total}원</p>
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
