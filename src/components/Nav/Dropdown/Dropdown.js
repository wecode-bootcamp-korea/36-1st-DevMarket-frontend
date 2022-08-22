import React from 'react';
import { useState } from 'react';
import FirstSec from './FirstSec/FirstSec';
import './Dropdown.scss';

function Dropdown({ menuList }) {
  const [currentId, setCurrentID] = useState(0);
  const [openCategory, setOpenCategory] = useState();
  const [isMouseLeave, setIsMouseLeave] = useState('hide');

  const showList = () => {
    setIsMouseLeave('show');
  };

  const hideList = () => {
    setIsMouseLeave('hide');
  };

  return (
    <div className="dropdown">
      <div className="dropdownMainWrap" onMouseEnter={hideList}>
        <ul className="dropdownFirstUl">
          {menuList.map(({ id, mainmenu }) => {
            return (
              <FirstSec
                key={id}
                data={mainmenu}
                onHover={() => setCurrentID(id)}
              />
            );
          })}
          <li className="li">가게용품</li>
          <li className="li">배달용품</li>
          <li className="li">테마관</li>
        </ul>
      </div>
      <div className="dropdownSecondWrap" onMouseEnter={showList}>
        <ul className="dropdownSecondUl">
          {menuList.map(({ id, subcategory }) => {
            return (
              <div key={id}>
                {id === currentId &&
                  subcategory.map(({ id, name }) => {
                    return (
                      <FirstSec
                        key={id}
                        data={name}
                        onHover={() => setOpenCategory(id)}
                      />
                    );
                  })}
              </div>
            );
          })}
        </ul>
      </div>

      {menuList.map(secondCat => {
        return (
          <div key={secondCat.id}>
            {secondCat.subcategory.map(thirdCat => {
              return (
                <div key={thirdCat.id}>
                  {isMouseLeave === 'show' &&
                    currentId === secondCat.id &&
                    openCategory === thirdCat.id && (
                      <div className="dropdownThirdWrap">
                        <ul className="dropdownThirdUl">
                          {thirdCat.category.map(({ id, name }) => {
                            return <FirstSec key={id} data={name} />;
                          })}
                        </ul>
                      </div>
                    )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Dropdown;
