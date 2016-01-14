import {SET_FIREBASE_REF} from '../constants/actionTypes';
import {messageAdded,messageRemoved} from './messages';
export function firebaseSubscribe(){
	return (dispatch,getState)=>{
		const {firebase} = getState();
		firebase.on('child_added',(snapshot)=>{
			console.log(snapshot.val());
			dispatch(messageAdded(snapshot.val()));
		});
		firebase.on('child_removed',(snapshot)=>{
			console.log(snapshot.val());
			dispatch(messageRemoved(snapshot.key()));
		});
	}
}
export function setFirebaseRef(ref){
	return {
		value:ref,
		type:SET_FIREBASE_REF
	}
}

