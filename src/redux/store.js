import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from '@redux-devtools/extension';
import app_reducer from './reducer/app_reducer';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(app_reducer, composedEnhancer);
export default store;
