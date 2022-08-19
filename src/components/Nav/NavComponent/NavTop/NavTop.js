import React from 'react';
import './NavTop.scss';

function NavTop() {
  return (
    <div className="navTop">
      <ul className="navUl">
        <li className="list">배민사장님광장 &nbsp; |</li>
        <li className="list">배민셀프서비스 &nbsp; |</li>
        <li className="list">배민아카데미 &nbsp; |</li>
        <li className="list">배민장부 &nbsp; |</li>
        <li className="list">배민로봇</li>
      </ul>
      <ul className="navUl">
        <li className="list">
          <a href="#">고객센터 &nbsp; |</a>
        </li>
        <li className="list">
          <a href="#">로그인 &nbsp; |</a>
        </li>
        <li className="list">
          <a href="#">회원가입 &nbsp; </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTop;
