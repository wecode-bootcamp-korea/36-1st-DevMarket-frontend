import { logDOM } from '@testing-library/react';
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

  const [deliveryPrice, setDeliveryPrice] = useState(5000);

  const removeProduct = id => {
    setProduct(
      product.filter(product => {
        return product.id !== id;
      })
    );
    setCheckedArr(
      checkedArr.filter(check => {
        return check.id !== id;
      })
    );
  };

  const checkedPriceList = checkedArr.map(product => {
    return product.price;
  });
  console.log(checkedArr);
  const checkedProductTotal = checkedPriceList.reduce((acc, cur) => {
    return (acc += cur);
  }, 0);

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

    let removeCheckedProducts;
    id.forEach(
      item =>
        (removeCheckedProducts = product.filter(product => product.id !== item))
    );
    id.forEach(
      item =>
        (removeCheckedProducts = removeCheckedProducts.filter(
          removeCheckedProducts => removeCheckedProducts.id !== item
        ))
    );
    setCheckedArr(removeCheckedProducts);
  };

  const singlePriceHandle = (
    productDetail,
    checkedArrDetail,
    newPrice,
    idx
  ) => {
    console.log(newPrice);
    console.log(productDetail);
    console.log('checkedArrDetail:', checkedArrDetail);
    console.log('idx:', idx);
    return (
      setProduct([...product[idx], { ...productDetail, price: newPrice }]),
      setCheckedArr([...checkedArr, { price: newPrice }])
    );
  };
  const [allCheckB, setAllCheckB] = useState(true);

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
                <input
                  type="checkbox"
                  className="checkBox"
                  checked={allCheckB}
                  onClick={() => {
                    setAllCheckB(
                      product.length === checkedArr.length ? true : false
                    );
                  }}
                  // checked={product.length === checkedArr.length ? true : false}
                  // onClick={e => {
                  //   setAllCheckB(e.target.checked);
                  // }}
                />
                <p className="checkText">전체선택</p>
              </div>
              <button
                className="cancelBtn"
                onClick={() => removeChild(checkedId)}
                disabled={checkedProductTotal <= 0 ? true : false}
              >
                선택 삭제
              </button>
            </div>

            {product.map((product, idx) => (
              <CartProduct
                product={product}
                setProduct={setProduct}
                key={product.id}
                idx={idx}
                removeProduct={removeProduct}
                childCheckRemove={childCheckRemove}
                setCheckedArr={setCheckedArr}
                checkedArr={checkedArr}
                singlePriceHandle={singlePriceHandle}
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
          setDeliveryPrice={setDeliveryPrice}
          product={product}
          checkedProductTotal={checkedProductTotal}
        />
      </div>
    </div>
  );
}

export default Cart;
