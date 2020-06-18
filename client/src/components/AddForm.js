import React from "react";
import Form from "./Form.js";

class AddForm extends React.Component {
  // TODO initialize state for form to be hidden
  state = {
    formVisible: false,
  };

  hideForm = () => {
    this.setState({ formVisible: false });
  };

  handleCancel = () => {
    this.hideForm();
  };

  render() {
    return (
      <div className={`add-form ${this.state.formVisible ? "visible" : null}`}>
        <p>
          <a
            className="button add-product-button"
            onClick={() => {
              this.setState({ formVisible: true });
            }}
          >
            Add A Product
          </a>
        </p>
        <h3>Add Product</h3>
        <Form
          onSubmit={this.props.onAddProduct}
          onCancel={this.handleCancel}
          hideForm={this.hideForm}
          type={"Add"}
        />
      </div>
    );
  }
}

export default AddForm;
