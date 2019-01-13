import React, { Component } from 'react';
import { connect } from "react-redux";
import HeaderComponent from '../../components/Header';
import { totalCostSeletor, totalItemSeletor } from '../../store/cart/selectors';
class Header extends Component {
    render() {
        const {cost,quantity } = this.props;
        return (
            <div className="site-branding-area">
               <HeaderComponent cost={cost} quantity={quantity}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cost: totalCostSeletor(state),
    quantity: totalItemSeletor(state)
 });
 

 export default connect(
   mapStateToProps
)(Header);