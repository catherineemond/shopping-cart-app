import { connect } from 'react-redux'
import Product from './Product.js'
import axios from 'axios'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDelete: () => {
      axios.delete(`/api/products/${ownProps._id}`).then((_) => {
        dispatch({
          type: "PRODUCT_DELETED",
          payload: { productId: ownProps._id },
        });
      });
    },
    onAddToCart: (data) => {
      axios.put(`/api/products/${ownProps._id}`, data).then(({ data }) => {
        dispatch({
          type: "PRODUCT_ADDED_TO_CART",
          payload: { product: data },
        });
      });
    }
  }
}

export default connect(null, mapDispatchToProps)(Product)
