import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './router';
import {Provider} from 'react-redux';
import store from './redux/store'
import {hot} from 'react-hot-loader/root';

const HotRoutes = hot(Routes)


ReactDOM.render(
    <Provider store={store}>
        <HotRoutes/>
        {/*<Routes/>*/}
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
