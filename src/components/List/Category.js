import React, { useEffect, useState } from 'react';
import Product from '../../pages/Main/Product/Product';
import { useSearchParams } from 'react-router-dom';
import './List.scss';

import API from '../../config';

function List() {
  const [productList, setProductList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [offset, setOffset] = useState(0);
  const limit = searchParams.get('limit');
  const cate = searchParams.get('cate');
  const prod = searchParams.get('prod');

  useEffect(() => {
    fetch(`${API.list}?cate=${cate}&prod=${prod}&start=${offset}&limit=5`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(result => setProductList(result));
  }, [cate, prod, offset, limit]);

  const movePage = pageNumber => {
    const maxLimit = 30;
    const settingOffset = (pageNumber - 1) * 10;
    searchParams.set('offset', settingOffset);
    searchParams.set('limit', maxLimit);
    setOffset(settingOffset);
    setSearchParams(searchParams);
  };

  return (
    <div className="mainContainer">
      <div className="innerContainer">
        <div className="filterNav">
          <div>
            총 <span>여러</span> 개의 상품
          </div>
          <div className="filterNavBottom">
            <div>
              <input type="checkbox" className="check" />
              <span>든든배송</span>
            </div>
            <div className="filterButtons">
              <ul className="listFrame">
                <li className="list">
                  <button className="btnFrame">낮은 가격순</button>
                </li>
                <li className="list">
                  <button className="btnFrame">높은 가격순</button>
                </li>
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
        <button className="pageBtn" onClick={() => movePage(1)}>
          1
        </button>
        <button className="pageBtn" onClick={() => movePage(2)}>
          2
        </button>
      </div>
    </div>
  );
}

export default List;
