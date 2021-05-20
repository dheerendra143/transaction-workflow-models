import entityReducer from './entityList';
import {combineReducers} from 'redux';


const allRerducers = combineReducers({
    entity: entityReducer
})

export default allRerducers;