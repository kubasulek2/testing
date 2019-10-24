import {actionTypes} from '../actions';
import successReducer from './successReducer';

test('returns default initial state of `false` when no action is passed' , () => {
	const initialState = successReducer(undefined, {});
	expect(initialState).toBe(false);
});
test('returns  state of `true` upon receiving an action of type `CORRECT_GUESS`', () => {
	const state = successReducer(undefined, {type: actionTypes.CORRECT_GUESS});
	expect(state).toBe(true);
});