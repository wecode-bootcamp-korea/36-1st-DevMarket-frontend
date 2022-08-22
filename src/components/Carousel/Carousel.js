import React, { useState, useEffect } from 'react';
import './Carousel.scss';

const Carousel = () => {
  const [imgList, setImgList] = useState([]);

  useEffect(() => {
    fetch('/data/carousel.json')
      .then(response => response.json())
      .then(result => setImgList(result));
  }, []);

  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setTimeout(() => {
      nextBtn();
    }, 3000);
    return () => clearTimeout(interval);
  });

  const nextBtn = () => {
    setCount(count => (count < 9 ? count + 1 : (count = 0)));
  };
  const prevBtn = () => {
    setCount(count => (count > 0 ? count - 1 : null));
  };

  return (
    <div className="carousel">
      <div className="container">
        <div
          className="images"
          style={{ transform: `translateX(${count * -1080}px)` }}
        >
          {imgList.map(({ id, imgSrc }) => {
            return <img key={id} src={imgSrc} alt={id} />;
          })}
        </div>
      </div>
      <button className="prev" onClick={prevBtn}>
        〈
      </button>
      <button className="next" onClick={nextBtn}>
        〉
      </button>
      <div className="chapter">
        <p>{count + 1} / 10 </p>
      </div>
    </div>
  );
};
export default Carousel;
