import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';

const root = document.getElementById('root');
ReactDOM.render(<App store={store} />, root);
