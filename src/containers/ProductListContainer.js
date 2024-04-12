import ProductList from "../components/ProductList";
import { connect } from "react-redux";
import { addToCart, deleteProduct } from "../service/actions/action";

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
  removeProduct: (productId) => dispatch(deleteProduct(productId)),
});
const mapStateToProps = (state) => ({
  products: state.products.product,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
