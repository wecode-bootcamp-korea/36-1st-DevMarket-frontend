import '../SingleReview/SingleReview.scss';

function SingleReview({ name, date, review, answerDate, answer }) {
  return (
    <section className="singleReview">
      <div className="reviewer">
        <span className="name">{name}</span>
        <span className="time">{date}</span>
      </div>
      <div className="reviewContent">
        <span className="content">{review}</span>
      </div>
      <div className="reviewAnswer">
        <div className="answerTime">
          <span className="answerDone">답변완료</span>
          <span className="time">{answerDate}</span>
        </div>
        <div className="answerContent">
          <span>{answer}</span>
        </div>
      </div>
    </section>
  );
}

export default SingleReview;
