import '../ProductReview/ProductReview.scss';

function ProductReview() {
  return (
    <div className="productReview">
      <section className="singleReview">
        <div className="reviewer">
          <span className="name">정**</span>
          <span className="time">2022.08.18</span>
        </div>
        <div className="reviewContent">
          <span className="content">
            밑에 사장님 말이 맞네요 .... 괜히 시켰어요 다 달라 붙어서 한개씩
            소분하려면 다 박살나고 깨지고 장난 아니네요 앞으로 이 크로와상
            생지는 주문하지 않을래요.... 저도 반정도 지금 못쓰고 폐기를 해야하나
            걱정입니다 사진 첨부할 수 있는 기능이 있으면 사진 첨부하고 싶네요
            진짜 너무합니다 배민상회 든든배송....
          </span>
        </div>
        <div className="reviewAnswer">
          <div className="answerTime">
            <span className="answerDone">답변완료</span>
            <span className="time">2022.08.18</span>
          </div>
          <div className="answerContent">
            <span>
              안녕하세요 고객님, 배민상회입니다. 배민상회 상품 이용에 불편을
              드려 죄송합니다. 수령하신 상품에 문제가 있는 경우 번거로우시겠지만
              고객센터(1600-4949 / 평일 09:00~19:00, 토요일 09:00~16:00, 공휴일
              09:00~18:00)로 연락 주시면 확인 후 처리 도와 드리고 있으니 이용에
              참고 부탁드리겠습니다. 소중한 말씀 귀담아 듣고, 계속 발전 할 수
              있는 배민상회가 되겠습니다. 감사합니다. 배민상회 드림
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductReview;
