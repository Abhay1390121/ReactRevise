import {ADD_TO_CART, ADD_PRODUCT} from "../constants"
const initialCartState={
    cartData:[]
}

const initialProductState = {
    product:[]
}

export function cartItems(state=initialCartState, action){
    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state,
                cartData: action.data
            }
            // break;
            default:
                return state
    }
}

export const productReducer = (state=initialProductState, action) =>{
    switch(action.type){
        case ADD_PRODUCT:
            return{
                ...state,
                product:[...state.product, action.data]
            };
            default:
                return state
    }

}
