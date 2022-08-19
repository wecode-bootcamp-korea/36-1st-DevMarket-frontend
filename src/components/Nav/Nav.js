import React from 'react';
import { useState } from 'react';
import './Nav.scss';
import NavTop from './NavComponent/NavTop/NavTop';
import NavBottom from './NavComponent/NavBottom/NavBottom';
import Dropdown from './NavComponent/NavBottom/Dropdown/Dropdown';

const Nav = () => {
  const [classname, setClassname] = useState('click');
  const click = type => {
    classname === 'arcodian' ? setClassname('click') : setClassname('arcodian');
  };

  return (
    <nav>
      <div className="navMain">
        <div className="navInner">
          <NavTop />
          <NavBottom click={click} changeclass={classname} />
        </div>
      </div>
      <div className="navDropdown">
        <div className="navDropdownInner">
          {classname !== 'click' && <Dropdown />}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
