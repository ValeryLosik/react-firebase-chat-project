import React from 'react';
import {render} from 'react-dom';
import App from './containers/App.jsx';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
require('./main.scss');


const store = configureStore();
render(
		<Provider store = {store}>
		<App/>
		</Provider>
	,document.getElementById('container'));