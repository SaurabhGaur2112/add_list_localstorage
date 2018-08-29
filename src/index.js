import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { allReducer } from './reducers/index';

const store = createStore(allReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
