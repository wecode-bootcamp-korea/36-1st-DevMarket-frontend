import React, { useState, useEffect } from 'react';
import CartProduct from '../../components/CartProduct/CartProduct';
import OrderForm from '../../components/OrderForm/OrderForm';
import TotalPrice from '../../components/TotalPrice/TotalPrice';
import './Cart.scss';

function Cart() {
  const [product, setProduct] = useState([]);
  const lastTotalPrice = product.map(item => {
    return item.price;
  });
  const productTotal = lastTotalPrice.reduce((acc, cur) => {
    return (acc += cur);
  }, 0);
  const [total, setTotal] = useState(productTotal);
  const [deliveryPrice, setDeliveryPrice] = useState(5000);

  useEffect(() => {
    fetch('/data/cartProduct.json')
      .then(response => response.json())
      .then(result => setProduct(result));
  }, []);

  const removeProduct = id => {
    setProduct(
      product.filter(product => {
        return product.id !== id;
      })
    );
  };

  const [checkedObj, setCheckedObj] = useState([]);
  const childCheck = (productDetail, checked) => {
    checked
      ? setCheckedObj([
          ...checkedObj,
          { id: productDetail.id, checked: checked },
        ])
      : setCheckedObj(
          checkedObj.filter(check => {
            return check.id !== productDetail.id;
          })
        );
  };
  console.log(checkedObj);
  const checkedId = checkedObj.map(item => {
    return item.id;
  });

  const removeChild = id => {
    let removeProducts;
    id.forEach(
      item => (removeProducts = product.filter(product => product.id !== item))
    );
    id.forEach(
      item =>
        (removeProducts = removeProducts.filter(
          removeProducts => removeProducts.id !== item
        ))
    );
    setProduct(removeProducts);
  };

  // console.log(checkedId);
  return (
    <div className="cart">
      <div className="cartTitle">
        <h1>장바구니</h1>
      </div>
      <div className="cartBoxAll">
        <div className="cart2Box">
          <div className="box1">
            <div className="box1Top">
              <div className="box1TopLeft">
                <input type="checkbox" className="checkBox" />
                <p className="checkText">전체선택</p>
              </div>
              <button
                className="cancelBtn"
                onClick={() => removeChild(checkedId)}
              >
                선택 삭제
              </button>
            </div>

            {product.map(product => (
              <CartProduct
                product={product}
                setTotal={setTotal}
                key={product.id}
                id={product.id}
                removeProduct={removeProduct}
                childCheck={childCheck}
              />
            ))}
          </div>
          <TotalPrice
            total={total}
            deliveryPrice={deliveryPrice}
            setTotal={setTotal}
            product={product}
            productTotal={productTotal}
          />
        </div>

        <OrderForm
          total={total}
          deliveryPrice={deliveryPrice}
          product={product}
          productTotal={productTotal}
        />
      </div>
    </div>
  );
}

export default Cart;
