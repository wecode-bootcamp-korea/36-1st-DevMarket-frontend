import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.scss';

function Login() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({ username: '', password: '' });
  const [valLogin, setValLogin] = useState(true);

  const activateButton = () => {
    return userInfo.username.length >= 4 && userInfo.password.length >= 10;
  };

  const handleUserInfo = e => {
    setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
  };

  const handleLogin = () => {
    fetch('http://10.58.7.158:3000/users/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userName: userInfo.username,
        password: userInfo.password,
      }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('통신실패');
      })
      .catch(error => console.log(error))
      .then(data => {
        if (data.message === 'success') {
          localStorage.setItem('token', data.token);
          goToMain();
        } else if (data.message === 'invalid') {
          setValLogin(false);
        }
        setValLogin(true);
      });
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
          <h1 className="pageTitle">로그인</h1>
          <p className="description">
            DevMarket 광장 아이디로 모든 DevMarket 서비스를 이용할 수 있습니다
          </p>
          <input
            id="username"
            type="text"
            placeholder="아이디"
            onChange={handleUserInfo}
            onKeyUp={activateButton}
          />
          <input
            id="password"
            type="password"
            placeholder="비밀번호"
            onChange={handleUserInfo}
            onKeyUp={activateButton}
          />
          {valLogin === false && (
            <div className="errorMsg"> ! 아이디/비밀번호를 확인해주세요. </div>
          )}
          <div className="innerNav">
            <div className="saveIdInput">
              <input type="checkbox" />
              <p>아이디 저장</p>
            </div>
            <div className="findIdPassword">
              <p>아이디</p>
              <p>비밀번호 찾기</p>
              <Link to="/signup">회원가입</Link>
            </div>
          </div>
          <button
            type="button"
            disabled={!activateButton()}
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
