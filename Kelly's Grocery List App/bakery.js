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









	render() {
		if (this.props.signedIn == false) {
			return <h1>Logged Out</h1>;
		} else {
			return <h1> Hi there, {this.props.name}!</h1>;
		}
	}
}