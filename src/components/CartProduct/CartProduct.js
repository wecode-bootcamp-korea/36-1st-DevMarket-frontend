import React, { useState } from 'react';
import './CartProduct.scss';

const CartProduct = ({
  product,
  id,
  setProduct,
  removeProduct,
  childCheckRemove,
  checkedArr,
  setCheckedArr,
  singlePriceHandle,
}) => {
  const [count, setCount] = useState(1);
  const minusCount = () => {
    setCount(count => count - 1);
  };
  const [total, setTotal] = useState(product.price);
  const plusCount = () => {
    setCount(count => count + 1);
    setTotal(num => (num += product.price * count));
  };
  const validation = count => {
    return count > 1 ? false : true;
  };

  const [checkBoolean, setCheckBoolean] = useState(true);
  // console.log(total);
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
              onClick={() => {
                minusCount();
                // singlePriceHandle();
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
                singlePriceHandle(product, checkedArr, total, id);
              }}
            >
              ﹢
            </button>
          </div>
          <div className="priceBox">
            <p>{product.price * count}원</p>
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
