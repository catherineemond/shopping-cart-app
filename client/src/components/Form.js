import React from "react";

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

  handleCancel = (event) => {
    event.preventDefault();
    this.reset();
    this.props.onCancel();
  };

  reset = () => {
    this.setState({
      title: "",
      price: "",
      quantity: "",
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
      this.props.onSubmit(data, () => {
        this.reset();
        this.props.hideForm();
      });
    } else if (this.props.type === "Update") {
      this.props.onSubmit(data, () => {
        this.props.hideForm();
      });
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
          <a className="button" onClick={this.handleCancel}>
            Cancel
          </a>
        </div>
      </form>
    );
  }
}

export default Form;
