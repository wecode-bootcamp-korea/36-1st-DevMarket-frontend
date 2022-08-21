import '../SingleReview/SingleReview.scss';

function SingleReview({ review }) {
  return (
    <section className="singleReview">
      <div className="reviewer">
        <span className="name">{review.name}</span>
        <span className="time">{review.date}</span>
      </div>
      <div className="reviewContent">
        <span className="content">{review.content}</span>
      </div>
      <div className="reviewAnswer">
        <div className="answerTime">
          <span className="answerDone">답변완료</span>
          <span className="time">{review.answerDate}</span>
        </div>
        <div className="answerContent">
          <span>비밀 댓글입니다.</span>
        </div>
      </div>
    </section>
  );
}

export default SingleReview;
