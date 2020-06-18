import React from "react";
import Product from "./Product.js";
import store from "../lib/store.js";

class ProductList extends React.Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
    fetch("/api/products")
      .then((response) => response.json())
      .then((products) =>
        store.dispatch({
          type: "PRODUCTS_FETCHED",
          payload: { products },
        })
      );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div className="product-listing">
        <h2>Products</h2>
        {store.getState().products.map((product) => {
          return <Product key={product._id} {...product} />;
        })}
      </div>
    );
  }
}

export default ProductList;
