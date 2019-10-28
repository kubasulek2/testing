import React, { Component } from 'react';
import { connect } from 'react-redux';

class Input extends Component {
	render () {


		const content = this.props.success
			? null
			: <form>
				<input type="text" data-test='input-box' placeholder='enter guess' />
				<button type='submit' data-test='submit-button'>submit</button>
			</form>;
		return (
			<div data-test='component-input'>
				{content}
			</div>
		);
	}
}

const mapStateToProps = ({ success }) => {
	return { success };
};

export default connect(mapStateToProps)(Input);
