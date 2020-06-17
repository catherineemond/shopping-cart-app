import React from "react";
import CartItem from "./CartItem.js";

class CartTable extends React.Component {
  calcTotal() {
    // let total = 0;

    // this.props.cartItems.forEach((item) => {
    //   total += item.quantity * item.price;
    // });

    return this.props.cartItems.reduce((memo, item) => {
      return (memo += item.quantity * item.price);
    }, 0);

    // return total;
  }

  render() {
    return (
      <table class="cart-items">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {this.props.cartItems.map((cartItem) => {
            return <CartItem key={cartItem._id} {...cartItem} />;
          })}

          <tr>
            <td colspan="3" className="total">
              Total: ${this.calcTotal()}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default CartTable;
