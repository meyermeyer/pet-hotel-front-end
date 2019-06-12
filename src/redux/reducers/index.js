import {combineReducers} from 'redux';
import pet from './petReducer';
import owner from './ownerReducer';

const rootReducer = combineReducers({
	pet,
	owner,
});

export default rootReducer;