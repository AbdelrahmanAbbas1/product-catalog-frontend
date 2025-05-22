import ProductCard from "./ProductCard";
import productPlaceholder from "../assets/product-placeholder.avif";
import FilterBar from "../components/FilterBar";
import { useState } from "react";

function ProductList() {
  // Products
  const allProducts = [
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

  const [products, setProducts] = useState(allProducts);

  const handleChange = (e) => {
    console.log(e.target.value);
    // Still figuring a way to filter
  };

  return (
    <>
      <div className="container-xxl">
        <FilterBar onChange={handleChange} />
        <div className="row p-3">
          {products.map((product) => (
            <div className="col-md-4 my-3" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductList;
