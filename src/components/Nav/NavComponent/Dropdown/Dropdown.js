import React from 'react';
import SecondSec from './SecondSec';
import ThirdSec from './ThirdSec';

function Dropdown() {
  return (
    <div className="dropdown">
      <section className="firstSec">
        <ul>
          <li>농수축산물</li>
          <li>음료</li>
        </ul>
      </section>
      <SecondSec />
      <ThirdSec />
    </div>
  );
}

// const SOOSAN = {

// };

export default Dropdown;
