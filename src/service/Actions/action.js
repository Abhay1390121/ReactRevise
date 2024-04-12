import {ADD_TO_CART, ADD_PRODUCT, DELETE_PRODUCT} from "../constants"
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