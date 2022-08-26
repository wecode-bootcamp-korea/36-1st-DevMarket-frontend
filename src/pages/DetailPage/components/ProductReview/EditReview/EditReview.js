import { useState } from 'react';
import MessageModal from '../../MessageModal/MessageModal';
import '../EditReview/EditReview.scss';

function EditReview({
  handleEditInput,
  editInput,
  cancelEdit,
  productId,
  handleX,
}) {
  const [messageModal, setMessageModal] = useState(false);
  const onEditSubmit = event => {
    event.preventDefault();
    fetch(`http://10.58.0.245:3000/products/reviews/${productId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({ content: editInput }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'UPDATE_SUCCESS') setMessageModal(true);
      });
  };

  return (
    <div className="reviewContent">
      <form className="writeReviewWrapper">
        <textarea
          className="writeReview"
          placeholder="내용을 입력해주세요"
          onChange={handleEditInput}
          value={editInput}
        />
        <div className="editButtons">
          <button className="submitEdit" onClick={onEditSubmit}>
            수정
          </button>
          {messageModal === true && (
            <MessageModal editReview={messageModal} handleX={handleX} />
          )}
          <button className="cancelEdit" onClick={cancelEdit}>
            취소
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditReview;
