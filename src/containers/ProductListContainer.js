import ProductList  from "../components/ProductList";
import {connect} from "react-redux";
import {addToCart} from "../service/Actions/action";

const mapDispatchToProps = dispatch =>({
    addToCartHandler : data =>dispatch(addToCart(data))
})
const mapStateToProps = state =>{
    console.log('productlist', state);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
