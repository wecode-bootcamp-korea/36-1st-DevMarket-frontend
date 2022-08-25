import { useState } from 'react';
import EditReview from '../EditReview/EditReview';
import MessageModal from '../../MessageModal/MessageModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import '../SingleReview/SingleReview.scss';

function SingleReview({ review, productId, handleX }) {
  const [edit, setEdit] = useState(false);
  const [editInput, setEditInput] = useState('');
  const [messageModal, setMessageModal] = useState(false);

  const handleEditClick = () => {
    setEdit(true);
  };

  const cancelEdit = () => {
    setEdit(false);
  };

  const handleEditInput = event => {
    setEditInput(event.target.value);
  };

  const onRemoveReview = event => {
    event.preventDefault();
    fetch(`http://10.58.5.164:3000/products/reviews/${productId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token'),
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'DELETE_SUCCESS') setMessageModal(true);
      });
  };

  return (
    <section className="singleReview">
      <div className="reviewer">
        <div>
          <span className="name">{review.name}</span>
          <span className="time">{review.date}</span>
        </div>
        <div className="iconContainer">
          <FontAwesomeIcon
            className="editMark"
            onClick={handleEditClick}
            icon={faPen}
          />
          <FontAwesomeIcon
            className="xMark"
            onClick={onRemoveReview}
            icon={faXmark}
          />
          {messageModal === true && (
            <MessageModal removeReview={messageModal} handleX={handleX} />
          )}
        </div>
      </div>
      {edit === false && (
        <div className="reviewContent">
          <span className="content">{review.content}</span>
        </div>
      )}
      {edit === true ? (
        <EditReview
          productId={productId}
          cancelEdit={cancelEdit}
          handleEditInput={handleEditInput}
          editInput={editInput}
          handleX={handleX}
        />
      ) : null}
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
