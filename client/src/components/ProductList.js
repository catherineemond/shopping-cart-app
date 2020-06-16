import React from "react";
import Product from "./Product.js";

const ProductList = ({ onDelete, products }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>

      {products.map((product) => {
        return <Product onDelete={onDelete} key={product._id} {...product} />;
      })}
    </div>
  );
};

export default ProductList;
