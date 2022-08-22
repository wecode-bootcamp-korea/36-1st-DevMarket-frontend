import React from 'react';
import './FirstSec.scss';

function FirstSec({ data, onHover }) {
  return (
    <li onMouseMove={onHover}>
      <span>{data}</span>
    </li>
  );
}

export default FirstSec;
