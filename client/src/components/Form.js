import React from "react";

class Form extends React.Component {
  // DONE populate form fields with Product props
  state = {
    title: this.props.title || "",
    price: this.props.price || "",
    quantity: this.props.quantity || "",
  };

  // DONE moved from AddForm
  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // DONE moved from AddForm
  handleSubmit = (e) => {
    e.preventDefault();

    // TODO pass in 'props.type' to generic 'onSubmit' method
    // and push logic up to App.js
    this.props.onSubmit(this.state, this.props.type);

    this.setState({
      title: "",
      price: "",
      quantity: "",
    });
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
