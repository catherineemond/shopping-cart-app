import React from "react";
import FormContainer from './FormContainer.js'

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
    this.props.onDelete()
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

    this.props.onAddToCart(data)
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
            <FormContainer type={"Update"} {...this.props} onCancel={this.handleCancel} hideForm={this.hideForm} />
            
          </div>
        )}
      </div>
    );
  }
}

export default Product;
