import reportWebVitals from './reportWebVitals'
import store from './redux/store';
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {Provider} from 'react-redux';

console.log(process.env.REACT_APP_API_URL)

ReactDOM.render(
  <Provider store={store}>
    <App state={store.getState()}/>
  </Provider>, document.getElementById('root'))

reportWebVitals()
