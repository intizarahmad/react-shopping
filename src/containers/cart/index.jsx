import React, { Component , Fragment} from 'react';
import { toast } from 'react-toastify';
import { connect } from "react-redux";
import PageTitle from '../../components/PageTitle';
import CartDetail from '../../components/CartDetail';
import { getCartItemsSeletor, totalCostSeletor } from '../../store/cart/selectors';
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
        const {cartItems, totalCost} = this.props;
        return (
            <Fragment>
               <PageTitle title="Shopping Cart" />
               <CartDetail totalCost= {totalCost}cartItems=  {cartItems} removeCartItem = {this.removeFromCartHandler}/>
            </Fragment>
        );
    }
}
const mapStateToProps = state => ({
    cartItems : getCartItemsSeletor(state),
    totalCost: totalCostSeletor(state)
 });
 
 const mapDispatchToProps = {
   removeFromCart
 };
 export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Cart);

