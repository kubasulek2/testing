import { actionTypes } from '../actions';

export default (state=[], action) => {
	switch (action) {
		case actionTypes.GUESS_WORD:
			console.log(action.payload);
			return [...state, action.payload];
		default:
			return state;
	}
};


