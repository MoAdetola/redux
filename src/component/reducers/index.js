
import counterReducer from  '../reducers/counter';
import {combineReducers} from 'redux'



const AllReducers = combineReducers({
    counter: counterReducer,

    
});
export default AllReducers