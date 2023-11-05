import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index2.css'
import DataContextProvider from './context/DataContextProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </React.StrictMode>,
)
