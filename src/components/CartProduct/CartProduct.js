import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CartProduct.scss';

const CartProduct = ({
  product,
  idx,
  removeProduct,
  childCheckRemove,
  singlePriceHandle,
}) => {
  const [amount, setAmount] = useState(product.amount);
  const [checkBoolean, setCheckBoolean] = useState(true);

  const total = product.price * amount;

  const minusCount = () => {
    setAmount(amount => amount - 1);
  };

  const plusCount = () => {
    setAmount(amount => amount + 1);
  };

  const disableBtn = check => {
    return check ? false : true;
  };

  const validation = amount => {
    return amount > 1 ? false : true;
  };

  useEffect(() => {
    singlePriceHandle(amount, idx);
  }, [amount]);

  const minusHandler = () => {
    fetch('http://10.58.5.164:3000/cart/amount', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjYsInVzZXJOYW1lIjoiY3dvbmhvMTYiLCJpYXQiOjE2NjE0MjA0MzEsImV4cCI6MTY2NDAxMjQzMX0.NFV1gYxrp4W5VlqQpL5dzB17mjLbLgm11SKtkavsqAI',
      },
      body: JSON.stringify({
        amount: -1,
        productId: product.product_id,
      }),
    });
  };

  const plusHandler = () => {
    fetch('http://10.58.5.164:3000/cart/amount', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjYsInVzZXJOYW1lIjoiY3dvbmhvMTYiLCJpYXQiOjE2NjE0MjA0MzEsImV4cCI6MTY2NDAxMjQzMX0.NFV1gYxrp4W5VlqQpL5dzB17mjLbLgm11SKtkavsqAI',
      },
      body: JSON.stringify({
        amount: +1,
        productId: product.product_id,
      }),
    });
  };

  const singleDeleteHandler = () => {
    fetch('http://10.58.5.164:3000/cart', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjYsInVzZXJOYW1lIjoiY3dvbmhvMTYiLCJpYXQiOjE2NjE0MjA0MzEsImV4cCI6MTY2NDAxMjQzMX0.NFV1gYxrp4W5VlqQpL5dzB17mjLbLgm11SKtkavsqAI',
      },
      body: JSON.stringify({
        productId: product.product_id,
      }),
    });
  };

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
        <img src={product.image} alt="" />
      </div>
      <div className="productInfo">
        <div className="pInfo1">
          <p>{product.name}</p>
          <Link to={`./detail/${product.product_id}`}>
            <div className="moveDetail">상세보기</div>
          </Link>
        </div>

        <div className="pInfo2">
          <div className="countBar">
            <button
              className="minus"
              onClick={() => {
                minusCount();
                minusHandler();
              }}
              disabled={(disableBtn(checkBoolean), validation(amount))}
            >
              –
            </button>
            <div className="numCount">{product.amount}</div>
            <button
              className="plus"
              onClick={() => {
                plusCount();
                plusHandler();
              }}
              disabled={disableBtn(checkBoolean)}
            >
              ﹢
            </button>
          </div>
          <div className="priceBox">
            <p>{Number(total).toLocaleString()}원</p>
            <button
              className="cancelBtn"
              onClick={() => {
                removeProduct(product.product_id);
                singleDeleteHandler();
              }}
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
