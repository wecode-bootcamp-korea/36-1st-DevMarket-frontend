import React from 'react';
import { useState } from 'react';
import './NavBottom.scss';
import Arcodian from './ Arcodian';
import { Link } from 'react-router-dom';

function NavBottom({ onClick, changeClassname }) {
  const [input, setInput] = useState(false);
  const getValue = e => setInput(e.target.value);

  return (
    <nav className="navBottomWrap">
      <div className="navLeft">
        <Arcodian onClick={onClick} changeClassname={changeClassname} />
        <ul className="navUl">
          {NAV_BOTTOM_LIST.map(list => {
            return (
              <li className="list" key={list.id}>
                {list.list}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navCenter">
        <Link to="/main" style={{ textDecoration: 'none' }}>
          <img className="mainLogo" src="/images/Nav/324.png" alt="logo" />
        </Link>
      </div>
      <div className="navBottomRight">
        <form className="search">
          {input ? null : <i className="fa-solid fa-magnifying-glass" />}
          <input
            type="search"
            maxLength="50"
            autoComplete="off"
            placeholder="상품명으로 찾아보세요"
            onChange={getValue}
          />
          <div className="naviconWrap">
            <Link to="/cart" style={{ textDecoration: 'none' }}>
              <img
                className="navIcon"
                src="/images/Nav/user.png"
                alt="loginImg"
              />
              <p className="navIconTag">나의상회</p>
            </Link>
          </div>
          <div className="naviconWrap">
            <Link to="/cart" style={{ textDecoration: 'none' }}>
              <img
                className="navIcon"
                src="/images/Nav/shopping-cart.png"
                alt="loginImg"
              />
              <p className="navIconTag">장바구니</p>
            </Link>
          </div>
        </form>
      </div>
    </nav>
  );
}

export default NavBottom;

const NAV_BOTTOM_LIST = [
  { id: 1, list: ' 든든배송 ' },
  { id: 2, list: ' 상회가만든 ' },
  { id: 3, list: ' 샘플신청 ' },
  { id: 4, list: ' 기획전 ' },
];
