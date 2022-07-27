import { combineReducers } from 'redux';
import userReducers from './reducer';
import {productReducer, selectedProductReducer} from './productReducer';

const rootReducer = combineReducers({
    data: userReducers,
    allProducts: productReducer,
    product: selectedProductReducer,
})

export default rootReducer