import { combineReducers } from 'redux';
import logReducer from './logReducer';
import counter from './counterReducer';
import {orderReducer} from './orderReducer';
const rootReducer = combineReducers({
    orderReducer:orderReducer,
    counter: counter,
    logReducer:logReducer
});
export default rootReducer;
