import ProductForm from "../components/ProductForm";
import { connect } from "react-redux";
import { addProduct } from "../service/actions/action";

const mapStateToProps = (state) => ({
  initialValues: {
    id: Math.random().toString(20).slice(0, 5),
  },
});

const mapDispatchToProps = (dispatch) => ({
  submitFormHandler: (data) => dispatch(addProduct(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
