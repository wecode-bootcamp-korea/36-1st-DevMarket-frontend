import { useState } from 'react';
import EditReview from '../EditReview/EditReview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import '../WriteReview/WriteReview.scss';

function WriteReview({ review, removeReview }) {
  const [edit, setEdit] = useState(false);
  const [editInput, setEditInput] = useState('');
  const [editPost, setEditPost] = useState(false);

  const submitEdit = event => {
    event.preventDefault();
    setEditPost(true);
  };

  const cleanUpEdit = () => {
    setEditPost(false);
  };

  const handleEditClick = () => {
    setEdit(true);
    cleanUpEdit();
  };

  const cancelEdit = () => {
    setEdit(false);
  };

  const handleEditInput = event => {
    setEditInput(event.target.value);
  };

  return (
    <section key={review.id} className="singleReview">
      <div className="reviewer">
        <div>
          <span className="name">정**</span>
          <span className="time">2022.08.19</span>
        </div>
        <div className="iconContainer">
          <FontAwesomeIcon
            className="editMark"
            onClick={handleEditClick}
            icon={faPen}
          />
          <FontAwesomeIcon
            className="xMark"
            onClick={() => removeReview(review.id)}
            icon={faXmark}
          />
        </div>
      </div>
      {edit === false && (
        <div className="reviewContent">
          <span id="reviewContent" className="content">
            {review.review}
          </span>
        </div>
      )}
      {edit === true ? (
        <EditReview
          cancelEdit={cancelEdit}
          handleEditInput={handleEditInput}
          editInput={editInput}
          submitEdit={submitEdit}
          editPost={editPost}
        />
      ) : null}
    </section>
  );
}

export default WriteReview;
