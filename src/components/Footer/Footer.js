import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="line" />
      <div className="topFooter">
        <ul>
          <li>공지사항</li>
          <div className="topLine" />
          <li>개발상회 입점문의</li>
          <div className="topLine" />
          <li>안전거래 위반 신고센터</li>
          <div className="topLine" />
          <li>개발상회 이용약관</li>
          <div className="topLine" />
          <li>전자포인트거래 이용약관</li>
          <div className="topLine" />
          <li>개인정보처리방침</li>
          <div className="topLine" />
          <li>소비자중심경영</li>
        </ul>
      </div>
      <div className="line" />
      <div className="bottomFooter">
        <div className="bottom1">
          <ul>
            <li>대표이사: 하서율</li>
            <li>주소: 서울특별시 강남구 테헤란로 427</li>
            <li>사업자등록번호: 123-45-67890</li>
            <li>팩스:050-1234-5678</li>
            <li>호스팅서비스제공자:㈜여유로운개발상회</li>
            <li className="middleText">
              <p className="textLi">
                ㈜여유로운개발상회는 통신판매중개자이며, 통신판매의 당사자가
                아닙니다.
              </p>
              <p className="textLi">
                따라서 개별판매자가 등록한 상품, 거래정보 및 거래에 대하여
                책임을 지지 않습니다.
              </p>
            </li>
            <li>상호명: ㈜여유로운개발상회</li>
          </ul>
        </div>
        <div className="bottom2">
          <ul>
            <li className="topText">개발은행 채무지급보증 안내</li>
            <li>당사는 고객님이 포인트 결제한 금액에 대해 개발은행과</li>
            <li> 채무지급보증 계약을 체결하여 안전거래를 보장하고</li>
            <li>있습니다.</li>
            <li className="lastText">서비스 가입사실 확인</li>
          </ul>
        </div>
        <div className="bottom3">
          <ul>
            <li className="bottom3Top">개발상회 고객센터</li>
            <li className="bottom3Middle">1234-5678</li>
            <li>평 일: 00:00~00:00</li>
            <li>토요일: 00:00~00:00</li>
            <li>공휴일: 00:00~00:00</li>
            <li className="bottom3Low">일요일 및 설,추석은 휴무입니다.</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
