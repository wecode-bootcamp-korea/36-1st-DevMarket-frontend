import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './DetailPage.scss';

function DetailPage() {
  return (
    <div className="mainWrap">
      <section className="innerContainer">
        <div className="leftCol">
          <section className="productImg">
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
          <div className="sellerInfoWrap">
            <h2>판매자 정보</h2>
            <div className="sellerInfo">
              <ul>
                <li>판매자 이름</li>
                <li>정원호</li>
              </ul>
              <ul>
                <li>전화번호</li>
                <li>010-1234-5678</li>
              </ul>
              <ul>
                <li>이메일</li>
                <li>cwonho16@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="sellerInfoWrap">
            <h2>안내사항</h2>
            <div className="sellerInfo">
              <ul>
                <li>판매자 이름</li>
                <li>정원호</li>
              </ul>
              <ul>
                <li>전화번호</li>
                <li>010-1234-5678</li>
              </ul>
              <ul>
                <li>이메일</li>
                <li>cwonho16@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="rightCol">
          <section className="sectionTop">
            <h1 className="productName">[든든] 오리 장난감</h1>
            <div className="shipCard">
              <div className="innerCard">
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
          <section className="sectionBottom">
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
              <div className="costInfoRight">
                <span>1kg 당 900원 / 1ea</span>
                <div className="rightBottom">
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
      <div className="recentViews">
        <h2>최근 본 상품</h2>
        <div className="numberOfViews">4</div>
        <div className="itemList">
          <button>
            <FontAwesomeIcon icon={faAngleUp} />
          </button>
          <div className="itemBox">
            <ul>
              <li>
                <img src="./images/duck.jpg" alt="duck" />
              </li>
              <li>
                <img src="./images/duck.jpg" alt="duck" />
              </li>
              <li>
                <img src="./images/duck.jpg" alt="duck" />
              </li>
              <li>
                <img src="./images/duck.jpg" alt="duck" />
              </li>
            </ul>
          </div>
          <button>
            <FontAwesomeIcon icon={faAngleDown} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
