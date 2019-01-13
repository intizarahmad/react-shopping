
import { createSelector } from 'reselect';
const cartItems = state => state.cart.items;

export const getCartItemsSeletor = createSelector(
  [cartItems],
  (cartItems) => {
    if (cartItems && cartItems.length > 0) {
        return cartItems;
    } else {
      return [];
    }
  }
);

export const totalItemSeletor =createSelector(
  [cartItems],
  (cartItems) => {
    return cartItems.reduce((acc, item)=> acc+item.quantity, 0)
  }
);

export const totalCostSeletor =createSelector(
  [cartItems],
  (cartItems) => {
    return cartItems.reduce((acc, item)=> acc+(item.price*item.quantity), 0)
  }
);