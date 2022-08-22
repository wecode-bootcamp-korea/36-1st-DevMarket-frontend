import React from 'react';
import './FirstSec.scss';

function FirstSec({ data, onHover }) {
  return (
    <li
      className="dropdownLi"
      onMouseMove={onHover}
      // onMouseLeave={mouseLeave}
    >
      <span>{data}</span>
    </li>
  );
}

export default FirstSec;
