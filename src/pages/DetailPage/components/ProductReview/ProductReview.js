import { useState, useEffect } from 'react';
import SingleReview from './SingleReview/SingleReview';
import '../ProductReview/ProductReview.scss';

function ProductReview() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('./data/reviews.json')
      .then(res => res.json())
      .then(result => setReviews(result));
  }, []);

  return (
    <div className="productReview">
      {reviews.map(review => (
        <SingleReview key={review.id} {...review} />
      ))}
    </div>
  );
}

export default ProductReview;
