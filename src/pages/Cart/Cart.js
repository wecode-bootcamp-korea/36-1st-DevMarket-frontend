import React, { useState, useEffect } from 'react';
import CartProduct from '../../components/CartProduct/CartProduct';
import OrderForm from '../../components/OrderForm/OrderForm';
import TotalPrice from '../../components/TotalPrice/TotalPrice';
import './Cart.scss';

function Cart() {
  const [product, setProduct] = useState([]);
  const [checkedArr, setCheckedArr] = useState([]);
  useEffect(() => {
    fetch('/data/cartProduct.json')
      .then(response => response.json())
      .then(result => {
        setProduct(result);
        setCheckedArr(
          result.map(item => {
            return { ...item, checked: true };
          })
        );
      });
  }, []);
  const lastTotalPrice = product.map(item => {
    return item.price;
  });
  const productTotal = lastTotalPrice.reduce((acc, cur) => {
    return (acc += cur);
  }, 0);
  const [total, setTotal] = useState(productTotal);
  const [deliveryPrice, setDeliveryPrice] = useState(5000);

  const removeProduct = id => {
    setProduct(
      product.filter(product => {
        return product.id !== id;
      })
    );
  };

  const checkedPriceList = checkedArr.map(product => {
    return product.price;
  });

  const checkedProductTotal = checkedPriceList.reduce((acc, cur) => {
    return (acc += cur);
  }, 0);
  console.log(checkedProductTotal);
  const childCheckRemove = (productDetail, checked) => {
    checked
      ? setCheckedArr([...checkedArr, { ...productDetail, checked: checked }])
      : setCheckedArr(
          checkedArr.filter(check => {
            return check.id !== productDetail.id;
          })
        );
  };

  const checkedId = checkedArr.map(item => {
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

  console.log(checkedProductTotal);

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
                key={product.id}
                id={product.id}
                product={product}
                removeProduct={removeProduct}
                childCheckRemove={childCheckRemove}
              />
            ))}
          </div>
          <TotalPrice
            deliveryPrice={deliveryPrice}
            product={product}
            checkedProductTotal={checkedProductTotal}
          />
        </div>

        <OrderForm
          deliveryPrice={deliveryPrice}
          product={product}
          checkedProductTotal={checkedProductTotal}
        />
      </div>
    </div>
  );
}

export default Cart;
