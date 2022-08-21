import React from 'react';
import './SecondSec.scss';
import ThirdSec from '../ThirdSec/ThirdSec';

function SecondSec({ data }) {
  console.log(data);
  return (
    <>
      <section className="dropdownMidWrap">
        <ul className="dropdownMidUl">
          {data.subcategory.map(data => (
            <li className="dropdownMidLi" key={data.id}>
              {data.name}
            </li>
          ))}
        </ul>
      </section>
      <section>{/* <ThirdSec /> */}</section>
    </>
  );
}
export default SecondSec;
