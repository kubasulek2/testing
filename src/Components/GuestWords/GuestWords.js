import React from 'react';
import PropTypes from 'prop-types';

const GuestWords = ({ guessedWords }) => {
	let contents;
	if (guessedWords.length === 0) {
		contents = (
			<span data-test='guess-instructions'>
				Try to guess the secret word!
			</span>
		);
	} else {
		const guessedWordsRows = guessedWords.map(({ guessedWord, letterMatchCount }) => (
			<tr data-test='guessed-word' key={guessedWord}>
				<td>{guessedWord}</td>
				<td>{letterMatchCount}</td>
			</tr>
		));
		contents = (
			<div data-test='guessed-words'>
				<h3>Guessed Words</h3>
				<table>
					<thead>
						<tr><th>Guess</th><th>Matching Letters</th></tr>
					</thead>
					<tbody>
						{guessedWordsRows}
					</tbody>
				</table>
			</div>
		);
	}
	return (
		<div data-test='component-guessed-words'>
			{contents}
		</div>
	);
};
GuestWords.propTypes = {
	guessedWords: PropTypes.arrayOf(
		PropTypes.shape({
			guessedWord: PropTypes.string.isRequired,
			letterMatchCount: PropTypes.number.isRequired
		})
	).isRequired
};

export default GuestWords;
