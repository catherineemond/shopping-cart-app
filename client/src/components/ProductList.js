import React from "react";
import Product from "./Product.js";

const ProductList = ({ products }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>

      {products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </div>
  );
};

export default ProductList;
