import React from 'react'
import LikeCounter from './components/LikeCounter'
import './App.css'
import { Provider } from 'react-redux'
import store from './components/store'

function App() {
  return (
    <Provider store={store}>    
    <div className="App">
      <LikeCounter/>
    </div>
    </Provider>
  )
}

export default App
