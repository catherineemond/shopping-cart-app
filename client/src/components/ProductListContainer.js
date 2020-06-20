import { connect } from "react-redux";
import ProductList from "./ProductList.js";

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProducts: () => {
      fetch("/api/products")
        .then((response) => response.json())
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
