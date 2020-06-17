import React from "react";
import Cart from "./Cart.js";
import ProductList from "./ProductList.js";
import AddForm from "./AddForm.js";
// import data from "../lib/data.js";
import axios from "axios";

class App extends React.Component {
  state = {
    products: [],
  };
  componentDidMount() {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  }

  // TODO write a generic 'onSubmit' method, and the 'type' argument will determine if
  // we call addProduct or editProduct
  handleAddProduct = (data) => {
    fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          products: this.state.products.concat(data),
        });
      });
  };

  // TODO extract handleAddProduct to AddProduct
  // TODO add editProduct method

  handleDelete = (id) => {
    axios.delete(`/api/products/${id}`).then((_) => {
      this.setState((prevState) => {
        const newProducts = prevState.products.filter((product) => {
          return product._id !== id;
        });
        return {
          products: newProducts,
        };
      });
    });
  };

  render() {
    return (
      <div id="app">
        <Cart />
        <main>
          <ProductList
            products={this.state.products}
            onDelete={this.handleDelete}
          />
          <AddForm isOpen={true} onAddProduct={this.handleAddProduct} />
        </main>
      </div>
    );
  }
}

export default App;
