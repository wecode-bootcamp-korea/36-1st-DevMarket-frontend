import React from 'react';
import './FirstSec.scss';

function FirstSec({ data, id, hover }) {
  return (
    <li className="dropdownLi" onMouseEnter={hover}>
      <span>{data}</span>
    </li>
  );
}

export default FirstSec;
