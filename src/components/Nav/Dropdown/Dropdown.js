import React from 'react';
import { useState } from 'react';
import FirstSec from './FirstSec/FirstSec';
import './Dropdown.scss';

function Dropdown({ menuList }) {
  const [currentId, setCurrentID] = useState(0);
  const [isMouseLeave, setIsMouseLeave] = useState(false);

  return (
    <div className="dropdown">
      <div className="dropdownMainWrap">
        <ul className="dropdownUl">
          {menuList.map(({ id, mainmenu }) => {
            return (
              <FirstSec
                key={id}
                data={mainmenu}
                onHover={() => setCurrentID(id)}
              />
            );
          })}
        </ul>
      </div>
      <div className="dropdownWrap">
        <ul className="dropdownUl">
          {menuList.map(({ id, subcategory }) => {
            return (
              <div key={id}>
                {id === currentId &&
                  subcategory.map(({ id, name }) => {
                    return <FirstSec key={id} data={name} />;
                  })}
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
