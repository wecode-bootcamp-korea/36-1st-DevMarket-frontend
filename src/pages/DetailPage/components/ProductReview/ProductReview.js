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

  // Mock Data를 활용한 코드

  useEffect(() => {
    fetch('./data/reviews.json')
      .then(res => res.json())
      .then(setReviewList);
  }, []);

  /* 백엔드와 통신할 때 쓸 코드
  useEffect(() => {
    fetch('http://10.58.7.158:3000/products/review/3', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjMsInVzZXJOYW1lIjoiY3dvbmhvMTYiLCJpYXQiOjE2NjA5OTA2NDUsImV4cCI6MTY2MzU4MjY0NX0.oBeL0UP3fYz7pZM9rgEtE23SxpGHLwzaoJ1OE2dzmus',
      },
    })
      .then(response => response.json())
      .then(data => setReviewList(data));
  }, []);
  */

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
        <SingleReview key={review.id} review={review} />
      ))}
    </div>
  );
}

export default ProductReview;
