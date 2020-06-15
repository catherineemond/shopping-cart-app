import React from "react";
import Cart from "./Cart.js";
import ProductList from "./ProductList.js";
import AddForm from "./AddForm.js";
import data from "../lib/data.js";

class App extends React.Component {
  state = {
    products: [],
  };
  componentDidMount() {
    this.setState({ products: data });
  }
  render() {
    return (
      <div id="app">
        <Cart />
        <main>
          <ProductList products={this.state.products} />
          <AddForm isOpen={true} />
        </main>
      </div>
    );
  }
}

export default App;
