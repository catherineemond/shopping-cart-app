import React from "react";
import CartTable from "./CartTable.js";
import store from "../lib/store.js";

class Cart extends React.Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    if (store.getState().cartItems.length === 0) {
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
          <CartTable cartItems={store.getState().cartItems} />
          <a class="button checkout">Checkout</a>
        </div>
      );
    }
  }
}

export default Cart;
