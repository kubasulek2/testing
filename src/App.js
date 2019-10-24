import React, { Component } from 'react';

import Congrats from './Components/Congrats/Congrats';
import GuessedWords from './Components/GuessedWords/GuessedWords';
import './App.css';

class App extends Component {
	state = {

	}
	render () {
		return (
			<div>
				<Congrats success/>
			</div>
		);

	}
}

export default App;
