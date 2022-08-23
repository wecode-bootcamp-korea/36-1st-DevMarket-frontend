import '../ProductDetail/ProductDetail.scss';

function ProductDetail() {
  return (
    <div className="productDetail">
      {DETAIL_IMAGES.map(({ id, src, alt }) => (
        <img key={id} src={src} alt={alt} />
      ))}
    </div>
  );
}

export default ProductDetail;

const DETAIL_IMAGES = [
  { id: 1, src: './images/1.jpg', alt: 'detail' },
  { id: 2, src: './images/2.jpg', alt: 'detail' },
  { id: 3, src: './images/3.jpg', alt: 'detail' },
  { id: 4, src: './images/4.jpg', alt: 'detail' },
];
