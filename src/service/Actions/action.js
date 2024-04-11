import {ADD_TO_CART, ADD_PRODUCT} from "../constants"
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