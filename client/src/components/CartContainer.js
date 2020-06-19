import { connect } from 'react-redux'
import Cart from './Cart.js'

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems  
  }
}

export default connect(mapStateToProps, null)(Cart)
