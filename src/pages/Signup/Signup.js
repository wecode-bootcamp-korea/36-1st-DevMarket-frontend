import React from 'react';
import './Signup.scss';

function Signup() {
  return (
    <div className="container">
      <div className="innerContainer">
        <div className="innestContainer">
          <h2 className="Logo">
            <span>Dev</span>Market 광장
          </h2>
          <h2 className="pageTitle">회원정보를 입력 후, 가입을 완료해주세요</h2>
          <div className="username">
            <p>이름</p>
            <input type="text" placeholder="이름" />
          </div>
          <div className="username">
            <p>생년월일</p>
            <input type="text" placeholder="년/월/일" />
          </div>
          <div className="username">
            <p>휴대폰번호</p>
            <input type="text" placeholder="010-1234-5678" />
          </div>
          <div className="username">
            <p>아이디</p>
            <input type="text" placeholder="영문 혹은 영문+숫자, 4~20자" />
          </div>
          <div className="username">
            <p>비밀번호</p>
            <input
              type="password"
              placeholder="영어,숫자,특수문자 중 2가지 이상 10~20자"
            />
            <input type="password" placeholder="비밀번호 재입력" />
          </div>
          <div className="username">
            <p>이메일</p>
            <div className="emailInput">
              <input type="password" placeholder="이메일 앞자리" />
              <span>@</span>
              <input type="password" placeholder="이메일 뒷자리" />
            </div>
            <select>
              <option>직접입력</option>
              <option>gmail.com</option>
              <option>naver.com</option>
              <option>outlook.com</option>
              <option>yahoo.com</option>
            </select>
          </div>
          <button>완료</button>
          <p className="teamName">DevMarket Team Corp.</p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
