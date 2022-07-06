import { combineReducers } from 'redux';
import bestReducer from './best-seller/best-seller.reducer';

export default combineReducers({
    initial: bestReducer,
});