import React, { useState, useEffect } from 'react';
import './Carousel.scss';

const Carousel = () => {
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

  console.log(count);

  return (
    <div className="carousel">
      <div className="container">
        <div
          className="images"
          style={{ transform: `translateX(${count * -1080}px)` }}
        >
          <img src="/images/carousel/1.png" />
          <img src="/images/carousel/2.png" />
          <img src="/images/carousel/3.png" />
          <img src="/images/carousel/4.png" />
          <img src="/images/carousel/5.png" />
          <img src="/images/carousel/6.png" />
          <img src="/images/carousel/7.png" />
          <img src="/images/carousel/8.png" />
          <img src="/images/carousel/9.png" />
          <img src="/images/carousel/10.png" />
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
