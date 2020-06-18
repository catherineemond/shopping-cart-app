export const products = (state = [], action) => {
  switch (action.type) {
    case "PRODUCTS_FETCHED":
      return state.concat(action.payload.products);
    case "PRODUCT_ADDED":
      return state.concat(action.payload.product);
    case "PRODUCT_UPDATED":
      return state.map((product) => {
        if (product._id === action.payload.product._id) {
          return action.payload.product;
        } else {
          return product;
        }
      });
    case "PRODUCT_DELETED":
      return state.filter((product) => {
        return product._id !== action.payload.productId;
      });
    case "PRODUCT_ADDED_TO_CART":
      return state.map((product) => {
        if (product._id === action.payload.product._id) {
          return action.payload.product;
        } else {
          return product;
        }
      });
    default:
      return state;
  }
};
