import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import '../WriteReview/WriteReview.scss';

function WriteReview({ review, removeReview }) {
  return (
    <section key={review.id} className="singleReview">
      <div className="reviewer">
        <div>
          <span className="name">정**</span>
          <span className="time">2022.08.19</span>
        </div>
        <FontAwesomeIcon
          className="xMark"
          onClick={() => removeReview(review.id)}
          icon={faXmark}
        />
      </div>
      <div className="reviewContent">
        <span className="content">{review.review}</span>
      </div>
    </section>
  );
}

export default WriteReview;
