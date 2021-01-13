import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store'

import ChessboardComponent from "./chessboard";

const App = () => {
    return(
        <div>
            <ChessboardComponent />
            <ChessboardComponent />

        </div>
    )
};


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
