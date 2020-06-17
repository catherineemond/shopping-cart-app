import React from "react";
import CartTable from "./CartTable.js";

class Cart extends React.Component {
  render() {
    if (this.props.cartItems.length === 0) {
      return (
        <div className="cart">
          <h2>Your Cart</h2>
          <p>Your cart is empty</p>
          <p>Total: $0</p>
          <a className="button checkout disabled">Checkout</a>
        </div>
      );
    } else {
      return (
        <div class="cart">
          <h2>Your Cart</h2>
          <CartTable cartItems={this.props.cartItems} />
          <a class="button checkout">Checkout</a>
        </div>
      );
    }
  }
}

export default Cart;
