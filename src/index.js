import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let personsData = [
    {id : "1", name: "Petr"},
    {id : "2", name: "Igor"},
    {id : "3", name: "Eugeniy"},
    {id : "4", name: "Lena"},
    {id : "5", name: "Jeka"}
];

ReactDOM.render(
  <React.StrictMode>
    <App personData={personsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
