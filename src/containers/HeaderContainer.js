import Header from "../components/Header";
import {connect} from 'react-redux';

const mapStateToProps= (state) =>({
    products:state.products.product,
    cartItems:state.cart.cartData
})

export default connect(mapStateToProps)(Header);