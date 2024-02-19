import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux'; //gives access to components which should have access(globally) to the store
import userReducer from './features/User'
import themeReducer from './features/theme.jsx'

const store = configureStore({
  reducer: { //reducer takes the currentValue of all states:manage and change them
    user: userReducer,
    theme: themeReducer,
  }, 
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
