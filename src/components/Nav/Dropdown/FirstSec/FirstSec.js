import React, { useState } from 'react';
import './FirstSec.scss';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function FirstSec({ data, onHover, id, cateType, setId, setCate }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [address, setAddress] = useState('');

  const handleSetParams = cateType => {
    searchParams.set('cate', cateType);
    searchParams.set('prod', id);
    setCate(cateType);
    setId(id);
    setSearchParams(searchParams);
  };

  return (
    <Link to={`/product/list?cate=${cateType}&prod=${id}`}>
      <li onMouseMove={onHover} onClick={() => handleSetParams(cateType, id)}>
        <span>{data}</span>
      </li>
    </Link>
  );
}

export default FirstSec;
