import {ADD_TO_CART, ADD_PRODUCT, DELETE_PRODUCT, DELETE_FROM_CART, UPDATE_QUANTITY} from "../constants"
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
                cartData: [...state.cartData, action.data]
            }
        case DELETE_FROM_CART:
            return{
                ...state,
                cartData: state.cartData.filter(items => items.id !== action.id)
            }
        case UPDATE_QUANTITY:{
            return {
                ...state,
                cartData: state.cartData.map(item =>
                  item.id === action.id
                    ? { ...item, quantity: action.newQuantity }
                    : item
                )
              };
        }
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
        case DELETE_PRODUCT:
            return{
                ...state,
                product:state.product.filter((product)=>product.id !== action.id)
            }; 
            default:
                return state
    }

}
