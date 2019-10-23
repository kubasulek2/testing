import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor (props) {
		super(props);
		this.state = {
			counter: 0,
			err: false
		};
	}
	render () {
		return (
			<div data-test='component-app'>
				<h1 data-test='counter-display'>The counter is currently {this.state.counter}</h1>
				<button
					data-test='increment-button'
					onClick={() => this.setState(prevState => ({
						counter: ++prevState.counter,
						error: false
					}))}
				>Increment Counter</button>
				<button
					data-test='decrement-button'
					onClick={() => this.setState(prevState => ({
						counter: prevState.counter > 0 ? --prevState.counter : prevState.counter,
						error: prevState.counter <= 0 ? true : prevState.error
					}))}
				>Decrement Counter
				</button>
				{this.state.error ? <p data-test='error-display'>Do not decrement below zero</p> : null}
			</div>
		);

	}
}

export default App;
