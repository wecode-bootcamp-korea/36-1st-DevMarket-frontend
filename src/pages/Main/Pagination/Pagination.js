import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { useSearchParams } from 'react-router-dom';
import { BUTTON_LIST } from '../uiData';
import './Pagination.scss';

function Pagination() {
  const [productList, setProductList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const offset = searchParams.get('offset');
  const limit = searchParams.get('limit');

  useEffect(() => {
    fetch(`http://10.58.2.46:3000/products/all?_start=${offset}&_limit=10`, {
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
            </div>
          </div>
        </div>
        <section className="productList">
          {productList.map(productInfo => {
            return <Product productInfo={productInfo} key={productInfo.id} />;
          })}
        </section>
      </div>
      <div className="page">
        <button onClick={() => movePage(1)} className="pageBtn">
          1
        </button>
        <button onClick={() => movePage(2)} className="pageBtn">
          2
        </button>
        <button onClick={() => movePage(3)} className="pageBtn">
          3
        </button>
        <button onClick={() => movePage(4)} className="pageBtn">
          4
        </button>
        <button onClick={() => movePage(5)} className="pageBtn">
          5
        </button>
        <button onClick={() => movePage(6)} className="pageBtn">
          6
        </button>
        <button onClick={() => movePage(7)} className="pageBtn">
          7
        </button>
      </div>
    </div>
  );
}

export default Pagination;
