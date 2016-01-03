import React, { Component, PropTypes } from 'react';
import Message from './Message.jsx';

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
			<div>{messages}</div>
			);
	}
}

export default MessageBox;