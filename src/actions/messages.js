import {CREATE_MESSAGE,REMOVE_MESSAGE,MESSAGE_ADDED,MESSAGE_REMOVED} from '../constants/actionTypes';

export function createMessage(message){
return (dispatch,getState)=>{
	const {firebase}= getState();
	firebase.push({message});	
}	
}
export function removeMessage(id){
	return {
		type:REMOVE_MESSAGE,
		id
	}
}

export function messageAdded(message){
	return {
		type:MESSAGE_ADDED,
		message
	};
}

export function messageRemoved(key){
	return {
		type:MESSAGE_REMOVED,
		id:key
	}
}