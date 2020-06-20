import { connect } from "react-redux";
import ProductList from "./ProductList.js";
import axios from "axios";

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProducts: () => {
      axios
        .get("/api/products")
        .then((response) => response.data)
        .then((products) =>
          dispatch({
            type: "PRODUCTS_FETCHED",
            payload: { products },
          })
        );
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
