import { ActionTypes } from './actions';

const initialState = {
    productList: {
    data: [],
    isLoading: false,
    error: null,
  },
  currentPageNumber: 0,
 
};

const shopReducer = (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case ActionTypes.FETCH_PRODUCT_LIST:
            return {
            ...state,
            productList: {
                ...state.productList,
                isLoading: true,
                error: null
            }
        }
        case ActionTypes.FETCH_PRODUCT_LIST_SUCCESS:
        let currentProducts = state.productList.data.concat(action.payload);
            return {
            ...state,
            productList: {
                data: currentProducts,
                isLoading: false,
                error: null
            }, 
            currentPageNumber: state.currentPageNumber+1
        }

        case ActionTypes.FETCH_PRODUCT_LIST_FAILED:
            return {
            ...state,
            productList: {
                ...state.productList,
                isLoading: false,
                error:'Some error occured'
            }
        }
        case ActionTypes.UPDATE_CURRENT_PAGE: 
        const {currentPageNumber }= state;
        return {
            ...state,
            currentPageNumber: currentPageNumber+1
        }
        default:
          return state;
    }
};
export default shopReducer;