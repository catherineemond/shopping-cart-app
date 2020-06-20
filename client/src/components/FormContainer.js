import { connect } from "react-redux";
import Form from "./Form.js";
import axios from "axios";

const editHelper = (dispatch, data, id, cb) => {
  if (data.quantity < 0) {
    return;
  }

  const productId = id;

  axios.put(`/api/products/${productId}`, data).then(({ data }) => {
    dispatch({
      type: "PRODUCT_UPDATED",
      payload: { product: data },
    });
    cb();
  });
};

const addHelper = (dispatch, data, cb) => {
  axios
    .post("/api/products", data)
    .then((response) => response.data)
    .then((product) => {
      dispatch({
        type: "PRODUCT_ADDED",
        payload: { product },
      });
      cb();
    });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (data, cb) => {
      if (ownProps.type === "Add") {
        addHelper(dispatch, data, cb);
      } else if (ownProps.type === "Update") {
        editHelper(dispatch, data, ownProps._id, cb);
      }
    },
  };
};

export default connect(null, mapDispatchToProps)(Form);
