import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import {ticketOneReducer} from "./redux/reducer/datvebaimot.jsx";
import { ticketTwoReducer } from './redux/reducer/ticket.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
const rootReducer = combineReducers({
  ticketTwoReducer,
  ticketOneReducer,
})
let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

root.render(
  
  <Provider store={store}>
    <App />
  </Provider>,
)
