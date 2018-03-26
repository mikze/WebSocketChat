import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import reducer from './reducers'
import setupSocket from "../src/clientSocket/"
import createSagaMiddleware from 'redux-saga'
import MsgMiddlewareHandler from './saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
	reducer,
	applyMiddleware(sagaMiddleware)
)

window.store = store;

const socket = setupSocket(store.dispatch);

sagaMiddleware.run(MsgMiddlewareHandler, {socket})

ReactDOM.render(

    <Provider store={store}>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </Provider>
    
    , document.getElementById('root'));
registerServiceWorker();
