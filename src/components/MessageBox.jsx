import React, { Component, PropTypes } from 'react';
import Message from './Message.jsx';
import {Card,List} from 'material-ui';

class MessageBox extends Component{
	constructor(props){
		super(props);
		this.state = {
			messages: [
			'Hello world',
			'Hello galaxy'
			]
		};
	}


	render(){
		var messages = this.state.messages.map((message)=>{
			return (
				<Message message={message}/>
				);
		});

		return (
			
				<Card style={{flexGrow:2}}><List>{messages}</List></Card>
			
			);
	}
}

export default MessageBox;