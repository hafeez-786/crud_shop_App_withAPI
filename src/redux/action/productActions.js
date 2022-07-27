import * as types from './actionType';

export const setProducts = (products) => {
    return {
        type: types.SET_PRODUCTS,
        payload: products
    }
}


export const selectedProduct = (product) => {
    return {
        type: types.SELECTED_PRODUCTS,
        payload: product
    }
}


export const removeSelectedProduct = () => {
    return {
        type: types.REMOVE_SELECTED_PRODUCTS,
    }
}



