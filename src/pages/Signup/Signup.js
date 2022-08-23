import React, { useEffect, useState } from 'react';
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
    email: '',
    emailBack: '',
  });

  const {
    name,
    birthdate,
    phoneNumber,
    username,
    password,
    rePassword,
    email,
    emailBack,
  } = userInfo;

  const activateButton =
    name.length >= 2 &&
    birthdate.length === 10 &&
    phoneNumber.length === 13 &&
    username.length >= 4 &&
    password.length >= 10 &&
    rePassword === password &&
    email.includes('@');

  const handleSignup = () => {
    fetch('http://10.58.5.80:3000/users/signup', {
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
    });
    /*
      .then(response => response.json())
      .then(data => console.log(data));
    */
  };

  const onEmailSelect = () => {
    const emailSelect = document.getElementsByTagName('select');
    const emailBack = document.getElementsByClassName('emailBack');
    const selectedIndex = emailSelect[0].options.selectedIndex;
    const selectedValue = emailSelect[0].options[selectedIndex].value;
    if (selectedIndex !== 0) {
      emailBack.email.disabled = true;
      userInfo.email = userInfo.email + selectedValue;
      console.log(userInfo.email);
    } else {
      emailBack.email.disabled = false;
      userInfo.email = userInfo.email + userInfo.emailBack;
    }
  };

  const handleUserInfo = e => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    console.log(userInfo.email);
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
            <div className="emailInputs">
              <input
                name="email"
                className="signUpInputs emailFront"
                type="text"
                placeholder="이메일 앞자리"
                onChange={handleUserInfo}
              />
              <input
                name="emailBack"
                className="signUpInputs emailBack"
                type="text"
                placeholder="이메일 뒷자리"
                onChange={handleUserInfo}
              />
            </div>
            <select id="emailOptions" onChange={onEmailSelect}>
              <option value="직접입력">직접입력</option>
              <option value="gmail.com">gmail.com</option>
              <option value="naver.com">naver.com</option>
              <option value="outlook.com">outlook.com</option>
              <option value="yahoo.com">yahoo.com</option>
            </select>
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
