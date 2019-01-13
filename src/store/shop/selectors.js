
import { createSelector } from 'reselect';
const productList = state => state.shop.productList;
export const isLoading = state => state.shop.productList.isLoading;
export const currentPageNumber = state => state.shop.currentPageNumber;

export const productListSelector = createSelector(
  [productList],
  (productList) => {
    if (productList && productList.data && productList.data.length > 0) {
        return productList.data
    } else {
      return [];
    }
  }
);

