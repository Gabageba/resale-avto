import reportWebVitals from './reportWebVitals'
import store from './redux/store';
// import React, {createContext} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {Provider} from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root'))

reportWebVitals()
