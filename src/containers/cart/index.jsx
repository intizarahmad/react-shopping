import React, { Component , Fragment} from 'react';
import { toast } from 'react-toastify';
import { connect } from "react-redux";
import PageTitle from '../../components/PageTitle';
import CartDetail from '../../components/CartDetail';
import { getCartItemsSeletor, totalCostSeletor } from '../../store/cart/selectors';
import { removeFromCart, addOneItem, removeOneItem } from '../../store/cart/actions';

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

    removeOneItemHandler = (productId)=>{
        const {removeOneItem } = this.props;
        removeOneItem(productId);
        toast.success("One item deleted successfully");
    }

    addOneItemHandler = (productId)=>{
        const {addOneItem } = this.props;
        addOneItem(productId);
        toast.success("One item deleted successfully");
    }

    render() {
        const {cartItems, totalCost} = this.props;
        return (
            <Fragment>
               <PageTitle title="Cart Details" />
               <CartDetail 
                totalCost= {totalCost} 
                cartItems=  {cartItems}
                removeCartItem = {this.removeFromCartHandler} 
                removeOneItem = {this.removeOneItemHandler} 
                addOneItem = {this.addOneItemHandler} 
                />
            </Fragment>
        );
    }
}
const mapStateToProps = state => ({
    cartItems : getCartItemsSeletor(state),
    totalCost: totalCostSeletor(state)
 });
 
 const mapDispatchToProps = {
   removeFromCart,
   removeOneItem,
   addOneItem
 };
 export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Cart);

