import React from 'react';
import ReactDOM from 'react-dom';
import {Welcome} from './welcome.js';

class Home extends React.Component {
	render() {
		return <Welcome name='Ludwig van Beethoven' />;
	}
}

ReactDOM.render(
	<Home />,
	document.getElementById('app'));