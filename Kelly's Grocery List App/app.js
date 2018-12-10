import React from 'react';
import ReactDOM from 'react-dom';
import {Greeting} from '.greeting.js';
import {Bakery} from '.bakery.js';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Grocery Shopping made Easy</h1>

				<Greeting
				value name="Kelly"
				/>
			</div>

			<div> 
				<h2>Shopping By catagory saves time and money.</h2>

				<Bakery
				value bread="Raisin Cinnamon Swirl"
				/>

		);
	}
}

ReactDOM.render(
	App />,
	document.getElementById('app'));