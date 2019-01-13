import React, { Component , Fragment} from 'react';
import { toast } from 'react-toastify';
import { connect } from "react-redux";
import PageTitle from '../../components/PageTitle';
import CartDetail from '../../components/CartDetail';
import { getCartItemsSeletor } from '../../store/cart/selectors';
import { removeFromCart } from '../../store/cart/actions';

class Cart extends Component {
    constructor(props){
        super(props);
        this.state ={}
    }
   
    removeFromCartHandler = (productId)=>{
        const {removeFromCart } = this.props;
        removeFromCart(productId);
        toast.success("Item deleted successfully");
    }
    render() {
        const {cartItems} = this.props;
        return (
            <Fragment>
               <PageTitle title="Shopping Cart" />
               <CartDetail cartItems=  {cartItems} removeCartItem = {this.removeFromCartHandler}/>
            </Fragment>
        );
    }
}
const mapStateToProps = state => ({
    cartItems : getCartItemsSeletor(state)
 });
 
 const mapDispatchToProps = {
   removeFromCart
 };
 export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Cart);

