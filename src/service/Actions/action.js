import {ADD_TO_CART, ADD_PRODUCT, DELETE_PRODUCT, DELETE_FROM_CART, UPDATE_QUANTITY, UPDATE_PRODUCT} from "../constants"

// Actions that will take a parameter and returns action type and payload.
export const addProduct = (data) =>{
    return {
        type:ADD_PRODUCT,
        data: data
        
    }
}

export const deleteProduct = (id)=>{
    return{
        type: DELETE_PRODUCT,
        id:id
    }
}

export const updateProduct = (productId, data) =>{
    return {
        type:UPDATE_PRODUCT,
        id: productId,
        data
    }
}
export const addToCart = (data) =>{
    return{

        type:ADD_TO_CART,
        data:{...data, quantity:1}
    }
}

export const deleteFromCart = (id) =>{
    return{
        type:DELETE_FROM_CART,
        id:id
    }
}

export const updateQuantity =(id, newQuantity) =>{
    return{
        type:UPDATE_QUANTITY,
        id,
        newQuantity
    }
}