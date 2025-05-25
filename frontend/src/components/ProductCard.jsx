function ProductCard({ product }) {
  return (
    <>
      <div className="card border-0">
        <img
          className="rounded-3"
          src={product.placeholder}
          alt={product.title}
        />
        <div className="card-body bg-light rounded-3">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.price}$</p>
          <a href="#" className="btn btn-primary">
            Add to Cart
          </a>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
