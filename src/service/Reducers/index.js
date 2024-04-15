import {cartItems, productReducer} from "./reducers";
import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form"

//combining multiple reducers into one and exporting reducers
export default combineReducers({
    cart: cartItems,
    form:formReducer,
    products:productReducer
});