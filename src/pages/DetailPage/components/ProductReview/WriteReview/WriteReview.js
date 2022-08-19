import '../WriteReview/WriteReview.scss';

function WriteReview({ reviewInput }) {
  return (
    <>
      {reviewInput.map(review => (
        <section className="singleReview">
          <div className="reviewer">
            <span className="name">정**</span>
            <span className="time">2022.08.19</span>
          </div>
          <div className="reviewContent">
            <span className="content">{review}</span>
          </div>
        </section>
      ))}
    </>
  );
}

export default WriteReview;
