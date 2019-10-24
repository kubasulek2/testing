import React, { Component } from 'react';

import Congrats from './Components/Congrats/Congrats';
import GuessedWords from './Components/GuessedWords/GuessedWords';
import './App.css';

class App extends Component {
	state = {

	}
	render () {
		let guess = 'error';
		let guessed = 'ranks';

		function matchingLettersCount(guessed, guess){
			let count = 0;
			let length = guessed.length;
			for (let i = 0; i < length; i++) {
				for (let j = 0; j < guess.length; j++) {
					if(guessed[i] === guess[j]){
						guess = guess.replace(guess[j],'');
						count++;
						break;
					}
					
				}
			}

			return count;

		}
		const es6matchLettersCount = (guessed, guess) => Array.from

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
