import {combineReducers} from 'redux';
import messages from './messages';
import firebase from './firebase';

const rootReducer = combineReducers({
	messages,
	firebase
});
export default rootReducer;