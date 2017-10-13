import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import Root from './Root';
import store from './redux/store/configure-store';
import {INITIAL_STATE} from './common/app-const';
import 'babel-polyfill';
import './styles/styles.scss';
import 'lodash';

ReactDOM.render(
    <AppContainer>
        <Root store={store} />
    </AppContainer>,
    
    document.getElementById('application')
);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./Root', () => {
        const NextApp = require('./Root').default;

        ReactDOM.render(
            <AppContainer>
                <NextApp store={store}/>
            </AppContainer>,

            document.getElementById('application')
        );
    });
}