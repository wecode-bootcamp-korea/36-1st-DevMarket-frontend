import React from 'react';
import './Login.scss';

function Login() {
  return (
    <div className="container">
      <div className="innerContainer">
        <div className="innestContainer">
          <h2 className="Logo">
            <span>Dev</span>Market 광장
          </h2>
          <h1 className="pageTitle">사장님 통합 로그인</h1>
          <p className="description">
            배민사장님광장 아이디로 모든 배민 사장님 서비스를 이용할 수 있습니다
          </p>
          <input type="text" placeholder="아이디" />
          <input type="password" placeholder="비밀번호" />
          <div className="innerNav">
            <div className="saveIdInput">
              <input type="checkbox" />
              <p>아이디 저장</p>
            </div>
            <div className="findIdPassword">
              <p>아이디</p>
              <p>비밀번호 찾기</p>
              <p>회원가입</p>
            </div>
          </div>
          <button>로그인</button>
          <p className="teamName">DevMarket Team Corp.</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
