import React, { Component } from 'react';

import Congrats from '../../Components/Congrats/Congrats';
import GuessedWords from '../../Components/GuessedWords/GuessedWords';
import './App.css';

class App extends Component {
	state = {

	}
	render () {
		return (
			<div className='App'>
				<h1>Jotto game</h1>
				<Congrats success={false}/>
				<GuessedWords guessedWords={[]}/>
			</div>
		);

	}
}

export default App;
