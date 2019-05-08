import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let Posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: '0'},
    {id: 2, message: 'It\'s my first post', likesCount: '23'}
]
let dialogs = [
    {id: 1, name: 'Vasya'},
    {id: 2, name: 'Sasha'},
    {id: 3, name: 'Pavlo'},
    {id: 4, name: 'Vova'}
]

let Massages = [
    {id: 1, massage: 'Hi'},
    {id: 2, massage: 'How are you?'},
    {id: 3, massage: 'Good'},
    {id: 4, massage: 'Good luck'}
]

ReactDOM.render(<App Massages={Massages} dialogs= {dialogs} Posts = {Posts}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
