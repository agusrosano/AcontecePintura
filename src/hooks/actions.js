export const ADD_TO_CART = 'ADD_TO_CART';

export const addToCart = (painting) => ({
  type: ADD_TO_CART,
  payload: painting,
});


export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});


export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';

export const incrementQuantity = (id) => ({
  type: INCREMENT_QUANTITY,
  payload: id,
});

export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';

export const decrementQuantity = (id) => ({
  type: DECREMENT_QUANTITY,
  payload: id,
});