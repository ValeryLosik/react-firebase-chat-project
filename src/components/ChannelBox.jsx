import React, { Component, PropTypes } from 'react';
import Channel from './Channel.jsx';
import {Card,List} from 'material-ui';

class ChannelBox extends Component{
	constructor(props){
		super(props);
		this.state = {
			channels: [
			'First',
			'Second'
			]
		};
	}


	render(){
		var channels = this.state.channels.map((channel)=>{
			return (
				<Channel channel={channel}/>
				);
		});

		return (
			
				<Card style={{flexGrow:1}}><List>{channels}</List></Card>
			
			);
	}
}

export default ChannelBox;