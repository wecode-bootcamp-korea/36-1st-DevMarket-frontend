import React, { useEffect, useState } from 'react';
import './Main.scss';

function Main() {
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    fetch('/data/hihi.json')
      .then(response => response.json())
      .then(result => setMenuList(result));
  }, []);

  console.log(menuList.products);
  return <div>hihi</div>;
}

export default Main;
