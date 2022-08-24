import React from 'react';

function Arcodian({ onClick, changeClassname }) {
  return (
    <div onClick={onClick}>
      <h1 className={changeClassname}>
        <i className="fa-solid fa-bars" /> 전체 카테고리
      </h1>
    </div>
  );
}

export default Arcodian;
