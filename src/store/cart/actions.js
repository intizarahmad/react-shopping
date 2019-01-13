const MODULE_NAME = '[CART]';

export const ActionTypes = {
  UPDATE_CART: MODULE_NAME + 'UPDATE_CART'
};

export const addToCart = (productID) => (dispatch, getState) => {
  let {cart, shop } = getState();
  let cartItems = [...cart.items];
  let products = [...shop.productList.data];
  
  let productFound =cartItems.find((item)=>{
    return item.id===productID;
  });
  if(productFound){
    cartItems.map((item, index)=>{
      if(item.id===productID){
        cartItems[index].quantity = cartItems[index].quantity+1;
      }
    });
  }else{
    let itemDetail = products.find(product=>product.id === productID );
    itemDetail.quantity = 1;
    cartItems.push(itemDetail);
  }
  dispatch({ type: ActionTypes.UPDATE_CART , payload:cartItems });
};

export const removeFromCart = (productID) => (dispatch, getState) => {
  let {cart, shop } = getState();
  let cartItems = [...cart.items];
  
  let productFound =cartItems.find((item)=>{
    return item.id === productID;
  });
  if(productFound){
    if(productFound.quantity == 1 ){
      cartItems =  cartItems.filter(item=>item.id !=productID)
    }else{
      cartItems.map((item, index)=>{
        if(item.id === productID ){
          cartItems[index].quantity = cartItems[index].quantity-1;
        }
      });
    }
  }
  dispatch({ type: ActionTypes.UPDATE_CART , payload:cartItems });
};