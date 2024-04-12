import Cart from "../components/Cart";
import {connect} from 'react-redux';
import { deleteFromCart, updateQuantity } from "../service/actions/action";

const mapStateToProps = (state) =>({
    cartItems : state.cart.cartData,
});

const mapDispatchToProps = (dispatch) =>({
    deleteFromCarthandler: (cartItemId) => dispatch(deleteFromCart(cartItemId)),
    updateProductQuantity:(id, newQuantity)=>dispatch(updateQuantity(id, newQuantity))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);