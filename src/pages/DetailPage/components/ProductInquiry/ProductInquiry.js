import '../ProductInquiry/ProductInquiry.scss';

function ProductInquiry() {
  return (
    <div className="productInquiry">
      <div className="description">
        상품에 대한 궁금한 점을 남겨주시면 판매자가 직접 확인 후 답변을
        드립니다.
      </div>
      <button className="inquiryButton">상품문의 남기기</button>
    </div>
  );
}

export default ProductInquiry;
