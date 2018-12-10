import React from 'react';
import ReactDOM from 'react-dom';
import {Greeting} from '.greeting.js';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Grocery Shopping made Easy</h1>

				<Greeting
				value name="Kelly"
				/>
			</div>
		);
	}
}

ReactDOM.render(
	App />,
	document.getElementById('app'));