import React, { Component, PropTypes } from 'react';
import MessageBox from './MessageBox.jsx';
import ChannelBox from './ChannelBox.jsx';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import AppTheme from './AppTheme.jsx';
import AppBar from 'material-ui/lib/app-bar';

class App extends Component{
	constructor(props){
		super(props);
	}

	static childContextTypes = {
		muiTheme:PropTypes.object
	}

	getChildContext(){
		return {
			muiTheme:ThemeManager.getMuiTheme(AppTheme)
		}
	}


	render(){
		return (
			<div>
				<AppBar title="Chater"/>
				<div style={{
					display:'flex',
					flexFlow:'row wrap',
					maxWidth:1200,
					width:'100%',
					margin:'30px auto 30px'

				}}>
					<ChannelBox/>
					<MessageBox/>
				</div>
			</div>);
	}
}

export default App;