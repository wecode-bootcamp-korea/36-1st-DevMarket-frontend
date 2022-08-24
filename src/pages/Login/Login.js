import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.scss';

function Login() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({ username: '', password: '' });
  const [valLogin, setValLogin] = useState(true);

  const activateButton =
    userInfo.username.length >= 4 && userInfo.password.length >= 10;

  const handleUserInfo = e => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  /*
  const handleLogin = () => {
    if (activateButton === true) {
      goToMain();
    } else {
      setValLogin(false);
    }
  };
  */

  const handleLogin = () => {
    fetch('http://10.58.1.169:3000/users/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userName: userInfo.username,
        password: userInfo.password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'SUCCESS') {
          localStorage.setItem('token', data.token);
          goToMain();
        }
        if (data.message === 'FAIL') {
          setValLogin(false);
        }
      });
  };

  const goToMain = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <div className="innerContainer">
        <div className="innestContainer">
          <h2 className="logo">
            <span className="teamLogo">Dev</span>Market 광장
          </h2>
          <h1 className="pageTitle">로그인</h1>
          <p className="description">
            DevMarket 광장 아이디로 모든 DevMarket 서비스를 이용할 수 있습니다
          </p>
          <input
            className="userInfoInput"
            name="username"
            type="text"
            placeholder="아이디"
            onChange={handleUserInfo}
          />
          <input
            className="userInfoInput"
            name="password"
            type="password"
            placeholder="비밀번호"
            onChange={handleUserInfo}
          />
          {valLogin === false && (
            <div className="errorMsg"> ! 아이디/비밀번호를 확인해주세요. </div>
          )}
          <div className="innerNav">
            <div className="saveIdInput">
              <input className="saveIdBox" type="checkbox" />
              <p>아이디 저장</p>
            </div>
            <div className="findIdPassword">
              <p className="findInfo">아이디</p>
              <p className="findInfo">비밀번호 찾기</p>
              <Link className="signUp" to="/signup">
                회원가입
              </Link>
            </div>
          </div>
          <button
            type="button"
            disabled={!activateButton}
            onClick={handleLogin}
          >
            로그인
          </button>
          <p className="teamName">DevMarket Team Corp.</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
