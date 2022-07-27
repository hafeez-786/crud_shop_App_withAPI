import * as types from "../action/actionType";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_PRODUCTS:
      return {
         ...state,
         products: payload
      }
    default:
      return state;
  }
};


export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case types.SELECTED_PRODUCTS:
      return {
         ...state,
         ...payload
      }
    case types.REMOVE_SELECTED_PRODUCTS:
        return {} // it will be remove old product by item selection
    default:
      return state;
  }
};
