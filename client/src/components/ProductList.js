import React from "react";
import ProductContainer from "./ProductContainer.js";

class ProductList extends React.Component {
  componentDidMount() {
    this.props.onFetchProducts();
  }

  render() {
    return (
      <div className="product-listing">
        <h2>Products</h2>
        {this.props.products.map((product) => {
          return <ProductContainer key={product._id} {...product} />;
        })}
      </div>
    );
  }
}

export default ProductList;
