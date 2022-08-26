import React, { useState, useEffect } from 'react';
import CartProduct from '../../components/CartProduct/CartProduct';
import OrderForm from '../../components/OrderForm/OrderForm';
import TotalPrice from '../../components/TotalPrice/TotalPrice';
import './Cart.scss';

function Cart() {
  const [product, setProduct] = useState([]);
  const [checkedArr, setCheckedArr] = useState([]);
  const [countArr, setCountArr] = useState([]);
  const [deliveryPrice, setDeliveryPrice] = useState(5000);
  const [freeDelivery, setFreeDelivery] = useState(0);
  const [checkedPriceList, setCheckedPriceList] = useState([]);
  const [checkedProductTotal, setCheckedProductTotal] = useState(0);

  useEffect(() => {
    fetch('http://10.58.0.245:3000/cart/list', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjksInVzZXJOYW1lIjoic2ltb24wMDAwIiwiaWF0IjoxNjYxNDc2MzYyLCJleHAiOjE2NjQwNjgzNjJ9.zcVWGCFZzeEYwVgwKO74kc9sMwOC3blkQy6WOxU9itg',
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
      return fetch('http://10.58.0.245:3000/cart', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjksInVzZXJOYW1lIjoic2ltb24wMDAwIiwiaWF0IjoxNjYxNDc2MzYyLCJleHAiOjE2NjQwNjgzNjJ9.zcVWGCFZzeEYwVgwKO74kc9sMwOC3blkQy6WOxU9itg',
        },
        body: JSON.stringify({
          productId: item.product_id,
        }),
      });
    });
  };

  useEffect(() => {
    setFreeDelivery(
      50000 - checkedProductTotal <= 0
        ? '무료배송'
        : `${(
            50000 - checkedProductTotal
          ).toLocaleString()}원 추가 구매시 무료배송`
    );
  });

  useEffect(() => {
    setCheckedPriceList(
      checkedArr.map(checkedArr => {
        return checkedArr.price * checkedArr.amount;
      })
    );
  }, [checkedArr, countArr]);

  useEffect(() => {
    setCheckedProductTotal(
      checkedPriceList.reduce((acc, cur) => {
        return (acc += cur);
      }, 0)
    );
  }, [checkedPriceList]);

  const singlePriceHandle = (newAmount, idx) => {
    let newProductArray = [...product];
    let newCheckedArray = [...checkedArr];
    newProductArray[idx].amount = newAmount;
    newCheckedArray[idx].amount = newAmount;
    setCheckedArr(newCheckedArray);
    setProduct(newProductArray);
    setCountArr(newCheckedArray);
  };

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
                <p className="checkText">{freeDelivery}</p>
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
          checkedProductTotal={checkedProductTotal}
          checkedArr={checkedArr}
        />
      </div>
    </div>
  );
}

export default Cart;
