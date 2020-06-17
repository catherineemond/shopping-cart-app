import React from "react";
// DONE import Form
import Form from "./Form.js";

class Product extends React.Component {
  state = {
    editFormOpen: false,
  };

  // TODO implement showForm method

  handleDelete = () => {
    this.props.onDelete(this.props._id);
  };

  render() {
    return (
      <div className="product">
        <div className="product-details">
          <h3>{this.props.title}</h3>
          <p className="price">{this.props.price}</p>
          <p className="quantity">{this.props.quantity} left in stock</p>
          <div className="actions product-actions">
            {/* TODO clicking 'edit' button shows the form and hides these two buttons */}
            <a className="button add-to-cart">Add to Cart</a>
            <a className="button edit" onClick={this.showForm}>
              Edit
            </a>
          </div>
          <a className="delete-button" onClick={this.handleDelete}>
            <span>X</span>
          </a>
        </div>

        {/* TODO show/hide edit form based on state.editFormOpen */}
        {/* TODO extract to EditForm component? */}
        <div className="edit-form">
          <h3>Edit Product</h3>

          <Form
            onSubmit={this.props.onEditProduct}
            type={"Update"}
            // DONE pass in current Product values
            {...this.props}
          />
        </div>
      </div>
    );
  }
}

export default Product;
