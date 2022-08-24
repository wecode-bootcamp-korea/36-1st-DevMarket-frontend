import React from 'react';
import './FirstSec.scss';
import { useSearchParams } from 'react-router-dom';

function FirstSec({ data, onHover, id, cateType, setId, setCate }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSetParams = cateType => {
    searchParams.set('cate', cateType);
    searchParams.set('prod', id);
    setCate(cateType);
    setId(id);
    setSearchParams(searchParams);
  };

  return (
    <li onMouseMove={onHover} onClick={() => handleSetParams(cateType, id)}>
      <span>{data}</span>
    </li>
  );
}

export default FirstSec;
