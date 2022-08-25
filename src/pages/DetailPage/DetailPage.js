import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import ProductDetail from './components/ProductDetail/ProductDetail';
import ProductReview from './components/ProductReview/ProductReview';
import ProductInquiry from './components/ProductInquiry/ProductInquiry';
import MessageModal from './components/MessageModal/MessageModal';
import './DetailPage.scss';

function DetailPage() {
  const navigate = useNavigate();
  const [currentId, setCurrentId] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [messageModal, setMessageModal] = useState(false);
  const [product, setProduct] = useState({});

  const params = useParams();
  const productId = params.id;

  const handleXCart = () => {
    setMessageModal(false);
    goToCart();
  };

  useEffect(() => {
    fetch(`http://10.58.5.164:3000/products/detail/36`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then(data => setProduct(data[0]));
  }, []);

  const { amount, id, image, made_in, name, price, weight } = product;

  const handleQuantityClick = e => {
    if (e.target.id === 'minus' && quantity !== 1) {
      setQuantity(curr => curr - 1);
    } else if (e.target.id === 'plus') {
      setQuantity(curr => curr + 1);
    }
  };

  const clickHandler = id => {
    setCurrentId(id);
  };

  const goToCart = () => {
    navigate('/cart');
  };

  const onPostCart = () => {
    fetch('http://10.58.5.164:3000/products/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        userId: 4,
        productId: id,
        amount: quantity,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'PRODUCT_ADDED') {
          setMessageModal(true);
        }
      });
  };

  return (
    <div className="mainWrap">
      <section className="innerContainer">
        <div className="leftCol">
          <section className="productImg">
            <div />
            <img src={image} alt={name} />
          </section>
          <div className="productDetailWrap">
            <div className="detailNavBar">
              {TAB_ARR.map((tab, index) => {
                return (
                  <div
                    className="navTab"
                    key={tab + index}
                    onClick={() => clickHandler(index + 1)}
                  >
                    <span>{tab}</span>
                  </div>
                );
              })}
            </div>
            {MAPPING_OBJ[currentId]}
          </div>
          {currentId === 1 && (
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
          )}
          {currentId === 1 && (
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
          )}
        </div>
        <div className="rightCol">
          <section className="sectionTop">
            <h1 className="productName">{name}</h1>
            <div className="shipCard">
              <div className="innerCard">
                <div className="productInfo">
                  <ul>
                    <li>중량</li>
                    <li>{weight}kg</li>
                  </ul>
                </div>
                <div className="productInfo">
                  <ul>
                    <li>제공 수량</li>
                    <li>{amount}ea</li>
                  </ul>
                </div>
                <div className="productInfo">
                  <ul>
                    <li>기준 단가</li>
                    <li>1kg 당 {Number(price / weight).toLocaleString()}원</li>
                  </ul>
                </div>
                <div className="productInfo">
                  <ul>
                    <li>원산지</li>
                    <li>{made_in}</li>
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
                  <FontAwesomeIcon
                    id="minus"
                    icon={faMinus}
                    onClick={handleQuantityClick}
                  />
                </button>
                <input value={quantity} />
                <button className="handleQuantity">
                  <FontAwesomeIcon
                    id="plus"
                    icon={faPlus}
                    onClick={handleQuantityClick}
                  />
                </button>
              </div>
            </div>
            <div className="costInfo">
              <span>총 합계금액</span>
              <div className="costInfoRight">
                <span>
                  1kg 당 {Number(price / weight).toLocaleString()}원 / 1ea
                </span>
                <div className="rightBottom">
                  <span className="cost">
                    {Number(price * quantity).toLocaleString() + '원'}
                  </span>
                </div>
              </div>
            </div>
            <div className="orderButtons">
              <button className="addCart" onClick={onPostCart}>
                장바구니 담기
              </button>
              {messageModal === true && (
                <MessageModal
                  addCart={messageModal}
                  handleXCart={handleXCart}
                />
              )}
              <button className="buyItem" onClick={onPostCart}>
                바로구매
              </button>
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
                <img src="./images/minions.jpg" alt="minions" />
              </li>
              <li>
                <img src="./images/minions.jpg" alt="minions" />
              </li>
              <li>
                <img src="./images/minions.jpg" alt="minions" />
              </li>
              <li>
                <img src="./images/minions.jpg" alt="minions" />
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

const MAPPING_OBJ = {
  1: <ProductDetail />,
  2: <ProductReview />,
  3: <ProductInquiry />,
};

const TAB_ARR = ['상품 상세', '상품 후기', '상품 문의'];
