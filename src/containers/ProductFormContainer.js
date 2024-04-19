import ProductForm from "../components/ProductForm";
import { connect } from "react-redux";
import { addProduct } from "../service/Actions/action";

const mapStateToProps = (state) => ({
  products: state.products.product,
  initialValues: {
    id: Math.random().toString(20).slice(2, 8),
    productName:'',
    description:'',
    price: '',
    category:'',
  },
});

const mapDispatchToProps = (dispatch) => ({
  submitFormHandler: (data) => dispatch(addProduct(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
