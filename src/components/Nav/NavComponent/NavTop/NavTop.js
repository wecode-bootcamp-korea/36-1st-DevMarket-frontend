import React from 'react';
import { Link } from 'react-router-dom';
import './NavTop.scss';

function NavTop() {
  return (
    <nav className="navTopWrap">
      <ul className="navUl">
        <li className="list">배민사장님광장 &nbsp; |</li>
        <li className="list">배민셀프서비스 &nbsp; |</li>
        <li className="list">배민아카데미 &nbsp; |</li>
        <li className="list">배민장부 &nbsp; |</li>
        <li className="list">배민로봇</li>
      </ul>
      <ul className="navUl">
        <li className="list">고객센터 &nbsp; |</li>
        <li className="list">
          <Link to="/login">로그인 &nbsp; |</Link>
        </li>
        <li className="list">
          <Link to="/signup">회원가입 &nbsp; </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavTop;
