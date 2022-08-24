import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footerNavOutLine" />
      <div className="footerNav">
        <ul>
          {FOOTER_SERVICE.map(info => {
            return (
              <>
                <li key={info.id}> {info.list} </li>
                <div className="footerNavDividingLine" />
              </>
            );
          })}
        </ul>
      </div>
      <div className="footerNavOutLine" />
      <div className="footerMainWrap">
        <div className="companyDetailInfo">
          <ul>
            {FOOTER_COMPANY_INFO.map(info => {
              return <li key={info.id}> {info.list} </li>;
            })}
            <li className="responsibilityWrap">
              <p className="responsibilityText">
                ㈜여유로운개발상회는 통신판매중개자이며, 통신판매의 당사자가
                아닙니다.
              </p>
              <p className="responsibilityText">
                따라서 개별판매자가 등록한 상품, 거래정보 및 거래에 대하여
                책임을 지지 않습니다.
              </p>
            </li>
            <li>상호명: ㈜여유로운개발상회</li>
          </ul>
        </div>
        <div className="financeServiceInfo">
          <ul>
            <li className="financeService">개발은행 채무지급보증 안내</li>
            <li>당사는 고객님이 포인트 결제한 금액에 대해 개발은행과</li>
            <li> 채무지급보증 계약을 체결하여 안전거래를 보장하고</li>
            <li>있습니다.</li>
            <li className="serviceDescription">서비스 가입사실 확인</li>
          </ul>
        </div>
        <div className="customerServiceInfo">
          <ul>
            <li className="customerService">개발상회 고객센터</li>
            <li className="customerServiceNumber">1234-5678</li>
            {FOOTER_TIME.map(info => {
              return <li>{info.list}</li>;
            })}
            <li className="businessHour">일요일 및 설,추석은 휴무입니다.</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
const FOOTER_SERVICE = [
  { id: 1, list: '공지사항' },
  { id: 2, list: '개발상회 입점문의' },
  { id: 3, list: '안전거래 위반 신고센터' },
  { id: 4, list: '개발상회 이용약관' },
  { id: 5, list: '전자포인트거래 이용약관' },
  { id: 6, list: '개인정보처리방침' },
  { id: 7, list: '소비자중심경영' },
];

const FOOTER_COMPANY_INFO = [
  { id: 1, list: '대표이사: 하서율' },
  { id: 2, list: '주소: 서울특별시 강남구 테헤란로' },
  { id: 3, list: '사업자등록번호: 123-45-67890' },
  { id: 4, list: '팩스:050-1234-5678' },
  { id: 5, list: '호스팅서비스제공자:㈜여유로운개발상회' },
];

const FOOTER_TIME = [
  { id: 1, list: '평 일: 00:00~00:00' },
  { id: 2, list: '토요일: 00:00~00:00' },
  { id: 3, list: '공휴일: 00:00~00:00' },
];
