import App from './js/App.jsx';
import React from 'react';

function onRenderError(error) {
	if (error) {
		return console.error(err);
	}
}

React.render(
	<App/>,
	document.getElementById('main'),
	onRenderError
 );