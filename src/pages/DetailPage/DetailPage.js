import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './DetailPage.scss';

function DetailPage() {
  return (
    <div className="main-wrap">
      <section className="inner-container">
        <div className="left-col">
          <section className="product-img">
            <div />
            <img src="./images/duck.jpg" alt="coffee" />
          </section>
          <div className="productDetailWrap">
            <div className="detailNavBar">
              <div className="navTab">
                <span>상품 상세</span>
              </div>
              <div className="navTab">
                <span>상품 후기 (207)</span>
              </div>
              <div className="navTab">
                <span>1:1 문의</span>
              </div>
            </div>
            <div className="productDetail">
              <img src="./images/detail.jpg" alt="detail" />
            </div>
          </div>
        </div>
        <div className="right-col">
          <section className="section-top">
            <h1 className="product-name">[든든] 오리 장난감</h1>
            <div className="ship-card">
              <div className="inner-card">
                <div className="productInfo">
                  <ul>
                    <li>중량</li>
                    <li>5.5kg</li>
                  </ul>
                </div>
                <div className="productInfo">
                  <ul>
                    <li>제공 수량</li>
                    <li>1ea</li>
                  </ul>
                </div>
                <div className="productInfo">
                  <ul>
                    <li>기준 단가</li>
                    <li>1kg 당 900원</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="section-bottom">
            <div className="quantityUI">
              <span>주문수량</span>
              <div className="quantityBar">
                <button className="handleQuantity">
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <input value="1" />
                <button className="handleQuantity">
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
            <div className="costInfo">
              <span>총 합계금액</span>
              <div className="costInfo-right">
                <span>1kg 당 900원 / 1ea</span>
                <div className="right-bottom">
                  <span className="discount">4%</span>
                  <span className="cost">44,550원</span>
                </div>
                <span className="discountPrice">46,800원</span>
              </div>
            </div>
            <div className="orderButtons">
              <button className="addCart">장바구니 담기</button>
              <button className="buyItem">바로구매</button>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default DetailPage;
