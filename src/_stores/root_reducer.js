import { combineReducers } from 'redux';
import signup from '../_reducers/reducer_signup';
const rootReducer = combineReducers({
    signup: signup
});
export default rootReducer;