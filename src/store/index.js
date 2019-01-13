import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Import reducers 
import shop from './shop/reducer';
import cart from './cart/reducer';

const appReducer = combineReducers({
    shop,
    cart
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

function configureStore(preloadedState) {
  const middlewares = [];
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares, thunkMiddleware)),
  );
}

export default configureStore();