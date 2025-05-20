import ProductCard from "./ProductCard";
import productPlaceholder from "../assets/product-placeholder.avif";

function ProductList() {
  // Products
  const products = [
    {
      id: 1,
      title: "Product 1",
      price: "20$",
      placeholder: productPlaceholder,
    },
    {
      id: 2,
      title: "Product 2",
      price: "20$",
      placeholder: productPlaceholder,
    },
    {
      id: 3,
      title: "Product 3",
      price: "15$",
      placeholder: productPlaceholder,
    },
    {
      id: 4,
      title: "Product 4",
      price: "90$",
      placeholder: productPlaceholder,
    },
    {
      id: 5,
      title: "Product 5",
      price: "40$",
      placeholder: productPlaceholder,
    },
    {
      id: 6,
      title: "Product 6",
      price: "10$",
      placeholder: productPlaceholder,
    },
  ];

  return (
    <>
      <div className="container-xxl">
        <div className="row p-3">
          {products.map((product) => (
            <div className="col-4 my-3" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductList;
