import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './Components/Store/store'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
const root = ReactDOM.createRoot(document.getElementById('root'))



const renderApp = () => {
  root.render(
  <Provider store={store}>
  <App/>
  </Provider>
  )
}

renderApp()
store.subscribe(renderApp)