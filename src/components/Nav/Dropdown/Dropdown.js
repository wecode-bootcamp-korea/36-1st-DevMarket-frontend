import React from 'react';
import { useState, useEffect } from 'react';
import FirstSec from './FirstSec/FirstSec';
import './Dropdown.scss';

function Dropdown() {
  const [data, setData] = useState([]);
  const [currentId, setCurrentID] = useState('');

  useEffect(() => {
    fetch('/data/product.json')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div className="dropdown">
      <div className="dropdownWrap">
        <ul className="dropdownUl">
          {data.map(({ id, mainmenu, subcategory }) => {
            return (
              <>
                <FirstSec
                  key={id}
                  id={id}
                  data={mainmenu}
                  hover={() => setCurrentID(id)}
                />
                <div className="midCatWrap">
                  <ul className="midCategory">
                    {id === currentId &&
                      subcategory.map(({ id, name, category }) => {
                        return (
                          <>
                            <FirstSec
                              key={id}
                              id={id}
                              data={name}
                              hover={() => setCurrentID(id)}
                            />
                            <ul className="midCategory">
                              {id === currentId &&
                                category.map(({ id, name }) => (
                                  <FirstSec
                                    key={id}
                                    id={id}
                                    data={name}
                                    hover={() => setCurrentID(id)}
                                  />
                                ))}
                            </ul>
                          </>
                        );
                      })}
                  </ul>
                </div>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
