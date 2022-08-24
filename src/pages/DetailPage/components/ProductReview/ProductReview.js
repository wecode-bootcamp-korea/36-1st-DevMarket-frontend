import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import SingleReview from './SingleReview/SingleReview';
import WriteReview from './WriteReview/WriteReview';
import '../ProductReview/ProductReview.scss';

function ProductReview() {
  const [reviewList, setReviewList] = useState([]);
  const [review, setReview] = useState('');
  const [reviewArray, setReviewArray] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const start = searchParams.get('offset');
  const limit = searchParams.get('limit');
  const [id, setId] = useState(0);

  const submitReview = event => {
    event.preventDefault();
    setId(curr => curr + 1);
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

  /*
  // Mock Data를 활용한 코드
  useEffect(() => {
    fetch(`./data/reviews.json?_start=${offset}&_limit=${limit}`)
      .then(res => res.json())
      .then(setReviewList);
  }, [offset, limit]);

  */

  // 리뷰목록 통신 코드
  useEffect(() => {
    fetch(
      `http://10.58.1.169:3000/products/review/3?_start=${start}&_limit=30`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorization: localStorage.getItem('token'),
        },
      }
    )
      .then(response => response.json())
      .then(data => setReviewList(data));
  }, [start, limit]);

  const movePage = pageNumber => {
    searchParams.set('offset', (pageNumber - 1) * 30);
    setSearchParams(searchParams);
  };

  // 리뷰등록 통신 코드
  const onPostReview = () => {
    fetch('http://10.58.5.151:3000/products/review/3', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({ content: review }),
    });
  };

  return (
    <div className="productReview">
      <form className="writeReviewWrapper" onSubmit={submitReview}>
        <textarea
          className="writeReview"
          placeholder="내용을 입력해주세요"
          onChange={handleReviewInput}
          value={review}
        />
        <button className="submitReview" onClick={onPostReview}>
          등록하기
        </button>
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
      <div className="pageButtons">
        <button className="pageButton" onClick={() => movePage(1)}>
          1
        </button>
        <button className="pageButton" onClick={() => movePage(2)}>
          2
        </button>
        <button className="pageButton" onClick={() => movePage(3)}>
          3
        </button>
        <button className="pageButton" onClick={() => movePage(4)}>
          4
        </button>
        <button className="pageButton" onClick={() => movePage(5)}>
          5
        </button>
        <FontAwesomeIcon className="rightIcon" icon={faAngleRight} />
      </div>
    </div>
  );
}

export default ProductReview;
