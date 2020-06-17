import React from "react";
import Product from "./Product.js";

const ProductList = ({ onDelete, products, onEdit, onAddToCart }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>

      {products.map((product) => {
        return (
          <Product
            onDelete={onDelete}
            onEdit={onEdit}
            onAddToCart={onAddToCart}
            key={product._id}
            {...product}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
