import React from 'react';
import ReactDOM from 'react-dom';

export class Bakery extends React.Component {
	render() {
		if (this.props.needBread == false) {
			return <h1>No bread needed this week</h1>
		} else {
			return <h1> Great, we have {this.props.bread}!</h1>;
		}
	}
}

