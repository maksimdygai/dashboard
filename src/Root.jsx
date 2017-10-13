import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import App from './components/App';
import {BrowserRouter} from 'react-router-dom'

const Root = ({store}) => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	);
}

Root.propTypes = {store: PropTypes.object};

export default Root;
