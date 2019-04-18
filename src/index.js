import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { robots } from './robots'

// ReactDOM.render(<Hello greet={'Hello there, how are you?'}/>, document.getElementById('root'));
ReactDOM.render(
    <CardList robots={robots} />,
    document.getElementById('card'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers:

serviceWorker.unregister();
