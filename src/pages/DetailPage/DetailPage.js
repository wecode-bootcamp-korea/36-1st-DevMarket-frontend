import React from 'react';
import './DetailPage.scss';

function DetailPage() {
  return (
    <div className="main-wrap">
      <div className="top-margin">
        <section className="inner-container">
          <div className="left-col">
            <section className="product-img">
              <div />
              <img src="./images/coffee.jpg" alt="coffee" />
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
              <h1 className="product-name">[든든] 스타벅스 커피 1kg</h1>
              <div className="ship-card">
                <div className="inner-card">
                  <p>든든배송</p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DetailPage;
