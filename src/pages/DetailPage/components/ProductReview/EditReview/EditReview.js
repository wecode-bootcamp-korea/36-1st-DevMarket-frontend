import '../EditReview/EditReview.scss';

function EditReview({
  handleEditInput,
  editInput,
  cancelEdit,
  submitEdit,
  editPost,
}) {
  return (
    <div className="reviewContent">
      {editPost === false ? (
        <form className="writeReviewWrapper">
          <textarea
            className="writeReview"
            placeholder="내용을 입력해주세요"
            onChange={handleEditInput}
            value={editInput}
          />
          <div className="editButtons">
            <button className="submitEdit" onClick={submitEdit}>
              수정
            </button>
            <button className="cancelEdit" onClick={cancelEdit}>
              취소
            </button>
          </div>
        </form>
      ) : null}
      {editPost === true ? (
        <div className="reviewContent">
          <span id="reviewContent" className="content">
            {editInput}
          </span>
        </div>
      ) : null}
    </div>
  );
}

export default EditReview;
