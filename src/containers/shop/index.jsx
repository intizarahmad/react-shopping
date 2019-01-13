import React, { Component , Fragment} from 'react';
import { toast } from 'react-toastify';
import { connect } from "react-redux";
import PageTitle from '../../components/PageTitle';
import Products from '../../components/Products';
import Loader from '../../components/Loader';
import { productListSelector, currentPageNumber , isLoading} from '../../store/shop/selectors';
import {fetchProductListAction} from '../../store/shop/actions';
import { addToCart } from '../../store/cart/actions';
class Shop extends Component {
    
    constructor(props){
        super(props);
        this.state ={}
        
        window.onscroll = () => {
        const {fetchProductListAction, isLoading, currentPageNumber } = this.props;
  
        if (isLoading || currentPageNumber===0 ) {
            return;
        } 
        if (
          window.innerHeight + document.documentElement.scrollTop
          === document.documentElement.offsetHeight
        ) {
            fetchProductListAction(currentPageNumber);
        }
      };
    }
    componentDidMount() {
        const {productsList, fetchProductListAction, currentPageNumber } = this.props;
        if (!productsList || productsList.length === 0) {
          fetchProductListAction(currentPageNumber);
        }
    }
    addToCartHandler = (productId)=>{
        const {addToCart } = this.props;
        addToCart(productId);
        toast.success("Item added successfully");
    }
    render() {
        const {productsList, isLoading } = this.props;
        return (
            <Fragment>
               <PageTitle title="Products Page" />
               <Products productsList= {productsList} addtoCart= {this.addToCartHandler} />
               {
                isLoading && <Loader />
               }
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
     productsList: productListSelector(state),
     isLoading: isLoading(state),
     currentPageNumber: currentPageNumber(state)
  });
  
  const mapDispatchToProps = {
    fetchProductListAction,
    addToCart
  };
  export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Shop);