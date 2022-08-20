import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import { useSearchParams } from 'react-router-dom';
import { BUTTON_LIST } from './uiData';
import './Main.scss';

function Main() {
  const [productList, setProductList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const offset = searchParams.get('offset');
  const limit = searchParams.get('limit');

  useEffect(() => {
    fetch(`http://10.58.7.228:3000/products/all?_start=${offset}&_limit=10`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(result => setProductList(result));
  }, [offset, limit]);
  const movePage = pageNumber => {
    searchParams.set('offset', (pageNumber - 1) * 10);
    setSearchParams(searchParams);
  };

  return (
    <div className="mainContainer">
      <div className="innerContainer">
        <div className="filterNav">
          <div>
            총 <span>20</span> 개의 상품
          </div>
          <div className="filterNavBottom">
            <div>
              <input type="checkbox" className="check" />
              <span>든든배송</span>
            </div>
            <div className="filterButtons">
              <ul className="listFrame">
                {BUTTON_LIST.map(buttonList => {
                  return (
                    <li className="list" key={buttonList.id}>
                      <button className="btnFrame">
                        {buttonList.buttonName}
                      </button>
                    </li>
                  );
                })}
              </ul>
              <button className="filterFrame">필터</button>
            </div>
          </div>
        </div>
        <section className="productList">
          {productList.map(productInfo => {
            return <Product productInfo={productInfo} key={productInfo.id} />;
          })}
        </section>
      </div>
      <div>
        <button onClick={() => movePage(1)}>1</button>
        <button onClick={() => movePage(2)}>2</button>
        <button onClick={() => movePage(3)}>3</button>
      </div>
    </div>
  );
}

export default Main;
