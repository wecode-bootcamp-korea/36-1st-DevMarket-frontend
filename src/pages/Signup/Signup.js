import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.scss';

function Signup() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    name: '',
    birthdate: 0,
    phoneNumber: 0,
    username: '',
    password: '',
    rePassword: '',
    email: '',
  });

  const {
    name,
    birthdate,
    phoneNumber,
    username,
    password,
    rePassword,
    email,
  } = userInfo;

  const activateButton =
    name.length >= 2 &&
    birthdate.length === 10 &&
    phoneNumber.length === 13 &&
    username.length >= 4 &&
    password.length >= 10 &&
    rePassword === password &&
    email.includes('@' && '.com');

  const handleSignup = () => {
    fetch('http://10.58.5.164:3000/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userName: username,
        password: password,
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        birth: birthdate,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'SUCCESS') {
          goToMain();
        } else {
          alert('회원가입이 성공적으로 이루어지지 않았습니다.');
        }
      });
  };

  const handleUserInfo = e => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const goToMain = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <div className="innerContainer">
        <div className="innestContainer">
          <div>
            <img className="logo" src="./images/logo.jpg" alt="logo" />
          </div>
          <h2 className="pageTitle">회원정보를 입력 후, 가입을 완료해주세요</h2>
          {INPUT_LIST.map(input => (
            <div key={input.key} className="username">
              <p>{input.name}</p>
              <input
                name={input.id}
                className="signUpInputs"
                type="text"
                placeholder={input.placeholder}
                onChange={handleUserInfo}
              />
            </div>
          ))}
          <div className="username">
            <p>비밀번호</p>
            <input
              name="password"
              className="signUpInputs"
              type="password"
              placeholder="영어,숫자,특수문자 중 2가지 이상 10~20자"
              onChange={handleUserInfo}
            />
            <input
              name="rePassword"
              className="signUpInputs"
              type="password"
              placeholder="비밀번호 재입력"
              onChange={handleUserInfo}
            />
          </div>
          <div className="username">
            <p>이메일</p>
            <input
              name="email"
              className="signUpInputs"
              type="text"
              placeholder="이메일"
              onChange={handleUserInfo}
            />
          </div>
          <button
            className="doneButton"
            disabled={!activateButton}
            onClick={handleSignup}
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
    placeholder: '1998/08/24',
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
