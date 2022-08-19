import React from 'react';

function Arcodian({ click, changeclass }) {
  return (
    <div onClick={() => click('click')} className={changeclass}>
      <h1>
        <i className="fa-solid fa-bars" /> 전체 카테고리
      </h1>
    </div>
  );
}

export default Arcodian;
