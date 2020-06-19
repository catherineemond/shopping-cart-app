import React from "react";
import Form from "./Form.js";
import FormContainer from './FormContainer.js'

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
        <FormContainer type={"Add"} onCancel={this.handleCancel} hideForm={this.hideForm}/>
      </div>
    );
  }
}

export default AddForm;
