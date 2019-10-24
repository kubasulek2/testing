import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional component for congratulatory message.
 * @function Congrats
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component or null if success prop is set to false
 */

const Congrats = ({ success }) => {
	return (
		success
			? <div data-test='congrats-message'>
				Congratulations! You guessed the word!
			</div>
			: <div data-test='component-congrats'/>
	);
};

Congrats.propTypes = {
	success: PropTypes.bool.isRequired
};

export default Congrats;
