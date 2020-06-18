import React from "react";
import CartItem from "./CartItem.js";

const CartTable = (props) => {
  const calcTotal = () => {
    return props.cartItems.reduce((memo, item) => {
      return (memo += item.quantity * item.price);
    }, 0);
  };

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
        {props.cartItems.map((cartItem) => {
          return <CartItem key={cartItem._id} {...cartItem} />;
        })}

        <tr>
          <td colspan="3" className="total">
            Total: ${calcTotal()}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CartTable;
