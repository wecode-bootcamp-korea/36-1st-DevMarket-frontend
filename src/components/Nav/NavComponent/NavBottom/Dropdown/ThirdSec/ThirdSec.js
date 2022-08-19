import React from 'react';
import '../SecondSec/SecondSec.scss';
import './ThirdSec.scss';

function ThirdSec({ item }) {
  return (
    <section className="dropdownSmWrap">
      <ul className="dropdownSmUl">
        <li className="dropdownSmLi">{item.item1}</li>
        <li className="dropdownSmLi">{item.item2}</li>
        <li className="dropdownSmLi">{item.item3}</li>
      </ul>
    </section>
  );
}

export default ThirdSec;
