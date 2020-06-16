import React from "react";
import Form from './Form.js'

class AddForm extends React.Component {
  render() {
    return (
      // add/remove 'visible' from class to hide/show button
      <div className="add-form visible">
        <p><a class="button add-product-button">Add A Product</a></p>
        <h3>Add Product</h3>
        <Form onAddProduct={this.props.onAddProduct} />
      </div>
    );
  }
}

export default AddForm;
