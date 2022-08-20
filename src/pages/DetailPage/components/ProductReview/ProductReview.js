import { useState, useEffect } from 'react';
import SingleReview from './SingleReview/SingleReview';
import WriteReview from './WriteReview/WriteReview';
import '../ProductReview/ProductReview.scss';

function ProductReview() {
  const [reviewList, setReviewList] = useState([]);
  const [review, setReview] = useState('');
  const [reviewArray, setReviewArray] = useState([]);

  const submitReview = event => {
    event.preventDefault();
    const id = Date.now();
    if (review === '') {
      return;
    }
    setReviewArray([{ id, review }, ...reviewArray]);
    setReview('');
  };

  const handleReviewInput = event => {
    setReview(event.target.value);
  };

  const removeReview = id => {
    setReviewArray(
      reviewArray.filter(review => {
        return review.id !== id;
      })
    );
  };

  /* 엔터키 눌르면 등록 되는거 구현중
  const handleEnterPress = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      submitReview();
    }
  };
  */

  useEffect(() => {
    fetch('./data/reviews.json')
      .then(res => res.json())
      .then(setReviewList);
  }, []);

  useEffect(() => {
    fetch('http://10.58.0.32:3000/users/signin', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ authorizationl: }),
    })
      .then(response => response.json())
      .then(data => console.log(data));
  }, []);

  return (
    <div className="productReview">
      <form className="writeReviewWrapper" onSubmit={submitReview}>
        <textarea
          className="writeReview"
          placeholder="내용을 입력해주세요"
          onChange={handleReviewInput}
          value={review}
          // onKeyDown={handleEnterPress}
        />
        <button className="submitReview">등록하기</button>
      </form>
      {reviewArray.map(review => (
        <WriteReview
          review={review}
          key={review.id}
          removeReview={removeReview}
        />
      ))}
      {reviewList.map(review => (
        <SingleReview key={review.id} {...review} />
      ))}
    </div>
  );
}

export default ProductReview;
