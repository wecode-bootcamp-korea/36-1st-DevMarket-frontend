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

  useEffect(() => {
    fetch('./data/reviews.json')
      .then(res => res.json())
      .then(setReviewList);
  }, []);

  return (
    <div className="productReview">
      <form className="writeReviewWrapper" onSubmit={submitReview}>
        <textarea
          className="writeReview"
          placeholder="내용을 입력해주세요"
          onChange={handleReviewInput}
          value={review}
        />
        <button className="submitReview">등록하기</button>
      </form>
      {reviewArray.map(review => (
        <WriteReview
          review={review}
          setReview={setReview}
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
