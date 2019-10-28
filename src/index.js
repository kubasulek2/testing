import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './Containers/App/App';
import store from './configureStore';
//const regex = /(?!-)(?:(.)\1\1|^(.).{3}\2.{3}\2|(?<=^.{2})(.)(?:.\3){2}|(?<=^.{0,2})(.)(?:..\4){2})/;

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root')
);
