import React, { Component, PropTypes } from 'react';
import Message from './Message.jsx';
import {Card,List} from 'material-ui';
import Firebase from 'firebase';
import _ from 'lodash';

class MessageBox extends Component{
	constructor(props){
		super(props);
		this.state = {
			messages: {}
		};
		this.firebaseRef = new Firebase('https://react-firebase-proj.firebaseio.com/messages');
		this.firebaseRef.on('child_added',(data)=>{
			if(this.state.messages[data.key()]){
				return;
			}

			var messageVal = data.val();
			messageVal.key = data.key();
			this.state.messages[messageVal.key] = messageVal;
			this.setState({
				messages:this.state.messages
			});
		});
		this.firebaseRef.on('child_removed',(data)=>{
			var key = data.key();
			delete this.state.messages[key];
			this.setState({
				messages:this.state.messages
			});
		});
	}


	render(){
		var messages = _.values(this.state.messages).map((message)=>{
			return (
				<Message message={message.message}/>
				);
		});

		return (
			
				<Card style={{flexGrow:2,margin:' 0 0 0 30px'}}><List>{messages}</List></Card>
			
			);
	}
}

export default MessageBox;