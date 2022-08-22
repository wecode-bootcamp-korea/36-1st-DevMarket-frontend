import { useState } from 'react';
import './Nav.scss';
import NavTop from './NavComponent/NavTop/NavTop';
import NavBottom from './NavComponent/NavBottom/NavBottom';
import Dropdown from './Dropdown/Dropdown';

const Nav = () => {
  const [classname, setClassname] = useState('click');
  const [scroll, setScroll] = useState(0);
  const onScroll = e => {
    setScroll(e.currentTarget.scrollY);
  };
  window.addEventListener('scroll', onScroll);

  const click = () => {
    classname === 'arcodian' ? setClassname('click') : setClassname('arcodian');
  };

  return (
    <nav style={scroll < 30 ? { top: 0 - scroll } : { top: -30 }}>
      <div className="navMain">
        <div className="navInner">
          <NavTop />
          <NavBottom click={click} changeclass={classname} />
          {classname !== 'click' && <Dropdown />}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
