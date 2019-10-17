import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Import reducers 
import shop from './shop/reducer';
import cart from './cart/reducer';

const rootReducer = combineReducers({
    shop,
    cart
});

const store =  createStore(rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware)) ) 
export default store;