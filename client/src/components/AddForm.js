import React from "react";
import Form from "./Form.js";

class AddForm extends React.Component {
  // TODO initialize state for form to be hidden

  render() {
    return (
      // TODO add/remove 'visible' from class to hide/show button
      <div className="add-form visible">
        {/* TODO onClick property on the button to hide/show form */}
        <p>
          <a className="button add-product-button">Add A Product</a>
        </p>
        <h3>Add Product</h3>
        <Form onSubmit={this.props.onAddProduct} type={"Add"} />
      </div>
    );
  }
}

export default AddForm;
