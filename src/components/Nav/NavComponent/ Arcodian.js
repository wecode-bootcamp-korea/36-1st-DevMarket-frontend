import React from 'react';
import Dropdown from './Dropdown/Dropdown';

function Arcodian({ click, changeclass }) {
  return (
    <div onClick={click} className={changeclass}>
      <h1>
        <i class="fa-solid fa-bars" /> 전체 카테고리
      </h1>
      {changeclass !== 'click' ? <Dropdown /> : null}
    </div>
  );
}

export default Arcodian;
