import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import promiseMiddleware from 'redux-promise';
import {createStore, applyMiddleware} from 'redux';

//Components
import reducer from './redux/reducers'
import Routes from './router';

const createStoreWithMiddleware = createStore(reducer, applyMiddleware(promiseMiddleware));

ReactDOM.render(
    <Provider store={createStoreWithMiddleware}>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </Provider>, 
document.getElementById('root'));
