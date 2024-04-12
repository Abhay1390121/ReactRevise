import Cart from "../components/Cart";
import {connect} from 'react-redux';

const mapStateToProps = (state) =>({
    cartItems : state.cart.cartData,
});

export default connect(mapStateToProps)(Cart);