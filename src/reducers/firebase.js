import {SET_FIREBASE_REF} from '../constants/actionTypes';
import Firebase from 'firebase';

const initialState='';
export default function firebase(state=initialState,action){
	switch(action.type){
		case SET_FIREBASE_REF:
			state = new Firebase(action.value);
			return state;
		break;
		default:
		return state;
	}

}