import { products } from "./products.js";
import { cartItems } from "./cartItems.js";

export const rootReducer = (state = {}, action) => {
  return {
    products: products(state.products, action),
    cartItems: cartItems(state.cartItems, action),
  };
};
