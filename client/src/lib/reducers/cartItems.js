export const cartItems = (state = [], action) => {
  switch (action.type) {
    case "PRODUCT_ADDED_TO_CART":
      return addToCart(state, action.payload.product);
    default:
      return state;
  }
};

const addToCart = (state, product) => {
  const productFound = state.find((item) => {
    return item._id === product._id;
  });

  if (productFound) {
    return state.map((item) => {
      if (item._id === product._id) {
        const newQuantity = item.quantity + 1;
        return Object.assign({}, item, { quantity: newQuantity });
      } else {
        return item;
      }
    });
  } else {
    return state.concat(Object.assign({}, product, { quantity: 1 }));
  }
};
