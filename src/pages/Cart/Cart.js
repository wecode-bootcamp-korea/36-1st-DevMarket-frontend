import React, { useState, useEffect } from 'react';
import CartProduct from '../../components/CartProduct/CartProduct';
import OrderForm from '../../components/OrderForm/OrderForm';
import './Cart.scss';

function Cart() {
  const [product, setProduct] = useState([]);

  const [count, setCount] = useState(1);
  const plusCount = () => {
    setCount(count => count + 1);
  };
  const minusCount = () => {
    setCount(count => count - 1);
    return count <= 1 ? setCount(1) : null;
  };

  useEffect(() => {
    fetch('./data/cartProduct.json')
      .then(response => response.json())
      .then(result => setProduct(result));
  }, []);
  return (
    <div className="cart">
      <div className="cartTitle">
        <h1>장바구니</h1>
      </div>
      <div className="cart2Box">
        <div className="box1">
          <div className="box1Top">
            <div className="box1TopLeft">
              <input type="checkbox" className="checkBox" />
              <p className="checkText">전체선택</p>
            </div>
            <button className="cancelBtn">선택 삭제</button>
          </div>
          <div className="box1Bottom">
            {product.map(product => (
              <CartProduct
                product={product}
                key={product.id}
                count={count}
                plusCount={plusCount}
                minusCount={minusCount}
                id={product.id}
              />
            ))}
          </div>
        </div>
        <OrderForm />
      </div>
      <div className="totalPrice">
        <div className="totalTop">
          <p>상품금액 {10000 * count}원 + 배송비 0원 =&nbsp; </p>
          <p className="totalPriceSmall">총 {10000 * count}원</p>
        </div>
        <div className="totalBottom">든든배송 상품 추가하기</div>
      </div>
    </div>
  );
}

export default Cart;
