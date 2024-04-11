import ProductForm from "../components/ProductForm";
import {connect} from "react-redux";
import { addProduct } from "../service/Actions/action";

const mapStateToProps=(state)=>({
    initialValues: {
        id: (Math.floor(Math.random()*1000)+1)
      }
})

// const mapDispatchToProps = (dispatch) =>({
//   submitFormHandler : data =>dispatch(addProduct(data))
// })



export default connect(mapStateToProps)(ProductForm);