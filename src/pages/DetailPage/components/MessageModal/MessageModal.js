import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import '../MessageModal/MessageModal.scss';

function MessageModal({
  handleX,
  handleXCart,
  createReview,
  addCart,
  removeReview,
  editReview,
}) {
  return (
    <div className="modalBackground">
      <div className="messageContainer">
        <div className="titleContainer">
          <h2 className="title">알림</h2>
          <FontAwesomeIcon
            className="xMark"
            onClick={addCart === true ? handleXCart : handleX}
            icon={faXmark}
          />
        </div>
        <div className="text">
          {createReview === true && <p>리뷰등록이 성공적으로 됐습니다.</p>}
          {addCart === true && <p>상품이 성공적으로 장바구니에 담겼습니다.</p>}
          {removeReview === true && <p>리뷰가 성공적으로 삭제됐습니다.</p>}
          {editReview === true && <p>리뷰가 성공적으로 수정됐습니다.</p>}
        </div>
      </div>
    </div>
  );
}

export default MessageModal;
