import React from 'react';
import '../SecondSec/SecondSec.scss';
import './ThirdSec.scss';

function ThirdSec({ data }) {
  return (
    <section className="dropdownSmWrap">
      <ul className="dropdownSmUl">
        <li className="dropdownSmLi">{data.mainmenu}</li>
        <li className="dropdownSmLi">{data.mainmenu}</li>
        <li className="dropdownSmLi">{data.mainmenu}</li>
      </ul>
    </section>
  );
}

export default ThirdSec;
