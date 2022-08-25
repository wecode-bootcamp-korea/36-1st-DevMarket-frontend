import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import '../InquiryModal/InquiryModal.scss';

function InquiryModal({ handleX }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleContainer">
          <h2 className="title">1:1 문의</h2>
          <FontAwesomeIcon className="xMark" onClick={handleX} icon={faXmark} />
        </div>
        <div className="Container">
          <section className="sectionTop">
            <h1 className="titleTwo">문의내용</h1>
            <input className="inquiryTitle" placeholder="제목을 입력해주세요" />
            <textarea
              className="inquiryContent"
              placeholder="내용을 입력해주세요"
            />
          </section>
          <section className="sectionBottom">
            <h1 className="titleThree">이메일 정보</h1>
            <input className="inquiryTitle" placeholder="이메일" />
            <p className="answerBack">! 문의 등록시 이메일로 답변 드립니다.</p>
          </section>
          <button className="submitInquiry">등록하기</button>
        </div>
      </div>
    </div>
  );
}

export default InquiryModal;
