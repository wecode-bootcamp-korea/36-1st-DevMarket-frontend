import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.scss';

function Signup() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    name: '',
    birthdate: '',
    phoneNumber: '',
    username: '',
    password: '',
    rePassword: '',
    emailFront: '',
    emailBack: '',
  });

  const activateButton = () => {
    return (
      userInfo.name.length >= 2 &&
      userInfo.birthdate.length === 10 &&
      userInfo.phoneNumber.length === 13 &&
      userInfo.username.length >= 4 &&
      userInfo.password.length >= 10 &&
      userInfo.rePassword === userInfo.password &&
      userInfo.emailFront.length >= 4 &&
      userInfo.emailBack.length >= 4
    );
  };

  const handleUserInfo = e => {
    setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
  };

  const goToMain = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <div className="innerContainer">
        <div className="innestContainer">
          <h2 className="Logo">
            <span>Dev</span>Market 광장
          </h2>
          <h2 className="pageTitle">회원정보를 입력 후, 가입을 완료해주세요</h2>
          {INPUT_LIST.map(input => (
            <div key={input.key} className="username">
              <p>{input.name}</p>
              <input
                id={input.id}
                className="signUpInputs"
                type="text"
                placeholder={input.placeholder}
                onChange={handleUserInfo}
                onKeyUp={activateButton}
              />
            </div>
          ))}
          <div className="username">
            <p>비밀번호</p>
            <input
              id="password"
              className="signUpInputs"
              type="password"
              placeholder="영어,숫자,특수문자 중 2가지 이상 10~20자"
              onChange={handleUserInfo}
              onKeyUp={activateButton}
            />
            <input
              id="rePassword"
              className="signUpInputs"
              type="password"
              placeholder="비밀번호 재입력"
              onChange={handleUserInfo}
              onKeyUp={activateButton}
            />
          </div>
          <div className="username">
            <p>이메일</p>
            <div className="emailInput">
              <input
                id="emailFront"
                className="signUpInputs"
                type="text"
                placeholder="이메일 앞자리"
                onChange={handleUserInfo}
                onKeyUp={activateButton}
              />
              <span>@</span>
              <input
                id="emailBack"
                className="signUpInputs"
                type="text"
                placeholder="이메일 뒷자리"
                onChange={handleUserInfo}
                onKeyUp={activateButton}
              />
            </div>
            <select id="emailOptions">
              <option value="직접입력">직접입력</option>
              <option value="gmail.com">gmail.com</option>
              <option value="naver.com">naver.com</option>
              <option value="outlook.com">outlook.com</option>
              <option value="yahoo.com">yahoo.com</option>
            </select>
          </div>
          <button
            className="doneButton"
            disabled={!activateButton()}
            onClick={goToMain}
          >
            완료
          </button>
          <p className="teamName">DevMarket Team Corp.</p>
        </div>
      </div>
    </div>
  );
}

export default Signup;

const INPUT_LIST = [
  {
    key: 1,
    id: 'name',
    name: '이름',
    placeholder: '이름',
  },
  {
    key: 2,
    id: 'birthdate',
    name: '생년월일',
    placeholder: '년/월/일',
  },
  {
    key: 3,
    id: 'phoneNumber',
    name: '휴대폰번호',
    placeholder: '010-1234-5678',
  },
  {
    key: 4,
    id: 'username',
    name: '아이디',
    placeholder: '영문 혹은 영문+숫자, 4~20자',
  },
];
