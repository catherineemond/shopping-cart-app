import React from "react";
import Cart from "./Cart.js";
import ProductList from "./ProductList.js";
import AddForm from "./AddForm.js";
// import data from "../lib/data.js";
import axios from "axios";

class App extends React.Component {
  state = {
    products: [],
    cartItems: [],
  };
  componentDidMount() {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  }

  addToCart = (id) => {
    const productToAdd = this.state.products.find((product) => {
      return product._id === id;
    });

    this.setState((prevState) => {
      const newCartItem = {
        _id: productToAdd._id,
        title: productToAdd.title,
        quantity: 1,
        price: productToAdd.price,
      };

      const productFound = prevState.cartItems.find((product) => {
        return product._id === id;
      });

      let newCartItems;

      if (productFound) {
        newCartItems = prevState.cartItems.map((item) => {
          if (item._id === id) {
            const newQuantity = item.quantity + 1;
            return Object.assign({}, item, { quantity: newQuantity });
          } else {
            return item;
          }
        });
      } else {
        newCartItems = [...prevState.cartItems, newCartItem];
      }

      return {
        // products: prevState.products,
        cartItems: newCartItems,
      };
    });
  };

  handleAddToCart = (id) => {
    const productToAdd = this.state.products.find((product) => {
      return product._id === id;
    });

    if (productToAdd.quantity <= 0) {
      return;
    }

    const newQuantity = productToAdd.quantity - 1;
    const updatedProduct = Object.assign({}, productToAdd, {
      quantity: String(newQuantity),
    });

    this.handleEditProduct(updatedProduct, id);
    this.addToCart(id);
  };

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

  handleEditProduct = (data, id) => {
    if (data.quantity < 0) {
      return;
    }

    axios.put(`/api/products/${id}`, data).then(({ data }) => {
      this.setState((prevState) => {
        const products = prevState.products.map((product) => {
          if (product._id === id) {
            return data;
          } else {
            return product;
          }
        });

        return { products };
      });
    });
  };

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
        <header>
          <h1>The Shop!</h1>

          <Cart cartItems={this.state.cartItems} />
        </header>

        <main>
          <ProductList
            products={this.state.products}
            onDelete={this.handleDelete}
            onAddToCart={this.handleAddToCart}
            onEdit={this.handleEditProduct}
          />
          <AddForm isOpen={true} onAddProduct={this.handleAddProduct} />
        </main>
      </div>
    );
  }
}

export default App;
