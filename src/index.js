import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './store/store.config'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import multi from 'redux-multi'

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(thunk, promise, multi)(createStore)(
  reducers,
  devTools
)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()
