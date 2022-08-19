import React, { useState } from 'react';
import SecondSec from './SecondSec/SecondSec';
import './Dropdown.scss';

function Dropdown() {
  const [input, setInput] = useState('');
  // const [isMouseEnter, setIsMouseEnter] = useState(true);

  const showList = e => {
    e.preventDefault();
    setInput(e.target.innerHTML);
  };

  return (
    <div className="dropdown">
      <div className="dropdownWrap">
        <ul className="dropdownUl">
          <li
            className="dropdownLi"
            onClick={showList}
            // onMouseEnter={() => setIsMouseEnter(!isMouseEnter)}
            // onMouseEnter={showList}
            // onMouseEnter={changeClass}
          >
            <span>농수축산물</span>
          </li>
          <li className="dropdownLi" onMouseOver={showList}>
            <span>음료</span>
          </li>
        </ul>
      </div>

      {input === '농수축산물' && (
        <SecondSec
          item={FOOD}
          // onMouseLeave={() => setIsMouseEnter(!isMouseEnter)}
        />
      )}

      {/* {!isMouseEnter && (
        <SecondSec
          item={FOOD}
          onMouseLeave={() => setIsMouseEnter(!isMouseEnter)}
        />
      )} */}

      {input === '음료' && <SecondSec item={DRINK} />}
    </div>
  );
}

const FOOD = {
  item1: '수산',
  item2: '축산',
};

const DRINK = {
  item1: '알콜',
  item2: 'NON 알콜',
};

export default Dropdown;
