import React, { Component, PropTypes } from 'react';
import Message from './Message.jsx';
import {Card,List} from 'material-ui';
import Firebase from 'firebase';
import _ from 'lodash';

class MessageBox extends Component{
	constructor(props){
		super(props);
		this.state = {
			messages: []
		};
		this.firebaseRef = new Firebase('https://react-firebase-proj.firebaseio.com/messages');
		this.firebaseRef.once('value',(data)=>{
			var messages = data.val();
			this.setState({
				messages:messages
			});
		});
	}


	render(){
		var messages = this.state.messages.map((message)=>{
			return (
				<Message message={message.message}/>
				);
		});

		return (
			
				<Card style={{flexGrow:2}}><List>{messages}</List></Card>
			
			);
	}
}

export default MessageBox;