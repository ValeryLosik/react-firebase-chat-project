import React, { Component, PropTypes } from 'react';
import {Card} from 'material-ui';

class MessageForm extends Component{
	constructor(props){
		super(props);
	}


	render(){
		return (
			<Card
				style={{
					margin:'30px auto 30px',
					maxWidth:1200,
					padding:30
				}}>
				<textarea style={{
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