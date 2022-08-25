import React, { useState, useEffect } from 'react';
import CartProduct from '../../components/CartProduct/CartProduct';
import OrderForm from '../../components/OrderForm/OrderForm';
import TotalPrice from '../../components/TotalPrice/TotalPrice';
import './Cart.scss';

function Cart() {
  const [product, setProduct] = useState([]);
  const [checkedArr, setCheckedArr] = useState([]);
  const [deliveryPrice, setDeliveryPrice] = useState(5000);
  const [allCheckB, setAllCheckB] = useState(true);
  // http://10.58.5.164:3000/cart/list
  // '/data/cartProduct.json'
  useEffect(() => {
    fetch('http://10.58.5.164:3000/cart/list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjYsInVzZXJOYW1lIjoiY3dvbmhvMTYiLCJpYXQiOjE2NjE0MDQzNDEsImV4cCI6MTY2Mzk5NjM0MX0.Noi_H2uXk6FhUUJJjiL1WL7HVcMAe9-SewYa-oxwnWc',
      },
    })
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

  const checkedDeleteHandler = () => {
    checkedArr.forEach(item => {
      return fetch('http://10.58.5.164:3000/cart', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjYsInVzZXJOYW1lIjoiY3dvbmhvMTYiLCJpYXQiOjE2NjE0MDQzNDEsImV4cCI6MTY2Mzk5NjM0MX0.Noi_H2uXk6FhUUJJjiL1WL7HVcMAe9-SewYa-oxwnWc',
        },
        body: JSON.stringify({
          productId: item.product_id,
        }),
      });
    });
  };

  const singlePriceHandle = (newAmount, idx) => {
    let newProductArray = [...product];
    newProductArray[idx].amount = newAmount;
    // setCheckedArr(newProductArray);
    setProduct(newProductArray);
  };
  // setCheckedArr(newProductArray)
  // setProduct(newProductArray),
  const removeProduct = id => {
    setProduct(
      product.filter(product => {
        return product.product_id !== id;
      })
    );
    setCheckedArr(
      checkedArr.filter(check => {
        return check.product_id !== id;
      })
    );
  };

  const [checkedPriceList, setCheckedPriceList] = useState([]);
  const [checkedProductTotal, setCheckedProductTotal] = useState(0);
  useEffect(() => {
    setCheckedPriceList(
      checkedArr.map(checkedArr => {
        return checkedArr.price * checkedArr.amount;
      })
    );
  }, [checkedArr]);

  useEffect(() => {
    setCheckedProductTotal(
      checkedPriceList.reduce((acc, cur) => {
        return (acc += cur);
      }, 0)
    );
  }, [checkedPriceList]);

  console.log(checkedProductTotal);

  const childCheckRemove = (productDetail, checked) => {
    checked
      ? setCheckedArr([...checkedArr, { ...productDetail, checked: checked }])
      : setCheckedArr(
          checkedArr.filter(check => {
            return check.product_id !== productDetail.product_id;
          })
        );
  };

  const checkedId = checkedArr.map(item => {
    return item.product_id;
  });

  const removeChild = id => {
    let removeProducts;
    id.forEach(
      item =>
        (removeProducts = product.filter(
          product => product.product_id !== item
        ))
    );
    id.forEach(
      item =>
        (removeProducts = removeProducts.filter(
          removeProducts => removeProducts.product_id !== item
        ))
    );
    setProduct(removeProducts);

    let removeCheckedProducts;
    id.forEach(
      item =>
        (removeCheckedProducts = product.filter(
          product => product.product_id !== item
        ))
    );
    id.forEach(
      item =>
        (removeCheckedProducts = removeCheckedProducts.filter(
          removeCheckedProducts => removeCheckedProducts.product_id !== item
        ))
    );
    setCheckedArr(removeCheckedProducts);
  };

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
                  onChange={() => {
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
                onClick={() => {
                  removeChild(checkedId);
                  checkedDeleteHandler();
                }}
                disabled={checkedProductTotal <= 0 ? true : false}
              >
                선택 삭제
              </button>
            </div>

            {product.map((product, idx) => (
              <CartProduct
                product={product}
                setProduct={setProduct}
                key={product.product_id}
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
          checkedArr={checkedArr}
        />
      </div>
    </div>
  );
}

export default Cart;
