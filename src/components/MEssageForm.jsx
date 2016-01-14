import React, { Component, PropTypes } from 'react';
import {Card} from 'material-ui';
import trim from 'trim';
import Firebase from 'firebase';

class MessageForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			message:''
		}
		// this.firebaseRef = new Firebase('https://react-firebase-proj.firebaseio.com/messages');
	}

	static childContextTypes = {
		createMessage:PropTypes.func.isRequired
	}

	onChange(evt){
		this.setState({
			message:evt.target.value
		});
	}

	onKeyUp(evt){
		if(evt.keyCode === 13 && trim(evt.target.value)!=''){
			evt.preventDefault();
			this.props.createMessage(evt.target.value);
			this.setState({
				message:''
			});
			// this.firebaseRef.push({
			// 	message:this.state.message
			// });

			console.log('Message sent ',evt.target.value);
		}
	}




	render(){
		return (
			<Card
				style={{
					margin:'30px auto 30px',
					maxWidth:1200,
					padding:30
				}}>
				<textarea
				value={this.state.message}
				onChange={this.onChange.bind(this)}
				onKeyUp={this.onKeyUp.bind(this)}
				style={{
					width:'100%',
					minHeight:50,
					borderRadius:3,
					outline:'auto 0px'
				}}>
				</textarea>
			</Card>);
	}
}

export default MessageForm;