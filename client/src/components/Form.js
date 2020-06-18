import React from "react";
import store from "../lib/store.js";
import axios from "axios";

class Form extends React.Component {
  state = {
    title: this.props.title || "",
    price: this.props.price || "",
    quantity: this.props.quantity || "",
  };

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  reset = () => {
    this.setState({
      title: "",
      price: "",
      quantity: "",
    });
  };

  handleAdd = (data) => {
    fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((product) => {
        store.dispatch({
          type: "PRODUCT_ADDED",
          payload: { product },
        });
      });
  };

  handleEdit = (data) => {
    if (data.quantity < 0) {
      return;
    }

    const productId = this.props._id;

    axios.put(`/api/products/${productId}`, data).then(({ data }) => {
      store.dispatch({
        type: "PRODUCT_UPDATED",
        payload: { product: data },
      });
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      price: this.state.price,
      quantity: this.state.quantity,
    };

    if (this.props.type === "Add") {
      this.handleAdd(data);
      this.reset();
    } else if (this.props.type === "Update") {
      this.handleEdit(data);
    }
  };

  render() {
    return (
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            name="title"
            value={this.state.title}
            onChange={this.handleOnChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            type="text"
            id="product-price"
            name="price"
            value={this.state.price}
            onChange={this.handleOnChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="text"
            id="product-quantity"
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleOnChange}
          />
        </div>

        <div className="actions form-actions">
          <a className="button" onClick={this.handleSubmit}>
            {this.props.type === "Add" ? "Add" : "Update"}
          </a>
          <a className="button">Cancel</a>
        </div>
      </form>
    );
  }
}

export default Form;
