import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/messages';
import {setFirebaseRef,firebaseSubscribe} from '../actions/firebase';

import MessageBox from '../components/MessageBox.jsx';
import MessageForm from '../components/MessageForm.jsx';
import ChannelBox from '../components/ChannelBox.jsx';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import AppTheme from '../components/AppTheme.jsx';
import AppBar from 'material-ui/lib/app-bar';
import {FIREBASE_REF} from '../constants/config';

class App extends Component{

	static childContextTypes = {
		// muiTheme:PropTypes.object,
		messages: PropTypes.array.isRequired,
  		actions: PropTypes.object.isRequired,
  		dispatch:PropTypes.func.isRequired

	}

	componentDidMount(){
		const {dispatch} = this.props;
		dispatch(setFirebaseRef(FIREBASE_REF));
		dispatch(firebaseSubscribe());
	}

	// getChildContext(){
	// 	return {
	// 		muiTheme:ThemeManager.getMuiTheme(AppTheme)
	// 	}
	// }

	render(){
		const { messages, actions } = this.props;
		return (
			<div>
				<AppBar title="Chater"/>
				<div style={{
					display:'flex',
					flexFlow:'row wrap',
					maxWidth:1200,
					width:'100%',
					margin:'30px auto'

				}}>
					<ChannelBox/>
					<MessageBox messages={messages}/>
				</div>
				<MessageForm createMessage={actions.createMessage}/>
			</div>);
	}
}

function mapStateToProps(state){
	return {
		messages:state.messages
	}
}
function mapDispatchToProps(dispatch) {
  return {
  	actions:bindActionCreators(actions, dispatch),
  	dispatch
  }
}
export default connect(
	mapStateToProps, 
	mapDispatchToProps
	)(App);