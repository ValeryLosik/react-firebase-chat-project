import React, { Component, PropTypes } from 'react';
import {ListItem,Avatar} from 'material-ui';

class Message extends Component{
	constructor(props){
		super(props);
	}


	render(){
		return (<ListItem
			leftAvatar={<Avatar src=""/>}
			>{this.props.message}</ListItem>);
	}
}

export default Message;