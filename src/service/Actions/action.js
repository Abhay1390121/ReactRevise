import {ADD_TO_CART, ADD_PRODUCT, DELETE_PRODUCT, DELETE_FROM_CART, UPDATE_QUANTITY} from "../constants"
export const addToCart = (data) =>{
    return{
        type:ADD_TO_CART,
        data:data
    }
}

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