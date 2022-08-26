import React from 'react';
import { useState, useEffect } from 'react';
import FirstSec from './FirstSec/FirstSec';
import './Dropdown.scss';

function Dropdown({ menuList, changeClassname }) {
  const [currentId, setCurrentID] = useState(0);
  const [openCategory, setOpenCategory] = useState();
  const [isMouseLeave, setIsMouseLeave] = useState('hide');
  const [cate, setCate] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    fetch(`http://10.58.0.245:3000/products/list?cate=${cate}&prod=${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(result => console.log(result));
  }, [cate, id]);

  const showList = () => {
    setIsMouseLeave('show');
  };

  const hideList = () => {
    setIsMouseLeave('hide');
  };

  return (
    <div className={`dropdown ${changeClassname}`}>
      <div className="dropdownMainWrap" onMouseEnter={hideList}>
        <ul className="dropdownFirstUl">
          {menuList.map(({ cate, mainmenu }) => {
            return (
              <FirstSec
                key={cate}
                id={cate}
                data={mainmenu}
                onHover={() => setCurrentID(cate)}
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
          {menuList.map(({ cate, subcategory }) => {
            return (
              <div key={cate}>
                {cate === currentId &&
                  subcategory.map(({ cate, name }) => {
                    return (
                      <FirstSec
                        key={cate}
                        id={cate}
                        data={name}
                        setCate={setCate}
                        setId={setId}
                        cateType="2"
                        onHover={() => setOpenCategory(cate)}
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
          <div key={secondCat.cate}>
            {secondCat.subcategory.map(thirdCat => {
              return (
                <div key={thirdCat.cate}>
                  {isMouseLeave === 'show' &&
                    currentId === secondCat.cate &&
                    openCategory === thirdCat.cate && (
                      <div className="dropdownThirdWrap">
                        <ul className="dropdownThirdUl">
                          {thirdCat.category.map(({ cate, name }) => {
                            return (
                              <FirstSec
                                key={cate}
                                data={name}
                                setCate={setCate}
                                setId={setId}
                                id={cate}
                                cateType="3"
                              />
                            );
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
