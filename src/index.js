import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Puzzle from './Components/Puzzle';
import * as serviceWorker from './serviceWorker';
import store from "./config/store";
import {Provider} from "react-redux";

ReactDOM.render(<Provider store={store}>
    <Puzzle />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
