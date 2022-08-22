import React from 'react';
import './FirstSec.scss';

function FirstSec({ data, hover }) {
  return (
    <li className="dropdownLi" onMouseEnter={hover}>
      <span>{data}</span>
    </li>
  );
}

export default FirstSec;
