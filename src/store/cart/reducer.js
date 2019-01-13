import { ActionTypes } from './actions';

const initialState = {
    items:[]
};

const cartReducer = (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case ActionTypes.UPDATE_CART:
            return {
                ...state, 
                items: action.payload
            };
        default:
          return state;
    }
};
export default cartReducer;