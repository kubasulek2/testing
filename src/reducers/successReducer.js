import { actionTypes } from '../actions';

/**
 * @function successReducer
 * @param {array} state - Array of guessed words.
 * @param {object} action - Action to be reduced.
 * @returns {boolean} - New success state.
 */
export default (state = false, { type }) => {
	switch (type) {
		case actionTypes.CORRECT_GUESS:
			return true;
	}
	return state;
};