import React from 'react'

class Form extends React.Component {
  state = {
    title: this.props.title, 
    price: this.props.price, 
    quantity: this.props.quantity
  }

  render() {
    return (
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input type="text" id="product-name" name='title' value={this.state.title} onChange={this.props.handleOnChange} />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input type="text" id="product-price" name='price' value={this.state.price} onChange={this.props.handleOnChange}/>
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" name='quantity' value={this.state.quantity} onChange={this.props.handleOnChange}/>
        </div>

        <div className="actions form-actions">
          <a className="button" onClick={this.props.handleSubmit}>Add</a>
          <a className="button">Cancel</a>
        </div>
      </form>
    )
  }
}

export default Form