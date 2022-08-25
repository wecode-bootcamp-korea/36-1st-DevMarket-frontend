import React from 'react';
import { Link } from 'react-router-dom';
import './NavTop.scss';

function NavTop() {
  return (
    <nav className="navTopWrap">
      <ul className="navUl">
        {TOP_LEFT.map(list => {
          return (
            <li className="list" key={list.id}>
              {list.list}
            </li>
          );
        })}
      </ul>
      <ul className="navUl">
        {TOP_RIGHT.map(list => {
          return (
            <Link to={list.link} key={list.id}>
              <li className="list">{list.list}</li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavTop;

const TOP_LEFT = [
  { id: 1, list: ' 배민사장님광장 ' },
  { id: 2, list: ' 배민셀프서비스 ' },
  { id: 3, list: ' 배민아카데미 ' },
  { id: 4, list: ' 배민장부 ' },
  { id: 5, list: ' 배민로봇 ' },
];

const TOP_RIGHT = [
  { id: 1, list: ' 고객센터 |', link: '/' },
  { id: 2, list: ' 로그인 |', link: '/login' },
  { id: 3, list: ' 회원가입 ', link: '/signup' },
];
