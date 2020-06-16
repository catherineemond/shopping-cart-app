import React from "react";
import Form from './Form.js'

class AddForm extends React.Component {
  state = {
    title: '',
    price: '', 
    quantity: '' 
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddProduct(this.state) 
    this.setState({
      title: '',
      price: '', 
      quantity: '' 
    })
  }

  render() {
    return (
      <div className="add-form visible">
        <p>
          <a className="button add-product-button">Add A Product</a>
        </p>
        <h3>Add Product</h3>
        <Form  onChange={this.handleOnChange} onSubmit={this.handleSubmit}/>
        {/* <form>
          <div className="input-group">
            <label htmlFor="product-name">Product Name</label>
            <input type="text" id="product-name" name='title' value={this.state.title} onChange={this.handleOnChange} />
          </div>

          <div className="input-group">
            <label htmlFor="product-price">Price</label>
            <input type="text" id="product-price" name='price' value={this.state.price} onChange={this.handleOnChange}/>
          </div>

          <div className="input-group">
            <label htmlFor="product-quantity">Quantity</label>
            <input type="text" id="product-quantity" name='quantity' value={this.state.quantity} onChange={this.handleOnChange}/>
          </div>

          <div className="actions form-actions">
            <a className="button" onClick={this.handleSubmit}>Add</a>
            <a className="button">Cancel</a>
          </div>
        </form> */}
      </div>
    );
  }
}

// const AddForm = (props) => {
//   if (props.isOpen) {
   
//   } else {
//     return (
//       <p>
//         <a className="button add-product-button">Add A Product</a>
//       </p>
//     );
//   }
// };

export default AddForm;
