import { useState } from 'react';
import '../ProductInquiry/ProductInquiry.scss';
import InquiryModal from './InquiryModal/InquiryModal';

function ProductInquiry() {
  const [modal, setModal] = useState(false);

  const handleButtonClick = () => {
    setModal(true);
  };

  const handleXClick = () => {
    setModal(false);
  };

  return (
    <div className="productInquiry">
      <div className="description">
        상품에 대한 궁금한 점을 남겨주시면 판매자가 직접 확인 후 답변을
        드립니다.
      </div>
      <button className="inquiryButton" onClick={handleButtonClick}>
        상품문의 남기기
      </button>
      {modal && <InquiryModal handleX={handleXClick} />}
    </div>
  );
}

export default ProductInquiry;
