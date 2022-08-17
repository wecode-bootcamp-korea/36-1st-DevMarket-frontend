import React from 'react';
import './Nav.scss';
import NavTop from './NavComponent/NavTop';
import NavBottom from './NavComponent/NavBottom';
// import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav_Main">
      <div className="nav_Inner">
        <NavTop />
        <NavBottom />
      </div>
      {/* <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div>
        <NavLink to="/recommend">Recommend</NavLink>
      </div>
      <div>
        <NavLink to="/search">Search</NavLink>
      </div>
      <div>
        <NavLink to="/mypage">MyPage</NavLink>
      </div> */}
    </nav>
  );
};

export default Nav;
