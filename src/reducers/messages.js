import {MESSAGE_ADDED,MESSAGE_REMOVED} from '../constants/actionTypes';

const initialState = [];

export default function messages(state=initialState,action){
	switch(action.type){
		case MESSAGE_ADDED:
			return [action.message,...state];
		break;
		case MESSAGE_REMOVED:
			return state;
		default:
			return state;
}
}