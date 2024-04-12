import {cartItems, productReducer} from "./reducers";
import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form"

export default combineReducers({
    cart: cartItems,
    form:formReducer,
    products:productReducer
});