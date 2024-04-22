import {ADD_TO_CART, ADD_PRODUCT, DELETE_PRODUCT, DELETE_FROM_CART, UPDATE_QUANTITY, UPDATE_PRODUCT} from "../constants"

//initial state of cartdata in redux store.
const initialCartState={
    cartData:[]
}

// initial state of product list in redux store.
const initialProductState = {
    product:[]
}

// Reducer to do operation on cart: take two parameter initial state of store and action.
// Based on action type it update and return updated state.
export function cartReducer(state=initialCartState, action){
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


// Reducer to do operation on cart: take two parameter initial state of store and action.
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
                product:state.product.filter((product)=>product.id !== action.id),
            }; 
        case UPDATE_PRODUCT:
            return{
                ...state,
                product: state.product.map(item =>
                    item.id === action.id
                      ? { ...action.data}
                      : item
                    )

            }
        default:
            return state
    }

}
