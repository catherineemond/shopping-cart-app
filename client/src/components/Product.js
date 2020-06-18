import React from "react";
import Form from "./Form.js";
import store from "../lib/store.js";
import axios from "axios";

class Product extends React.Component {
  state = {
    editFormOpen: false,
  };

  hideForm = () => {
    this.setState({ editFormOpen: false });
  };

  handleCancel = () => {
    this.hideForm();
  };

  handleDelete = () => {
    const productId = this.props._id;

    axios.delete(`/api/products/${productId}`).then((_) => {
      store.dispatch({
        type: "PRODUCT_DELETED",
        payload: { productId },
      });
    });
  };

  handleAddToCart = () => {
    if (this.props.quantity <= 0) {
      return;
    }

    const data = Object.assign(
      {},
      {
        _id: this.props._id,
        title: this.props.title,
        quantity: String(this.props.quantity - 1),
        price: this.props.price,
      }
    );

    axios.put(`/api/products/${this.props._id}`, data).then(({ data }) => {
      store.dispatch({
        type: "PRODUCT_ADDED_TO_CART",
        payload: { product: data },
      });
    });
  };

  render() {
    return (
      <div className="product">
        <div className="product-details">
          <h3>{this.props.title}</h3>
          <p className="price">{this.props.price}</p>
          <p className="quantity">{this.props.quantity} left in stock</p>

          {!this.state.editFormOpen && (
            <div className="actions product-actions">
              <a
                className={`button add-to-cart ${
                  this.props.quantity ? "" : "disabled"
                }`}
                onClick={this.handleAddToCart}
              >
                Add to Cart
              </a>
              <a
                className="button edit"
                onClick={() => this.setState({ editFormOpen: true })}
              >
                Edit
              </a>
            </div>
          )}

          <a className="delete-button" onClick={this.handleDelete}>
            <span>X</span>
          </a>
        </div>

        {/* TODO show/hide edit form based on state.editFormOpen */}
        {/* TODO extract to EditForm component? */}

        {this.state.editFormOpen && (
          <div className="edit-form">
            <h3>Edit Product</h3>
            <Form
              // onSubmit={this.props.onEdit}
              onCancel={this.handleCancel}
              hideForm={this.hideForm}
              type={"Update"}
              {...this.props}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Product;
