import { useEffect, useState } from 'react';
import './Nav.scss';
import NavTop from './NavComponent/NavTop/NavTop';
import NavBottom from './NavComponent/NavBottom/NavBottom';
import Dropdown from './Dropdown/Dropdown';

const Nav = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    fetch('/data/product.json')
      .then(response => response.json())
      .then(result => setMenuList(result));
  }, []);

  const openCategory = () => {
    setShowDropDown(!showDropDown);
  };

  const onScroll = e => {
    setScroll(e.currentTarget.scrollY);
  };

  window.addEventListener('scroll', onScroll);

  return (
    <nav style={scroll < 30 ? { top: 0 - scroll } : { top: -30 }}>
      <div className="navMain">
        <div className="navInner">
          <NavTop />
          <NavBottom
            onClick={openCategory}
            changeClassname={showDropDown ? 'click' : 'arcodian'}
          />
          {showDropDown && <Dropdown menuList={menuList} />}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
