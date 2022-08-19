import React from 'react';
import { useState } from 'react';
import './SecondSec.scss';
import ThirdSec from '../ThirdSec/ThirdSec';

function SecondSec({ item, onMouseLeave }) {
  const [input, setInput] = useState('');

  const showList = e => {
    setInput(e.target.innerHTML);
  };
  return (
    <>
      <section className="dropdownMidWrap" onMouseLeave={onMouseLeave}>
        <ul className="dropdownMidUl">
          <li className="dropdownMidLi" onClick={showList}>
            {item.item1}
          </li>
          <li className="dropdownMidLi" onClick={showList}>
            {item.item2}
          </li>
        </ul>
      </section>
      <section>
        {input === '수산' && <ThirdSec item={SOOSAN} />}
        {input === '축산' && <ThirdSec item={CHOOK} />}
        {input === '알콜' && <ThirdSec item={ALCHOL} />}
        {input === 'NON 알콜' && <ThirdSec item={NONALCHOL} />}
      </section>
    </>
  );
}

const SOOSAN = {
  item1: '생선류',
  item2: '갑각류',
  item3: '조개류',
};

const CHOOK = {
  item1: '돼지고기',
  item2: '소고기',
  item3: '닭고기',
};
const ALCHOL = {
  item1: '소주',
  item2: '맥주',
  item3: '양주',
};

const NONALCHOL = {
  item1: '물',
  item2: '이온음료',
  item3: '탄산수',
};

export default SecondSec;
