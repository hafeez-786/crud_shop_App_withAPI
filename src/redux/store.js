import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducer/rootReducer';

const middleWares = [reduxThunk];

const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middleWares), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
    //applyMiddleware(...middleWares),
)
export default store