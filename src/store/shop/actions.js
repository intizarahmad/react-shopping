
import { fetchProductList } from '../../services/products.service';

const MODULE_NAME = '[SHOP]';

export const ActionTypes = {
    FETCH_PRODUCT_LIST: MODULE_NAME + 'FETCH_PRODUCT_LIST',
    FETCH_PRODUCT_LIST_SUCCESS: MODULE_NAME + 'FETCH_PRODUCT_LIST_SUCCESS',
    FETCH_PRODUCT_LIST_FAILED: MODULE_NAME + 'FETCH_PRODUCT_LIST_FAILED',
    UPDATE_CURRENT_PAGE: MODULE_NAME + 'FETCH_PRODUCT_LIST_FAILED',
};

export const fetchProductListAction = (page) => dispatch => {
  dispatch({ type: ActionTypes.FETCH_PRODUCT_LIST });
  fetchProductList(page)
    .then(( data) => {
      dispatch({ type: ActionTypes.FETCH_PRODUCT_LIST_SUCCESS, payload: data });
      //dispatch({ type: ActionTypes.UPDATE_CURRENT_PAGE});
    })
    .catch(err => {
      dispatch({
        type: ActionTypes.FETCH_PRODUCT_LIST_FAILED,
        payload: 'Error'
      });
    });
};